"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { productData, policy } from "@/data";
import { Loading } from "@/components/Loading";
import { Breadcrumb, BreadcrumbType } from "@/components/Breadcrumb";
import { ProductType } from "@/components/Product";
import { Divider } from "@mui/material";

import { ProductsCarousel } from "@/components/ProductsCarousel";
import { Catalog } from "@/components/Catalog";
import { FiSmartphone } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { GoShieldCheck } from "react-icons/go";
import { FaParking, FaRegMoneyBillAlt, FaWifi } from "react-icons/fa";
import {BasicRating} from "@/components/StarRate";
import { NavProduct } from "@/components/NavProduct";
import { blogs } from "@/pages/blog";
import Link from "next/link";

import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { getProduct, getProducts } from "../../api/product";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { formatCash, formatCurrency } from "@/ultils";
import { FieldsType } from "@/pages";
import axios from "axios";
import { FieldsCarousel } from "@/components/FieldsCarousel";
import { IoLocationSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { GiTeapotLeaves } from "react-icons/gi";
import { FaBottleWater } from "react-icons/fa6";
import { GrCafeteria } from "react-icons/gr";
import { MdFastfood } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { Calendar } from "@/components/Calendar";

export const getServerSideProps = (async (context) => {
    const id = context.params?.slug?.[0];
    return { props: { id } };
}) satisfies GetServerSideProps<{}>;


export default function FieldDetail({ id }: InferGetServerSidePropsType<typeof getServerSideProps>) {   
    const [currentThumbnail, setCurrentThubnail] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [field, setField] = useState<FieldsType>({} as FieldsType)
    const [fields, setFields] = useState<FieldsType[]>([])

    const [startDate, setStartDate] = useState(new Date());

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getField = async () => {
            const res = await axios.get(`http://localhost:4000/fields/${id}`)
            if (res.data.result) {
                setField(res.data.result)
            }
            else setField({} as FieldsType)
            setLoading(false)
        }
        const getFields = async () => {
            const res = await axios.get("http://localhost:4000/fields")
            if (res.data.result.length > 0) {
                res.data.result.forEach((item: FieldsType) => {
                    const slug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
                    item.slug = slug;
                  });
                setFields(res.data.result)
            }
            else setFields([])
            setLoading(false)
        }
        getField()
        getFields()
    }, [id])


    if (!field) return <div>Not found</div>;

    const breadcrumb: BreadcrumbType[] = [
        {
            title: "Fields",
            link: "/",
        },
        {
            title: `${field.name}`,
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

    const services = [
        {
            title: "Wifi",
            icon: <FaWifi />
        }, 
        {
            title: "Bãi đỗ xe oto",
            icon: <FaParking />
        },
        {
            title: "Căng tin",
            icon: <GrCafeteria />
        },
        {
            title: "Trà đá",
            icon: <GiTeapotLeaves />
        },
        {
            title: "Đồ ăn",
            icon: <MdFastfood />
        },
        {
            title: "Nước uống",
            icon: <FaBottleWater />
        }
    ]

    if (loading) return <div>Loading</div>

    return (
        <div>
            <div className="w-[94%] px-3 mx-auto mt-[3%] pb-3 flex flex-row">
                <div className="w-full">
                    <div className="pb-6">
                        <Breadcrumb item={breadcrumb} />
                    </div>
                    <div className="flex flex-col justify-center max-md:flex-col">
                        <div className="flex-1 flex flex-col justify-start max-md:ml-0">
                            <h1 className="font-semibold text-2xl">{field.name}</h1>
                            <div className="flex flex-row items-center">
                                <CiLocationOn size={20}/>
                                <span className="pl-2 py-2">{field.location}</span>
                            </div>
                            <div className="py-3">
                                <Divider />
                            </div>
                        </div>
                        <div className="flex flex-row justify-evenly flex-1 max-md:w-full">
                        {   field.images &&
                                <>
                                    <div className="flex flex-col justify-start w-[10%]">
                                        {field.images.map((item, key) => (
                                            <div className="w-[90%] m-2 cursor-pointer" key={key} onClick={() => setCurrentThubnail(key)}>
                                                <img src={item} alt="pic" className="border rounded-md" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex-1 rounded-md">
                                        <img src={field.images[currentThumbnail]} alt="pic" className="border rounded-md ml-4 mr-2 my-2 w-full" />
                                    </div>
                                </>
                        }
                        </div>
                    </div>
                    <div className="py-12">
                        <Calendar />
                    </div>
                    <Divider />
                    <div className="mt-[3%] pb-3 pt-12">
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
                <div className="w-[40%] ml-12 flex flex-col max-lg:hidden">
                    <Catalog canExpand={false}/>
                    <div className="w-full flex flex-col mt-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                        <div className="w-full flex flex-col p-3">
                            <h1 className="pb-2 text-xl font-medium">Thông tin sân</h1>
                            <Divider />
                            <div className="flex flex-col">
                                <div  className="flex flex-row justify-between pt-2">
                                    <span>Giờ mở cửa</span>
                                    <span>6h - 23h</span>
                                </div>
                                <div  className="flex flex-row justify-between pt-2">
                                    <span>Số sân thi đấu:</span>
                                </div>
                                <div  className="flex flex-row justify-between pt-2">
                                    <span>Giá sân:</span>
                                </div>
                                <div  className="flex flex-row justify-between pt-2">
                                    <span>Giá sân giờ vàng:</span>
                                </div>
                            </div>
                        </div>
                        <Divider />
                        <div className="w-full flex flex-col p-3">
                            <h1 className="pb-2 text-xl font-medium">Dịch vụ tiện ích</h1>
                            <Divider />
                            <div className="grid grid-cols-2">
                                {
                                    services.map((item, key) => (
                                        <div key={key} className="flex flex-row items-center pt-2">
                                            {item.icon}
                                            <span className="pl-2">{item.title}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col mt-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                        <div className="w-full flex flex-col p-3">
                            <h1 className="pb-2 text-xl font-medium">Đặt sân theo yêu cầu</h1>
                            <Divider />
                            <form className="pt-5">
                                <input type="text" className="border outline-none rounded-lg px-3 py-2 mt-1 mb-3 text-sm w-full" placeholder="Họ và tên"/>
                                <input type="text" className="border outline-none rounded-lg px-3 py-2 mt-1 mb-3 text-sm w-full" placeholder="Email"/>
                                <input type="text" className="border outline-none rounded-lg px-3 py-2 mt-1 mb-3 text-sm w-full" placeholder="Số điện thoại"/>
                                
                                <div className="flex flex-row items-center justify-between">
                                    <div className="relative max-w-sm">
                                        <div className="absolute z-10 inset-y-0 bottom-2 left-0 flex items-center ps-3.5 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                            </svg>
                                        </div>
                                        <DatePicker className="border outline-none pl-4 py-2 mt-1 mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" selected={startDate} onChange={(date) => setStartDate(date ? date : new Date())}/>
                                    </div>
                                    <div className="relative pl-3 flex-1">
                                        <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                    
                                        </div>
                                        <input type="time" id="time" className="border outline-none rounded-lg px-3 py-2 mt-1 mb-3 text-sm w-full" min="09:00" max="18:00" value="00:00" required />
                                    </div>
                                </div>
                                <textarea className="border w-full outline-none px-3 py-2 text-sm min-h-32" placeholder="Ghi chú" />
                                <button
                                    type="submit"
                                    className="mt-4 transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                                >
                                    <span className="inline-block mr-2">Đặt sân</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
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
                <FieldsCarousel items={fields} slidePerView={4} />
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