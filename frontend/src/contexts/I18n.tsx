import React, { useEffect } from "react";

type Locale = "en" | "vi";

type I18nContextType = {
    locale: Locale;
    changeLocale: (locale: Locale) => void;
};

export const I18nContext = React.createContext<I18nContextType>({} as I18nContextType);

export const I18nProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [locale, setLocale] = React.useState<Locale>("vi");

    useEffect(() => {
        const storedLocale = localStorage.getItem("locale") as Locale;
        if (storedLocale) {
            setLocale(storedLocale);
        }
    }, []);

    const changeLocale = (locale: Locale) => {
        setLocale(locale);
        localStorage.setItem("locale", locale);
    };

    const value = React.useMemo(() => ({ locale, changeLocale }), [locale]);

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};
