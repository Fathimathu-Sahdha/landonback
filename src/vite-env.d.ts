/// <reference types="vite/client" />

interface Window {
    google: {
        translate: {
            TranslateElement: {
                new(
                    options: {
                        pageLanguage: string;
                        includedLanguages?: string;
                        layout?: number;
                        autoDisplay?: boolean;
                    },
                    elementId: string
                ): void;
                InlineLayout: {
                    SIMPLE: number;
                };
            };
        };
    };
    googleTranslateElementInit: () => void;
}
