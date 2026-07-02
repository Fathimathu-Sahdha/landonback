# London Bakery — Content Entry Guide

This guide is for **people who update website text** (English and Arabic). You do **not** need to know programming. In almost all cases, you only edit the text inside specific files — the technical “plumbing” is already done for you.

---

## The short version

| What you want to change | File to edit |
|-------------------------|--------------|
| Homepage text | `src/data/content/en/home.ts` |
| Header menu, footer, 404 page | `src/data/content/en/layout.ts` |
| Products page labels (“View ingredients”, etc.) | `src/data/content/en/products.ts` |
| About Us page | `src/data/content/en/about-us.ts` |
| Contact Us page | `src/data/content/en/contact-us.ts` |
| Our Stories page | `src/data/content/en/our-stories.ts` |
| A product (name, description, ingredients…) | `src/data/products/categories/<category>.ts` |
| Arabic version of page text | Matching file in `src/data/content/ar/` |
| Arabic product text | Same product file — use the `arabic:` block |
| Arabic category name on site | `src/data/products/ar/categories/<category>.ts` |

**You should not need to edit:** React pages, components, `index.ts` files, or anything outside the folders above — unless a developer adds a **brand new page or section** (see end of this guide).

---

## How the website picks a language

- Visitors switch **EN** / **AR** using the buttons in the header.
- **English** always comes from the `en/` files (and `categories/` for products).
- **Arabic** is added in matching `ar/` files. You only type the Arabic for fields that are different. Anything you leave out falls back to English automatically.

You do not need to understand how that merge works — just put Arabic text in the right `ar/` file.

---

## Folder map (where everything lives)

```
src/data/
├── content/                    ← Page text (not individual products)
│   ├── en/                     ← English (main source)
│   │   ├── home.ts
│   │   ├── layout.ts
│   │   ├── products.ts
│   │   ├── about-us.ts
│   │   ├── contact-us.ts
│   │   └── our-stories.ts
│   └── ar/                     ← Arabic overrides (same file names)
│       ├── home.ts
│       ├── layout.ts
│       ├── products.ts
│       └── ...
│
└── products/                   ← Product catalog
    ├── categories/             ← English + per-product Arabic
    │   ├── bites.ts
    │   ├── london-breads.ts
    │   ├── croissants.ts
    │   └── ... (one file per category)
    └── ar/categories/          ← Optional Arabic category display name only
        ├── bites.ts
        └── ...
```

---

## Golden rules (read this before editing)

These rules prevent the site from failing to build:

