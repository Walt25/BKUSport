import { Divider } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineForm } from "react-icons/ai";
import { FaShoppingCart, FaRegFileAlt } from "react-icons/fa";
import { Model } from "./Model";
import { ImCancelCircle } from "react-icons/im";
import { ProductType } from "./Product";
import { formatCash, formatCurrency } from "@/ultils";

type NavProductProps = {
    item: ProductType;
};

export const NavProduct: React.FC<NavProductProps> = (props) => {

    const { item } = props;


    return (
        <div className="flex flex-row items-center py-2 w-full">
            <div className="w-[100px]">
                <img src={item.images[0]} alt="pic" />
            </div>
            <div className="pl-2 text-sm flex flex-col justify-between w-full">
                <span className="line-clamp-2">{item.name}</span>
                <span className="text-[#94c341] font-semibold ">{item.price}</span>
            </div>
        </div>
    );
};
