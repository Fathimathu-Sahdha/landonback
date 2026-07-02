export type DeepPartial<T> = T extends readonly (infer U)[]
  ? DeepPartial<U>[]
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

export const mergeStaticPageContent = <T>(
  base: T,
  override: DeepPartial<T> | undefined,
): T => {
  if (override === undefined) {
    return base;
  }

  if (Array.isArray(base)) {
    if (!Array.isArray(override)) {
      return base;
    }

    return base.map((item, index) => {
      const overrideItem = override[index];

      if (overrideItem === undefined) {
        return item;
      }

      if (
        typeof item === "string" ||
        typeof item === "number" ||
        typeof item === "boolean"
      ) {
        return overrideItem as T;
      }

      return mergeStaticPageContent(item, overrideItem as DeepPartial<typeof item>);
    }) as T;
  }

  if (isPlainObject(base) && isPlainObject(override)) {
    const result = { ...base };

    for (const key of Object.keys(override) as Array<keyof T>) {
      const overrideValue = override[key as keyof typeof override];

      if (overrideValue !== undefined) {
        result[key] = mergeStaticPageContent(
          base[key],
          overrideValue as DeepPartial<T[keyof T]>,
        );
      }
    }

    return result;
  }

  return override as T;
};
