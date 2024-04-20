import { Breadcrumb, BreadcrumbType } from "@/components/Breadcrumb";
import Link from "next/link";
import React from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Breadcrumbs, Divider } from "@mui/material";
import { getBlogs } from "../api/blog";

export const getServerSideProps = async () => {
    const blogs = await getBlogs();

    console.log(blogs);

    return {
        props: {
            blogs,
        },
    };
};

export const blogs = [
    {
        thumbnail: 'https://htmldemo.net/organicfood/organicfood/assets/img/blog/5.jpg',
        title: 'Bắt gặp Sài Gòn xưa trong món uống hiện đại của giới trẻ',
        date: 'July 10, 2024'
    },
    {
        thumbnail: 'https://htmldemo.net/organicfood/organicfood/assets/img/blog/4.jpg',
        title: 'Chỉ chọn cà phê mỗi sáng nhưng cũng khiến cuộc sống bạn thêm thú vị, tại sao không?',
        date: 'July 10, 2024'
    },
    {
        thumbnail: 'https://htmldemo.net/organicfood/organicfood/assets/img/blog/3.jpg',
        title: 'Cách nhận biết hương vị cà phê Robusta nguyên chất dễ dàng nhất',
        date: 'July 10, 2024'
    },
    {
        thumbnail: 'https://htmldemo.net/organicfood/organicfood/assets/img/blog/2.jpg',
        title: 'Bật mí nhiệt độ nước lý tưởng để pha cà phê ngon',
        date: 'July 10, 2024'
    },
    {
        thumbnail: 'https://htmldemo.net/organicfood/organicfood/assets/img/blog/1.jpg',    
        title: 'Kỹ thuật trồng và chăm sóc cây cà phê cho năng suất cao',
        date: 'July 10, 2024'
    },
    {
        thumbnail: 'https://htmldemo.net/organicfood/organicfood/assets/img/blog/6.jpg',
        title: 'There are many variations of this Lorem Ipsum available.',
        date: 'July 10, 2024'
    }
]

function BlogPage() {

    return (
        <div>
            <div className="w-[80%] px-3 mx-auto pt-12 flex flex-col items-center">
                <div className=" w-[94%] mx-auto py-12 flex flex-col items-center">
                    <h1 className="font-semibold text-4xl">Blogs</h1>
                    <div className="w-full px-3 pt-6">
                        <Divider className="w-full" />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-12">
                    {
                        blogs.map((item, key) => (
                        <div>
                            <img src={item.thumbnail} alt="pic" />
                            <h1 className="text-lg py-2 font-semibold">{item.title}</h1>
                            <div className="flex flex-row justify-between">
                                <Link href={"/blog/1"} className="font-medium hover:text-[#94c341] transition transition-color duration-300 ease-in-out">
                                    Read more
                                </Link>
                                <span className="font-light">{item.date}</span>
                            </div>
                        </div>
                        ))
                    }
                </div>
                <Pagination count={10} variant="outlined" shape="rounded" className="py-12" size="large" />
            </div>
        </div>
    );
}

export default BlogPage;
