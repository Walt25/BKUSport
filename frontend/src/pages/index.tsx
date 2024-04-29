import { BoxBanner } from "@/components/BoxBanner";
import { Carousel } from "@/components/Carousel";

import Divider from "@mui/material/Divider";
import { ProductsCarousel } from "@/components/ProductsCarousel";
import { bannerBottom, bannerCarousel, bannerTop, policy, productData} from "@/data";
import { useMediaQuery } from "@mui/material";
import { Catalog } from "@/components/Catalog";
import { getProducts } from "./api/product";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductType } from "@/components/Product";
import { FieldsCarousel } from "@/components/FieldsCarousel";
import { FoodsCarousel } from "@/components/FoodsCarousel";

export type FieldsType = {
    images: string[],
    location: string,
    name: string,
    _id: string,
    slug: string
}

export type Foodstype = {
    _id: string,
    images: string[],
    name: string,
    stock: number,
    price: number,
    description: string,
    slug: string
}

export default function Home(props: {products: any[]}) {
    const sm = useMediaQuery("(max-width: 640px)");
    const md = useMediaQuery("(max-width: 768px)");
    const [fields, setFields] = useState<FieldsType[]>([])
    const [foods, setFoods] = useState<Foodstype[]>([])


    const router = useRouter()

    useEffect(() => {
        const getFields = async () => {
            const res = await axios.get("http://localhost:4000/fields")
            if (res.data.result.length > 0) {
                res.data.result.forEach((item: FieldsType) => {
                    const slug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
                    item.slug = slug;
                  });
                setFields(res.data.result)
            }
            else setFields([])
        }

        const getFoods = async () => {
            const res = await axios.get("http://localhost:4000/foods")
            if (res.data.result.length > 0) {
                res.data.result.forEach((item: Foodstype) => {
                    const slug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
                    item.slug = slug;
                  });
                setFoods(res.data.result)
            }
            else setFoods([])
        }

        getFields()
        getFoods()
    }, [])

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
                    <BoxBanner src={item} sx={"flex-1 mx-3 my-6 h-[220px]"} key={key} />
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
                <div className="flex flex-row justify-between w-full">
                    <h1 className="font-semibold text-2xl">Sân thể thao</h1>
                    <input type="text" className="border rounded-lg px-3 py-2 mt-1 text-sm" value="Chọn môn thể thao"/>
                </div>
                <div className="w-full pt-6">
                    <Divider className="w-full" />
                </div>
            </div>
            <div className="w-[94%] mx-auto px-3">
                    <FieldsCarousel items={fields} slidePerView={sm ? 3 : md ? 3 : 4} />
            </div>
            <div className=" w-[94%] mx-auto py-6 flex flex-col items-start px-3">
                <h1 className="font-semibold text-2xl">Đồ uống</h1>
                <div className="w-full pt-6">
                    <Divider className="w-full" />
                </div>
            </div>
            <div className="w-[94%] mx-auto px-3">
                <div>
                    <FoodsCarousel items={foods} slidePerView={sm ? 3 : md ? 5 : 6} />
                </div>
            </div>
            <div className="w-full pt-6">
                <Divider className="w-full" />
            </div>
        </main>
    );
}
