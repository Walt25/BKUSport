import { Divider } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineForm } from "react-icons/ai";
import { FaShoppingCart, FaRegFileAlt } from "react-icons/fa";
import { Model } from "./Model";
import { ImCancelCircle } from "react-icons/im";
import { formatCash, formatCurrency } from "@/ultils";

export type ProductType = {
    id: string;
    name: string;
    sku: string;
    slug: string;
    description: string;
    shortDescription: string;
    regularPrice: string;
    salePrice?: string;
    visible: boolean;
    attributes?: {
        nodes: {
            attributeId: string,
            label: string,
            options?: string[],
            visible: boolean
        }[]
    },
    galleryImages?: {
        nodes: {mediaItemUrl: string}[];
    };
    
};

type ProductProps = {
    item: ProductType;
};

export const Product: React.FC<ProductProps> = (props) => {
    const { item } = props;

    const [showModel, setShowModel] = useState(false);
    const [currentThumbnail, setCurrentThubnail] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const price = formatCurrency(item.regularPrice)

    return (
        <div key={item.id} className="group relative flex-1 border-2 hover:border-[#ebebeb] border-white mx-3 rounded transition ease-in-out duration-500">
            <Link href={`/products/${item.id}/${item.slug}`}>
                <img src={item.galleryImages?.nodes[0].mediaItemUrl} alt={"pic"} className="rounded" />
            </Link>
            <div className="flex flex-col items-center pt-6">
                <span className="text-xs font-semibold overflow-hidden truncate w-[80%]">
                    <Link href={`/products/${item.id}/${item.slug}`}>{item.name} </Link>
                </span>

                <span className="font-semibold text-[#78a206] py-2">{formatCash(price.cost) + ' ' + price.currency}</span>
            </div>
            {item.salePrice && <div className="bg-[#94c341] text-white absolute top-1 right-1 px-2 py-0.5 rounded text-xs">-{formatCash(price.cost - formatCurrency(item.salePrice).cost) + ' ' + formatCurrency(item.salePrice).currency}</div>}

            <div className="opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 flex flex-col justify-center items-center p-3">
                <div className="w-full px-4">
                    <Divider className="w-full" />
                </div>
                <div className="flex flex-row justify-center pt-3">
                    <div className="bg-[#ebebeb] w-7 h-7 mx-1 rounded-full flex items-center justify-center cursor-pointer">
                        {" "}
                        <FaShoppingCart size={14} color="#78a206" />
                    </div>
                    <div className="bg-[#ebebeb] w-7 h-7 mx-1 rounded-full flex items-center justify-center cursor-pointer" onClick={() => setShowModel(true)}>
                        <AiOutlineForm size={14} color="#78a206" />
                    </div>
                    <div className="bg-[#ebebeb] w-7 h-7 mx-1 rounded-full flex items-center justify-center">
                        <Link href={`/products/${item.id}/${item.slug}`}>
                            <FaRegFileAlt size={14} color="#78a206" />
                        </Link>
                    </div>
                </div>
            </div>
            {showModel && (
                <Model
                    onClose={() => setShowModel(false)}
                    render={
                        <div>
                            <div className="flex flex-row w-[95%] mx-auto my-6 justify-center">
                                <div className="flex flex-row justify-evenly w-[50%]">
                                    {item.galleryImages?.nodes && (
                                        <>
                                            <div className="flex flex-col justify-start">
                                                {item.galleryImages.nodes.map((item, key) => (
                                                    <div className="w-10 h-10 m-2 cursor-pointer" key={key} onClick={() => setCurrentThubnail(key)}>
                                                        <img src={item.mediaItemUrl} alt="pic" className="border" />
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex-1">
                                                <img src={item.galleryImages.nodes[currentThumbnail].mediaItemUrl} alt="pic" className="border w-full ml-4 mr-2 my-2" />
                                            </div>
                                        </>
                                    )}
                                </div>
                                <div className="flex-1 ml-12 flex flex-col justify-start p-2">
                                    <div className="flex flex-row items-start">
                                        <h1 className="font-semibold text-lg">{item.name}</h1>
                                        <div className="w-4">
                                            <ImCancelCircle size={20} color="red" onClick={() => setShowModel(false)} className="cursor-pointer" />
                                        </div>
                                    </div>
                                    <span className="text-[#AFAFAF] text-sm py-3">{item.sku}</span>
                                    <Divider />
                                    <span className="text-[#94c341] font-semibold text-lg py-3">{formatCash(price.cost) + ' ' + price.currency}</span>
                                    <Divider />
                                    <div className="flex flex-row items-center py-5">
                                        <button
                                            className="px-4"
                                            onClick={() => {
                                                quantity > 1 && setQuantity(quantity - 1);
                                            }}
                                        >
                                            -
                                        </button>
                                        <div className="border w-[10%] flex justify-center">
                                            <span className="text-red-500">{quantity}</span>
                                        </div>
                                        <button className="px-4" onClick={() => setQuantity(quantity + 1)}>
                                            +
                                        </button>
                                    </div>
                                    <button className="w-fit bg-[#0490db] text-white px-16 py-3 mb-4">Add to cart</button>
                                </div>
                            </div>
                            <div className="w-[94%] mx-auto flex flex-col">
                                <h1 className="font-semibold text-[14px]">Mô tả</h1>
                                {/* <div className="flex flex-col pt-5 pb-3">
                                {
                                    
                                        <div className="flex flex-row pb-2 justify-between">
                                            <table className="w-full">
                                                <tbody>
                                                    {
                                                        item.attributes?.nodes && item.attributes?.nodes.map((item, key) => (
                                                            <tr key={key}> 
                                                                {
                                                                    item.visible &&
                                                                    <>
                                                                        <td className="font-semibold text-sm w-[50%] p-2">{item.label}:</td>
                                                                        {
                                                                            item.options && item.options.map((o, key) => (
                                                                                    <td key={key} className="text-sm">{o}</td>
                                                                            ))
                                                                        }
                                                                    </>
                                                                }
                                                                
                                                            </tr>
                                                        ))
                                                    }
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                }
                            </div> */}
                            </div>
                        </div>
                    }
                />
            )}
        </div>
    );
};
