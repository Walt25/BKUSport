"use client";
import React, { useEffect, useState } from "react";
import {policy } from "@/data";
import { Breadcrumb, BreadcrumbType } from "@/components/Breadcrumb";
import { Divider } from "@mui/material";

import { Catalog } from "@/components/Catalog";
import {BasicRating} from "@/components/StarRate";
import { blogs } from "@/pages/blog";
import Link from "next/link";

import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { formatCash } from "@/ultils";
import { UniformType, getUniform } from "@/Api/uniform";

export const getServerSideProps = (async (context) => {
    const id = context.params?.slug?.[0];
    return { props: { id } };
}) satisfies GetServerSideProps<{}>;

export default function UniformDetail({ id }: InferGetServerSidePropsType<typeof getServerSideProps>) {   
    const [currentThumbnail, setCurrentThubnail] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState<UniformType>({} as UniformType)
    const [loading, setLoading] = useState(true)

    const [size, setSize] = useState<string>('')

    
    useEffect(() => {
        const getProductById = async () => {
            if (id) {
                const res = await getUniform(id)
                if (res.data.result) {
                    console.log(res)
                    setProduct(res.data.result)
                }
                else setProduct({} as UniformType)
            }
            else setProduct({} as UniformType)
            setLoading(false)
        }
        getProductById() 
    }, [id])
    
    const breadcrumb: BreadcrumbType[] = [
        {
            title: "Shop",
            link: "/",
        },
        {
            title: `${product.name}`,
        },
    ];
    

    const comments = [
        {
            username: 'Đặng Gia Hân',
            starRate: 5,
            comment: 'Hiệu năng Mượt mà, đa nhiệm tốt'
        },
        {
            username: 'Đoàn Minh Đức',
            starRate: 5,
            comment: 'Chất lượng hiển thị của màn hình Siêu đẹp'
        },
        {
            username: 'Ngọc Nhã Dy Hồ',
            starRate: 5,
            comment: 'Hiệu năng Mượt mà, đa nhiệm tốt'
        }
        
    ]

    return (
        <div>
            <div className="w-[80%] px-3 mx-auto mt-[3%] pb-3 flex flex-row">
                <div className="w-full">
                    <div className="">
                        <Breadcrumb item={breadcrumb} />
                    </div>
                    <div className="flex flex-row justify-center max-md:flex-col">
                        <div className="flex flex-row justify-evenly w-[50%] max-md:w-full">
                        {
                                product.images && <>
                                    <div className="flex flex-col justify-start">
                                        {product.images.map((item, key) => (
                                            <div className="w-10 h-10 m-2 cursor-pointer" key={key} onClick={() => setCurrentThubnail(key)}>
                                                <img src={item} alt="pic" className="border" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex-1">
                                        <img src={product.images[currentThumbnail]} alt="pic" className="border ml-4 mr-2 my-2 w-full" />
                                    </div>
                                </>
                        }
                        </div>
                        <div className="flex-1 ml-12 flex flex-col justify-start p-2 max-md:ml-0">
                            <h1 className="font-semibold text-lg">{product.name}</h1>
                            <span className="text-[#AFAFAF] text-sm py-3">{product._id}</span>
                            <Divider />
                            <span className="text-[#0490db] font-semibold text-xl pt-3">{formatCash(Number(product.price) * quantity) + ' ' + '$'}</span>
                            {product.price && <span className=" text-[#AFAFAF] font-light text-sm line-through">{product.price + " " + "$"}</span>}
                            <div className="pt-3">
                                <Divider />
                            </div>
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
                            <Divider />
                            <div className="flex flex-row pt-5 pb-3">
                                {
                                    product.type && product.type.map((item, key) => (
                                        <button key={key} onClick={() => setSize(item.size)} className={`${size === item.size ? 'bg-[#0490db] text-white' : 'border-[#0490db] text-[#0490db]' } rounded-md border  w-10 h-10 flex items-center justify-center mr-2`}> 
                                            <span className="font-semibold">
                                                {
                                                    item.size
                                                }
                                            </span>
                                        </button>
                                    ))
                                }
                            </div>
                            <button className="w-fit bg-[#0490db] text-white px-16 mt-6 py-3 mb-4">Add to cart</button>
                            
                        </div>
                    </div>
                    <div className="mt-[3%] pb-12">
                         <h1 className="font-semibold text-lg pb-4">Mô tả</h1>
                         {/* <div dangerouslySetInnerHTML={{__html: product.description}}></div> */}
                         <div>{product.description}</div>
                    </div>
                    <Divider />
                    <div className="mt-[3%] pb-3">
                         <h1 className="font-semibold text-lg pb-4">Đánh giá</h1>
                        <div className="py-3"><BasicRating v={3} /></div>
                        <textarea className="border w-full outline-none px-3 py-2 text-sm min-h-32" />
                        <button className="bg-[--primary-color] px-5 py-2 mt-2 text-white rounded-md">Gửi</button>
                    </div>
                    <div className="py-5">
                        <Divider />
                    </div>
                    {
                        comments.map((comment, key) => (
                            <div className="mt-[3%] pb-3 flex flex-row">
                                <div>
                                    <Avatar sx={{ bgcolor: deepOrange[500] }}>{comment.username.slice(0,1)}</Avatar>
                                </div>
                                <div className="flex flex-col pl-3">
                                    <h1 className="font-medium">{comment.username}</h1>
                                    <div className="py-3"><BasicRating v={comment.starRate} fixed={true}/></div>
                                    <span className="text-sm">{comment.comment}</span>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
                <div className="w-[30%] ml-12 flex flex-col max-lg:hidden">
                    <Catalog canExpand={false}/>
                    {/* <div className="w-full flex flex-col pt-5">
                        <h1 className="font-medium text-[--primary-color] py-4 uppercase ">Sản phẩm mới nhất</h1>
                        <div className="flex flex-col pb-2">

                            {
                                relatedProducts.slice(0, 5).map((product, key) => (
                                    <div key={key}>
                                        <Divider />
                                        <NavProduct item={product}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div> */}
                    <Link href={'/blog/1'} className="w-full flex flex-col pt-5">
                        <h1 className="font-medium text-[--primary-color] py-4 uppercase ">Bài viết mới nhất</h1>
                        <div className="flex flex-col pb-2">

                            {
                                blogs.slice(0, 5).map((blog, key) => (
                                    <div key={key}>
                                        <Divider />
                                        <div className="flex flex-row items-center py-2 ">
                                            <div className="text-md flex flex-col justify-between">
                                                <span>{blog.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </Link>
                </div>
            </div>
            <div className="w-[94%] px-3 mx-auto my-12 flex flex-col items-center">
                <h1 className="text-xl pb-12 font-medium">Sản phẩm tương tự</h1>
                {/* <ProductsCarousel items={relatedProducts} slidePerView={6} /> */}
            </div>
            <div className="w-[94%] mx-auto px-3 border border-[#ebebeb] flex flex-row justify-between max-sm:flex-col">
                {policy.map((item, key) => (
                    <div className="flex flex-row flex-1 justify-center items-center py-10" key={key}>
                        <img src={item.icon} alt="pic" />
                        <div className="flex flex-col px-3">
                            <span className="text-sm font-semibold py-2">{item.title}</span>
                            <span className="text-xs text-[#91959b]">{item.describe}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}