import React from "react";
import { I18nContext } from "../contexts/I18n";

import en from "../locales/en.json";

const translations: { [key: string]: any } = {
    en,
};

export const useI18n = () => {
    const { locale, changeLocale } = React.useContext(I18nContext);

    const t = (key: string): string => {
        if (translations[locale] === undefined) {
            return key;
        }

        return translations[locale][key] ?? key;
    };

    return { t, locale, changeLocale };
};
