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
import { Box } from "@mui/material"

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
    children: ProductType[];
}

export const Catalog:React.FC<CatalogProps> = ({canExpand = false}) => {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState<CategoryType[]>([]);

    useEffect(() => {
        fetch("/api/category")
        .then((res) => res.json())
            .then((data) => setCategories(data))
            .then(() => setLoading(false));
    }, []);

    console.log(categories)

    if (loading) return <Loading />

    return (
        <div className="flex flex-col justify-between relative shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
             {
                categories.slice(1).map((item, key) => (
                    <div className="cursor-pointer group flex py-3 flex-row justify-between flex-1 px-3 items-center hover:bg-[#f2f3f7]" key={key}>
                        <div className="flex flex-row items-center group-hover:text-[--primary-color] x`">
                            {item.image?.mediaItemUrl && <img src={item.image.mediaItemUrl} alt="pic" className="w-8 h-8 mr-2" />}
                            <span className="pl-2 text-sm">{item.name}</span>
                        </div>
                        { 
                            item.children.length > 0 && canExpand && 
                            <>
                                <MdKeyboardArrowRight />
                                <div className="group-hover:flex h-fit w-fit justify-start px-5 py-3 w-[300%] h-[100%] hidden bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] absolute top-0 z-50 left-[100%]">
                                        {item.children.map((tag) => (
                                            <Box sx={{width: 200}}>
                                                <Product key={tag.id} item={tag} />
                                            </Box>
                                            ))
                                        }
                                </div>
                            </>
                        }
                    </div>
                ))
            }
        </div>
    )
}