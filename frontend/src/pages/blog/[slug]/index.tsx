import { Breadcrumb, BreadcrumbType } from "@/components/Breadcrumb";
import { Box, Breadcrumbs, Divider } from "@mui/material";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { getBlog } from "../../api/blog";

import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

export const getServerSideProps = (async (context) => {
    const blog = await getBlog(context.params?.slug as string);
    return { props: { blog } };
}) satisfies GetServerSideProps<{}>;

export default function BlogDetail({ blog }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const breadcrumbs = [
        <Link key="1" color="inherit" href="/shop">
            Shop
        </Link>,
        <span className="text-[--primary-color]" key="2">
            Thực phẩm chức năng
        </span>,
    ];

    if (!blog) return <div>Not found</div>;

    return (
        <div>
            <div className="w-[70%] px-3 mx-auto py-7 flex flex-col">
                <Box sx={{ pb: 4 }}>
                    <Breadcrumbs separator="›" aria-label="breadcrumb">
                        {breadcrumbs}
                    </Breadcrumbs>
                </Box>
                <div className="flex justify-center flex-col justify-center items-center mb-8">
                    <h1 className="text-2xl font-semibold py-6 uppercase">{blog.title}</h1>
                    <div className="flex flex-row">
                        <span className="pr-4 text-sm">Fashion</span>
                        <Divider orientation="vertical" flexItem />
                        <span className="pl-4 text-sm">October 26, 2018</span>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
            </div>
            <Link href={"/blog"}>
                <div className="flex justify-start text-[#0004ff]  w-[80%] px-3 mx-auto my-7 hover:text-[#0eacf9]">
                    <div className="flex justify-start w-fit items-center">
                        <FaArrowLeft size={20} />
                        <span className="px-4 ">Back to previous page</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}
