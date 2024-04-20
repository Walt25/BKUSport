"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { StaticImageData } from "next/image";
import React from "react";

type CarouselProps = {
    srcs: StaticImageData[];
    slidePerView: number;
};

export const Carousel: React.FC<CarouselProps> = (props) => {
    const { srcs, slidePerView } = props;

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={slidePerView}
            pagination={{ clickable: true }}
            navigation
            style={{ "--swiper-navigation-size": "24px", "--swiper-navigation-sides-offset": "10px" } as React.CSSProperties}
        >
            {srcs.map((item, key) => (
                <SwiperSlide key={key}>
                    <div
                        style={{
                            backgroundImage: `url(${item.src})`,
                            width: '100%'
                        }}
                        className={`w-full h-[30rem] bg-center bg-cover`}
                    ></div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
