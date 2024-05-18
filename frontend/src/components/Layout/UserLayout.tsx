import { I18nProvider } from "@/contexts/I18n";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { AdminLayout } from "./AdminLayout";
import { ReactNode } from "react";
import { CurrentUserContextProvider } from "@/contexts/userContext";


type UserLayoutProp = {
    children: ReactNode
}

export const UserLayout:React.FC<UserLayoutProp> = ({children}) => {
    
    return (
        <CurrentUserContextProvider>
            <I18nProvider>
                <div>
                    <div style={{ zIndex: 99 }} className="sticky top-0 w-full">
                        <Header />
                    </div>
                    {
                        children
                    }
                    <div className="w-[94%] mx-auto pt-6">
                        <Footer />
                    </div>
                    <div id={"model-container"}></div>
                </div>
            </I18nProvider>
        </CurrentUserContextProvider>
    );
}