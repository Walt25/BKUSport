"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { StaticImageData } from "next/image";
import React from "react";
import { Product } from "./Product";
import { FieldsType, Foodstype } from "@/pages";
import { Field } from "./Field";
import { Food } from "./Food";

type CarouselProps = {
    items: Foodstype[];
    slidePerView: number;
    navigation?: boolean;
};

export const FoodsCarousel: React.FC<CarouselProps> = (props) => {
    const { items, slidePerView, navigation = false } = props;

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={slidePerView}
            navigation={navigation}
            style={{ "--swiper-navigation-size": "24px", "--swiper-navigation-sides-offset": "10px" } as React.CSSProperties}
            className="w-full"
        >
            {items.map((item, key) => (
                <SwiperSlide key={key}>
                    <Food item={item} key={key} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
