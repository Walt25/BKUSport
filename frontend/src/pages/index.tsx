import { BoxBanner } from "@/components/BoxBanner";
import { Carousel } from "@/components/Carousel";

import Divider from "@mui/material/Divider";
import { ProductsCarousel } from "@/components/ProductsCarousel";
import { bannerBottom, bannerCarousel, bannerTop, policy, productData} from "@/data";
import { useMediaQuery } from "@mui/material";
import { Catalog } from "@/components/Catalog";
import { getProducts } from "./api/product";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export const getServerSideProps = async () => {
    const products = await getProducts();
    return {
        props: {
            products
        },
    };

}

export default function Home(props: {products: any[]}) {
    const sm = useMediaQuery("(max-width: 640px)");
    const md = useMediaQuery("(max-width: 768px)");

    const router = useRouter()

    // useEffect(() => {
    //     router.push('/login')
    // }, [])

    return (
        <main className="flex min-h-screen flex-col items-center">
            <div className=" w-[94%] mx-auto pt-3 px-3 max-sm:hidden flex flex-row">
                <div className="w-[20%] h-fit max-lg:hidden mr-3">
                    <Catalog canExpand={true}/>
                </div>
                <div className="flex-1 overflow-hidden">
                    <Carousel srcs={bannerCarousel} slidePerView={1} /> 
                </div>
            </div>
            <div className="w-[94%] mx-auto flex flex-row n max-sm:flex-col">
                {bannerTop.map((item, key) => (
                    <BoxBanner src={item} sx={"flex-1 mx-3 my-6"} key={key} />
                ))}
            </div>
            <div className=" w-[94%] mx-auto py-12 flex flex-col items-center">
                <h1 className="font-semibold text-lg">Sản phẩm nổi bật</h1>
                <div className="w-full px-3 pt-6">
                    <Divider className="w-full" />
                </div>
            </div>
            <div className="w-[94%] mx-auto px-3 mb-12">
                <ProductsCarousel items={productData} slidePerView={sm ? 3 : md ? 5 : 6} />
            </div>
            <div className="w-[94%] mx-auto px-3 border border-[#ebebeb] flex flex-row justify-between max-sm:flex-col">
                {policy.map((item, key) => (
                    <div className="flex flex-row flex-1 justify-center items-center py-10" key={key}>
                        <img src={item.icon} alt="pic" />
                        <div className="flex flex-col px-3">
                            <span className="text-sm font-semibold py-2">{item.title}</span>
                            <span className="text-xs text-[#91959b]">{item.describe}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className=" w-[94%] mx-auto py-12 flex flex-col items-start px-3">
                <h1 className="font-semibold text-2xl">Sản phẩm</h1>
                <div className="w-full pt-6">
                    <Divider className="w-full" />
                </div>
            </div>
            <div className="w-[94%] mx-auto px-3">
                <div className="mb-12">
                    <ProductsCarousel items={productData} slidePerView={sm ? 3 : md ? 5 : 6} />
                </div>
                <div className="mb-6">
                    <ProductsCarousel items={productData} slidePerView={sm ? 3 : md ? 5 : 6} />
                </div>
            </div>
            <div className="w-[94%] mx-auto flex flex-row max-sm:flex-col">
                {bannerBottom.map((item, key) => (
                    <BoxBanner src={item} sx={"flex-1 mx-3 my-6"} key={key} />
                ))}
            </div>
            <div className=" w-[94%] mx-auto py-12 flex flex-col items-start px-3">
                <h1 className="font-semibold text-2xl">Sản phẩm nên thử</h1>
                <div className="w-full pt-6">
                    <Divider className="w-full" />
                </div>
            </div>
            <div className="w-[94%] mx-auto px-3">
                <div>
                    <ProductsCarousel items={productData} slidePerView={sm ? 3 : md ? 5 : 6} />
                </div>
            </div>
            <div className=" w-[94%] mx-auto py-6 flex flex-col items-start px-3">
                <h1 className="font-semibold text-2xl">Sản phẩm mới</h1>
                <div className="w-full pt-6">
                    <Divider className="w-full" />
                </div>
            </div>
            <div className="w-[94%] mx-auto px-3">
                <div>
                    <ProductsCarousel items={productData} slidePerView={sm ? 3 : md ? 5 : 6} />
                </div>
            </div>
            <div className="w-full pt-6">
                <Divider className="w-full" />
            </div>
        </main>
    );
}
