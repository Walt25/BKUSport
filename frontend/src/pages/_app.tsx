import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import { Header } from "../components/Header";
// import { Footer } from "../components/Footer";
// import { useRouter } from "next/router";
// import { I18nProvider } from "../contexts/I18n";
// import { AdminLayout } from "@/components/Layout/AdminLayout";

// export default function App({ Component, pageProps }: AppProps) {
//     const route = useRouter();

//     console.log(route.pathname)

//     if (["/login", "/logout", "/signup"].includes(route.pathname)) return <Component {...pageProps} />;
//     if (["/admin", "/admin/productlist", "/admin/productlist/[...slug]"].includes(route.pathname)) return <AdminLayout>
//         <Component {...pageProps} />    
//     </AdminLayout>;

//     return (
//         <I18nProvider>
//             <div>
//                 <div style={{ zIndex: 99 }} className="sticky top-0 w-full">
//                     <Header />
//                 </div>
//                 <Component {...pageProps} />
//                 <div className="w-[94%] mx-auto pt-6">
//                     <Footer />
//                 </div>
//                 <div id={"model-container"}></div>
//             </div>
//         </I18nProvider>
//     );
// }
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { UserLayout } from "@/components/Layout/UserLayout";
import { useRouter } from "next/router";

type NextPageWithLayout = NextPage & {
  // define the getLayout method for every page
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  // override the default Component definition
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
    const route = useRouter();

    console.log(route.pathname)

    if (["/login", "/logout", "/signup", "/verification/[...slug]", "/forgot", "/verification/password/[...slug]"].includes(route.pathname)) return <Component {...pageProps} />;
    const getLayout = Component.getLayout;

    if (getLayout) {
        return getLayout(<Component {...pageProps} />);
    }
    return <UserLayout><Component {...pageProps} /></UserLayout>

};

export default App;