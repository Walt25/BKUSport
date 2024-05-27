"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { policy } from "@/data";
import { Breadcrumb, BreadcrumbType } from "@/components/Breadcrumb";
import { Divider } from "@mui/material";

import { Catalog } from "@/components/Catalog";

import { FaParking, FaWifi } from "react-icons/fa";

import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { FieldsType } from "@/pages";
import axios from "axios";
import { FieldsCarousel } from "@/components/FieldsCarousel";
import { IoLocationSharp, IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { GiTeapotLeaves } from "react-icons/gi";
import { FaBottleWater } from "react-icons/fa6";
import { GrCafeteria } from "react-icons/gr";
import { MdFastfood } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { Calendar } from "@/components/Calendar";
import { CalendarV2 } from "@/components/CalendarV2";
import { useCurrentUser } from "@/contexts/userContext";
import { Model } from "@/components/Model";
import { login } from "@/Api/user";
import { useRouter } from 'next/router';
import moment from "moment";

export const getServerSideProps = (async (context) => {
    const id = context.params?.slug?.[0];
    return { props: { id } };
}) satisfies GetServerSideProps<{}>;


export default function FieldDetail({ id }: InferGetServerSidePropsType<typeof getServerSideProps>) {   
    const [currentThumbnail, setCurrentThubnail] = useState(0);
    const [field, setField] = useState<FieldsType>({} as FieldsType)
    const [fields, setFields] = useState<FieldsType[]>([])
    const [loading, setLoading] = useState(true)
    const {currentUser} = useCurrentUser()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showModel, setShowModel] = useState(false)
    const [error, setError] = useState(false)
    const router = useRouter()
    const [startDate, setStartDate] = useState(new Date)
    const [selectedDate, setSelectedDate] = useState<{date: string, time: string, price: string}>({} as {date: string, time: string, price: string})


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

    const handleBooking = (date: string, time: string, price: string) => {
        setSelectedDate({date, time, price})
        setShowModel(true)
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const response = await login(email, password)
            document.cookie = `access_token=${response.data.result.access_token};path=/`
            document.cookie = `refresh_token=${response.data.result.refresh_token};path=/` 
            router.reload();
        } catch (error) {
            setError(true)
        }
    }

    const handleSubmitOrder = async () => {

    }

    console.log(!currentUser._id)

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
                                    <span>5h - 21h</span>
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
                        {/* <div className="w-full flex flex-col p-3">
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
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="py-12 w-[80%] px-3 mx-auto my-12 flex flex-col items-center">
                <Calendar onBooking={handleBooking}/>
                {/* <CalendarV2 /> */}
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
            {showModel && (
                !currentUser._id ? <Model
                    onClose={() => setShowModel(false)}
                    render={
                        <form className="p-4" onSubmit={handleSubmit}>
                            <div className="text-xl text-center mb-4 font-semibold">Đăng nhập</div>
                            <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                            <input onChange={e =>{ 
                                setEmail(e.target.value)
                                setError(false)
                            }} type="email" className={`${error && 'border-red-500'} outline-none border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full`}/>
                            <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                            <input onChange={e => {
                                setPassword(e.target.value)
                                setError(false)
                            }} type="password" className={`${error && 'border-red-500'} outline-none border rounded-lg px-3 py-2 mt-1 text-sm w-full`}/>
                            <div className={`text-sm ${!error && 'hidden'} text-red-500 mt-3`}>* Email or password is incorrect.</div>
                            
                            
                            <button type="submit" className="bg-[--primary-color] w-full px-5 py-2 my-4 text-white rounded-md">Đăng nhập</button>
                            <Divider />

                            <div className="flex justify-between items-center">
                                <span className="hover:underline hover:text-blue-500 mt-4 cursor-pointer">Quên mật khẩu</span>
                                <span className="hover:underline hover:text-blue-500 mt-4 cursor-pointer">Đăng ký</span>
                            </div>
                        </form>
                    }
                    top="25%"
                    bottom="25%"
                    left="35%"
                    right="35%"
                /> :
                <Model 
                    onClose={() => setShowModel(false)}
                    render={
                        <div className="p-4">
                           <h1 className="pb-2 text-xl font-medium">Đặt sân theo yêu cầu</h1>
                            <Divider />
                            <form className="pt-5">
                                <input type="text" className="border outline-none rounded-lg px-3 py-2 mt-1 mb-3 text-sm w-full" placeholder="Họ và tên" value={currentUser.username}/>
                                <input type="text" className="border outline-none rounded-lg px-3 py-2 mt-1 mb-3 text-sm w-full" placeholder="Email" value={currentUser.email}/>
                                <input type="text" className="border outline-none rounded-lg px-3 py-2 mt-1 mb-3 text-sm w-full" value={selectedDate.price}/>
                                
                                <div className="flex flex-row items-center justify-between">
                                    <div className="relative max-w-sm">
                                        <div className="absolute z-10 inset-y-0 bottom-2 left-0 flex items-center ps-3.5 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                            </svg>
                                        </div>
                                        <div className="border outline-none pl-4 py-2 mt-1 mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{selectedDate.date}</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-between border outline-none rounded-lg px-3 py-2 mt-1 mb-3 text-sm flex-1 ml-4">
                                        <div>{selectedDate.time}</div>
                                        <IoTimeOutline  />
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
                    }
                    top="15%"
                    bottom="15%"
                    left="35%"
                    right="35%"
            />
            )}
        </div>
    );
}