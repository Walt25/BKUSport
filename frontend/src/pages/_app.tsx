import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useRouter } from "next/router";
import { I18nProvider } from "../contexts/I18n";

export default function App({ Component, pageProps }: AppProps) {
    const route = useRouter();

    if (["/login", "/logout", "/signup"].includes(route.pathname)) return <Component {...pageProps} />;

    return (
        <I18nProvider>
            <div>
                <div style={{ zIndex: 99 }} className="sticky top-0 w-full">
                    <Header />
                </div>
                <Component {...pageProps} />
                <div className="w-[94%] mx-auto pt-6">
                    <Footer />
                </div>
                <div id={"model-container"}></div>
            </div>
        </I18nProvider>
    );
}
