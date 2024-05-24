"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { Product, ProductType } from "./Product";

type CarouselProps = {
    items: ProductType[];
    slidePerView: number;
    navigation?: boolean;
};

export const ProductsCarousel: React.FC<CarouselProps> = (props) => {
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
                    <Product item={item} key={key} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
