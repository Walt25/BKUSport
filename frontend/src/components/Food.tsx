import { Divider } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineForm } from "react-icons/ai";
import { FaShoppingCart, FaRegFileAlt } from "react-icons/fa";
import { Model } from "./Model";
import { ImCancelCircle } from "react-icons/im";
import { formatCash, formatCurrency } from "@/ultils";
import { FieldsType, Foodstype } from "@/pages";

type FoodProps = {
    item: Foodstype;
};

export const Food: React.FC<FoodProps> = (props) => {
    const { item } = props;

    const [showModel, setShowModel] = useState(false);
    const [currentThumbnail, setCurrentThubnail] = useState(0);
    const [quantity, setQuantity] = useState(1);


    return (
        <div key={item._id} className="group relative flex-1 border-2 hover:border-[#ebebeb] border-white mx-3 rounded transition ease-in-out duration-500">
            <Link href={`/uniform/${item._id}`}>
                <div className="overflow-hidden"><img src={item.images[0]} alt={"pic"} className="rounded" /></div>
            </Link>
            <div className="flex flex-col items-center pt-6">
                <span className="text-md text-center font-semibold overflow-hidden truncate w-[80%]">
                    <Link href={`/uniform/${item._id}`}>{item.name} </Link>
                </span>

                <span className="font-semibold text-[#78a206] py-2">{formatCash(item.price) + ' đ'}</span>
            </div>

            <div className="opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 flex flex-col justify-center items-center p-3">
                <div className="w-full px-4">
                    <Divider className="w-full" />
                </div>
                <div className="flex flex-row justify-center pt-3">
                    <div className="bg-[#ebebeb] w-7 h-7 mx-1 rounded-full flex items-center justify-center cursor-pointer">
                        <FaShoppingCart size={14} color="#78a206" />
                    </div>
                    <div className="bg-[#ebebeb] w-7 h-7 mx-1 rounded-full flex items-center justify-center cursor-pointer" onClick={() => setShowModel(true)}>
                        <AiOutlineForm size={14} color="#78a206" />
                    </div>
                    <div className="bg-[#ebebeb] w-7 h-7 mx-1 rounded-full flex items-center justify-center">
                        <Link href={`/uniform/${item._id}`}>
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
                                        <>
                                            <div className="flex flex-col justify-start">
                                                {item.images.map((item, key) => (
                                                    <div className="w-10 h-10 m-2 cursor-pointer" key={key} onClick={() => setCurrentThubnail(key)}>
                                                        <img src={item} alt="pic" className="border" />
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex-1 max-h-[270px] overflow-hidden">
                                                <img src={item.images[currentThumbnail]} alt="pic" className="border w-full ml-4 mr-2 my-2" />
                                            </div>
                                        </>
                                    
                                </div>
                                <div className="flex-1 ml-12 flex flex-col justify-start p-2">
                                    <div className="flex flex-row items-start pb-3">
                                        <h1 className="font-semibold text-lg flex-1">{item.name}</h1>
                                        <div className="w-4">
                                            <ImCancelCircle size={20} color="red" onClick={() => setShowModel(false)} className="cursor-pointer" />
                                        </div>
                                    </div>
                                    <Divider />
                                    <Divider />
                                    <div className="flex flex-col pt-6">
                                        <h1 className="font-semibold text-[14px]">Mô tả</h1>
                                        <div className="flex pt-5 pb-3 flex flex-row">
                                            <span className="font-semibold text-sm pr-5">Location:</span>
                                            {/* <span className="text-sm">{item.location}</span> */}
                                        </div>
                                        <button className="w-fit bg-[#0490db] text-white px-10 mt-6 py-2 mb-4 rounded-md">Order</button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    }
                />
            )}
        </div>
    );
};