1. **Only change text inside quotation marks** `"..."` unless a developer told you otherwise.
2. **Every line of content except the last one in a group needs a comma** `,` at the end.
3. **Do not delete** `{`, `}`, `[`, `]`, or labels like `title:` — only change the words after them.
4. **Use straight double quotes** `"` not curly quotes `“` `”`.
5. If text contains an apostrophe (e.g. **Mother's**), the line still works as long as the string uses double quotes on the outside.
6. **Do not remove** the first two lines at the top of a file (the `import` lines). They are required plumbing — leave them exactly as they are.
7. **Do not rename** exported names like `homeContent`, `aboutUsContent`, `bitesCategory`, `homeContentAr`, etc.

### Example — changing one line safely

**Before:**
```ts
title: "What inspires you today?",
```

**After:**
```ts
title: "What would you like to try today?",
```

The label `title:` stays. The comma at the end stays. Only the words inside the quotes change.

---

## Part 1 — Editing English page text

### Step 1: Open the right file

Use the table at the top. For example, to change the homepage hero line, open:

`src/data/content/en/home.ts`

### Step 2: Find the field

Each piece of text has a **label** followed by the text. Common labels:

| Label | Meaning |
|-------|---------|
| `title` | Heading |
| `description` | Paragraph |
| `cta` | Button or link text |
| `imageAlt` | Short description of an image (for accessibility) |
| `label` | Form field name |
| `placeholder` | Hint text inside a form box |

### Step 3: Edit the text inside the quotes

### What the top of every English page file looks like (do not change this)

```ts
import type { HomePageContent } from "../types";

export const homeContent: HomePageContent = {
```

- Line 1 imports a **type** — it tells the computer the shape of the file. **Do not edit.**
- Line 3 exports a **variable** (`homeContent`) that the rest of the site reads. **Do not rename.**

Other English files follow the same pattern with different names:

| File | Variable name | Type name (line 1) |
|------|---------------|-------------------|
| `en/home.ts` | `homeContent` | `HomePageContent` |
| `en/layout.ts` | `layoutContent` | `LayoutContent` |
| `en/products.ts` | `productsContent` | `ProductsPageContent` |
| `en/about-us.ts` | `aboutUsContent` | `AboutUsContent` |
| `en/contact-us.ts` | `contactUsContent` | `ContactUsContent` |
| `en/our-stories.ts` | `ourStoriesContent` | `OurStoriesContent` |

You never create these yourself for existing pages — they are already set up.

### Lists of items (e.g. featured products, recipes, timeline)

Lists use `[` `]` and items use `{` `}`. To change an item, edit its `title` / `description` inside that block. To **add** a new item, copy an existing block and paste it below, then change the text — ask a developer to review if unsure.

### Special placeholders (products page UI)

In `en/products.ts`, some strings contain placeholders:

| Placeholder | Meaning | Example string |
|-------------|---------|----------------|
| `{category}` | Replaced with the category name | `"Why Choose Our {category} Products?"` |
| `{count}` | Replaced with number of products | `"{count} Products Available"` |

Keep `{category}` and `{count}` exactly as written — only change the English around them.

### Category description keys

In `en/products.ts`, under `categoryDescriptions`, each category uses its **English category name** as the key:

```ts
categoryDescriptions: {
  Bites: "Indulge in our delightful collection...",
  "London breads": "From the soft heart of bread...",
  Keksy: "Our delightful keksy range...",
}
```

If the key has a space (like `London breads`), it must stay in quotes.

---

## Part 2 — Adding Arabic page text

Arabic files mirror English files in `src/data/content/ar/`.

### Step 1: Open the matching Arabic file

| English file | Arabic file |
|--------------|-------------|
| `en/home.ts` | `ar/home.ts` |
| `en/layout.ts` | `ar/layout.ts` |
| `en/products.ts` | `ar/products.ts` |
| `en/about-us.ts` | `ar/about-us.ts` |
| `en/contact-us.ts` | `ar/contact-us.ts` |
| `en/our-stories.ts` | `ar/our-stories.ts` |

### Step 2: Copy structure from English, paste Arabic text

You **only need to include sections you want to translate**. Untranslated fields automatically show English on the Arabic site.

**Top of an Arabic file (do not change):**

```ts
import type { DeepPartial } from "../merge";
import type { HomePageContent } from "../types";

export const homeContentAr: DeepPartial<HomePageContent> = {
```

- `DeepPartial` means “only some fields need Arabic — the rest can stay English.”
- The variable ends with `Ar` (e.g. `homeContentAr`). **Do not rename.**

### Minimal Arabic example

English (`en/home.ts`):
```ts
inspiration: {
  title: "What inspires you today?",
  description: "Explore all of our products...",
  cta: "DISCOVER OUR PRODUCTS",
},
```

Arabic (`ar/home.ts`) — only translate what you need:
```ts
inspiration: {
  title: "ما الذي يلهمك اليوم؟",
  description: "استكشف جميع منتجاتنا...",
  cta: "اكتشف منتجاتنا",
},
```

You do **not** repeat the entire English file. Skip sections that are not translated yet.

### Product page UI in Arabic

`ar/products.ts` is currently empty:

```ts
export const productsContentAr: DeepPartial<ProductsPageContent> = {};
```

To translate product page buttons and headings, add matching sections from `en/products.ts`. For example:

```ts
export const productsContentAr: DeepPartial<ProductsPageContent> = {
  listing: {
    fancyTitle: "ماذا تشتهي اليوم؟",
    viewIngredients: "عرض المكونات ←",
  },
  detail: {
    ingredients: "المكونات",
    allergens: "مسببات الحساسية",
  },
};
```

Add one section at a time. Copy the **keys** (`fancyTitle`, `ingredients`, etc.) exactly from the English file — only change the quoted text.

### Plumbing already done for Arabic pages

These files already connect Arabic to the site. **You do not edit them:**

- `src/data/content/index.ts` — wires all `en/` and `ar/` files together
- `src/data/content/merge.ts` — merges Arabic over English

---

## Part 3 — Editing products (English and Arabic)

Each product lives in one category file under `src/data/products/categories/`.

| Category on site | File |
|------------------|------|
| Bites | `bites.ts` |
| London breads | `london-breads.ts` |
| Croissants | `croissants.ts` |
| Keksy | `keksy.ts` |
| Flat Breads | `flat-breads.ts` |
| Rolls & Buns | `rolls-and-buns.ts` |
| Ruskit & Crumbs | `ruskit-and-crumbs.ts` |
| Kids Fruffie | `kids-fruffie.ts` |
| Donuts | `donuts.ts` |
| Premium Range | `premium-range.ts` |

### Top of a category file (do not change)

```ts
import type { ProductCategory } from "../types";

export const bitesCategory: ProductCategory = {
```

- `import type { ProductCategory }` — required plumbing. **Do not edit.**
- `bitesCategory` — variable name must match the file (each category has its own name). **Do not rename.**

### Each product has two blocks

```ts
{
  english: {
    name: "MARBLE BITE",
    description: "Delicious marble cake...",
    detailDescription: "Enjoy the perfect blend...",
    ingredients: [
      "Wheat Flour",
      "Sugar",
      ...
    ],
    allergens: ["Gluten", "Milk Powder", "Egg"],
    ...
  },
  arabic: {
    name: " شريحة كيك",
    description: "كعكة رخامية لذيذة...",
    ingredients: [
      "دقيق القمح،",
      "سكر،",
      ...
    ],
    allergens: ["غلوتين", "مسحوق حليب", "بيض"],
  },
},
```

### Editing English product text

Change only the values inside `english: { ... }`.

Common fields:

| Field | Where it appears |
|-------|------------------|
| `name` | Product cards and detail page title |
| `description` | Short summary |
| `detailDescription` | Long text on product detail page |
| `ingredients` | Ingredients list |
| `allergens` | Allergen warnings |
| `nutrition` | Energy, fat, protein, etc. |

**Do not change** image paths (`image`, `image2`, `detailImage`), colors (`bgcolor`), or `size` unless a developer asks you to.

### Adding or updating Arabic for a product

Edit the `arabic: { ... }` block **directly below** the same product’s `english` block.

You can translate **only some fields** — for example just `name` and `description`. Missing Arabic fields will show the English value.

**Minimal Arabic (name only):**
```ts
arabic: {
  name: "شريحة كيك رخامية",
},
```

**Full Arabic (copy structure from english):**
```ts
arabic: {
  name: "شريحة كيك",
  description: "...",
  detailDescription: "...",
  ingredients: [ "...", "..." ],
  allergens: [ "غلوتين", "مسحوق حليب" ],
},
```

If a product has no `arabic` block yet, a developer can add one — or you can copy this pattern from a neighbouring product in the same file.

### Arabic category name (optional)

To show an Arabic **category heading** (e.g. “Bites” → Arabic name), edit:

`src/data/products/ar/categories/bites.ts`

```ts
import type { CategoryLocaleOverride } from "../../types";

export const bitesCategoryAr: CategoryLocaleOverride = {
  name: "قضات",
};
```

Today most of these files are empty (`{}`). Add only `name` unless told otherwise.

**Plumbing already done:** `src/data/products/index.ts` loads every category file and applies Arabic automatically. You do not edit `index.ts`.

---

## Part 4 — Checking your work

1. Save the file.
2. Ask a developer to run the site locally, **or** wait for the next deployment.
3. Open the website and click **AR** in the header.
4. Visit the page you changed and confirm the text looks correct.
5. Switch back to **EN** and confirm English is still correct.

If the site fails to build after your edit, it is usually a **missing comma** or **broken quote** — send the file to a developer; they can fix syntax in seconds.

---

## Part 5 — What requires a developer

You can handle **almost all day-to-day text** without code. Ask a developer when:

| Situation | Why |
|-----------|-----|
| A **new page** is added to the website | New route, new component, new content file, new imports in `index.ts` |
| A **new section** on a page (new heading block the site does not have yet) | May need new keys in `types.ts` and component updates |
| A **new product category** | New file in `categories/`, new stub in `ar/categories/`, updates to `products/index.ts` |
| A **new product** in a category | Safer to duplicate an existing product block with developer review |
| Changing **images, colours, or URLs** | Easy to break paths or layout |
| Anything in `types.ts`, `merge.ts`, or page `.tsx` files | Programming work |

---

## Quick reference — Arabic variable names

| English file | Arabic file | Arabic variable |
|--------------|-------------|-----------------|
| `en/home.ts` | `ar/home.ts` | `homeContentAr` |
| `en/layout.ts` | `ar/layout.ts` | `layoutContentAr` |
| `en/products.ts` | `ar/products.ts` | `productsContentAr` |
| `en/about-us.ts` | `ar/about-us.ts` | `aboutUsContentAr` |
| `en/contact-us.ts` | `ar/contact-us.ts` | `contactUsContentAr` |
| `en/our-stories.ts` | `ar/our-stories.ts` | `ourStoriesContentAr` |

| Category file | Arabic category override variable |
|-------------|-----------------------------------|
| `categories/bites.ts` | `bitesCategoryAr` in `ar/categories/bites.ts` |
| `categories/london-breads.ts` | `londonBreadsCategoryAr` |
| `categories/croissants.ts` | `croissantsCategoryAr` |
| `categories/keksy.ts` | `keksyCategoryAr` |
| `categories/flat-breads.ts` | `flatBreadsCategoryAr` |
| `categories/rolls-and-buns.ts` | `rollsAndBunsCategoryAr` |
| `categories/ruskit-and-crumbs.ts` | `ruskitAndCrumbsCategoryAr` |
| `categories/kids-fruffie.ts` | `kidsFruffieCategoryAr` |
| `categories/donuts.ts` | `donutsCategoryAr` |
| `categories/premium-range.ts` | `premiumRangeCategoryAr` |

---

## Summary

- **English:** edit text in `src/data/content/en/` and `src/data/products/categories/`.
- **Arabic:** edit matching `src/data/content/ar/` files (partial updates OK) and `arabic:` blocks on products.
- **Leave alone:** `import` lines, variable names (`homeContent`, `bitesCategory`, …), `index.ts`, `merge.ts`, and React page files.
- The technical plumbing to connect your text to the live site is **already in place** for all current pages and categories.

If you are unsure which file to edit, use the table at the top of this guide or ask a developer with the page name and the sentence you want to change.
