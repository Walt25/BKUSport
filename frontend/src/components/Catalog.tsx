import Link from "next/link"
import { useEffect, useState } from "react"
import { AiOutlineNotification } from "react-icons/ai"
import { BsLaptop, BsUsbPlug } from "react-icons/bs"
import { IoWatchOutline } from "react-icons/io5"
import { LuSmartphone, LuHeadphones } from "react-icons/lu"
import { MdKeyboardArrowRight } from "react-icons/md"
import { PiDesktopTower, PiTelevisionSimple } from "react-icons/pi"
import { TbSmartHome } from "react-icons/tb"
import { Loading } from "./Loading"
import { Product, ProductType } from "./Product"
import { Box, Divider } from "@mui/material"
import { useRouter } from "next/router"

type CatalogProps = {
    canExpand: boolean
}

export type CategoryType = {
    productCategoryId: string;
    name: string;
    slug: string;
    image?: {
        mediaItemUrl: string;
    };
}

const category:CategoryType[] = [
    {
        productCategoryId: "1",
        name: "Đồng phục",
        slug: "uniform",
    },
    {
        productCategoryId: "2",
        name: "Dụng cụ thể thao",
        slug: "products",
    },
    {
        productCategoryId: "4",
        name: "Thuê dịch vụ",
        slug: "thue-dich-vu",
    },
    {
        productCategoryId: "5",
        name: "Sân thể thao",
        slug: "fields",
    },
    
]

export const Catalog:React.FC<CatalogProps> = ({canExpand = false}) => {
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState<CategoryType[]>(category);
    const route = useRouter()

    if (loading) return <Loading />

    return (
        <div className="flex flex-col justify-between relative shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
             
            <div className="p-3 bg-[--primary-color] text-white font-semibold text-lg rounded-tl-md rounded-tr-md">Danh mục</div>
            <Divider />
             {
                categories.map((item, key) => (
                    <div onClick={() => {
                        route.push(`/${item.slug}`)
                    }} className="cursor-pointer group flex py-3 flex-row justify-between flex-1 px-3 items-center hover:bg-[#f2f3f7]" key={key}>
                        <div className="flex flex-row items-center group-hover:text-[--primary-color] x`">
                            {item.image?.mediaItemUrl && <img src={item.image.mediaItemUrl} alt="pic" className="w-8 h-8 mr-2" />}
                            <span className="pl-2 text-sm">{item.name}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}