"use client";
import React, { ReactElement, useEffect, useState } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import "react-datepicker/dist/react-datepicker.css"
import {ProductType} from '../../../components/Product'
import {Breadcrumb, BreadcrumbType} from '../../../components/Breadcrumb'
import {getProduct} from '../../api/product'
import { AdminLayout } from "@/components/Layout/AdminLayout";
import { useSearchParams } from 'next/navigation'
import { TextEditor } from "@/components/TextEditor";

export const getServerSideProps = (async (context) => {
    const id = context.params?.slug?.[0];
    return { props: { id } };
}) satisfies GetServerSideProps<{}>;

export default function ProductDetail({ id }: InferGetServerSidePropsType<typeof getServerSideProps>) {   
    const [product, setProduct] = useState<ProductType>({} as ProductType)
    const [loading, setLoading] = useState(true)
    const [description, setDescription] = useState("")
    
    
    useEffect(() => {
        const getProductById = async () => {
            if (id) {
                const res = await getProduct(id)
                if (res.data.result) {
                    console.log(res)
                    setProduct(res.data.result)
                }
                else setProduct({} as ProductType)
            }
            else setProduct({} as ProductType)
            setLoading(false)
        }
       getProductById()
    }, [id])


    if (!product) return <div>Not found</div>;

    const breadcrumb: BreadcrumbType[] = [
        {
            title: 'Dashboard',
            link: '/admin/dashboard'
        },
        {
            title: 'Products',
            link: '/admin/dashboard/productlist'
        },
        {
            title: "Edit Product",
            link: '#'
        }
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

    if (loading) return <div>Loading</div>

    return (
        <div className="px-7 py-4">
            <div className="py-4">
                <Breadcrumb item={breadcrumb} />
            </div>
            <span className="font-semibold text-2xl">Edit Product</span>
            <div className="flex flex-row">
                <div className="w-[67%] mr-6 flex flex-col">
                    <div className="bg-white my-6 p-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <h1 className="text-lg font-semibold">Basic Infomation</h1>
                        <label className="font-semibold text-sm text-gray-600 pb-1 pt-3 block">Name</label>
                        <input type="text" className="border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full" value={product.name}/>
                        <label className="font-semibold text-sm text-gray-600 pb-2 pt-3 block">Slug</label>
                        <div className="border mb-1 rounded-sm border-[#ced4da] flex flex-row items-center">
                            <div className="px-3 bg-[#e9ecef] py-2 border-r border-[#ced4da]">https://example.com/products/</div>
                            <input type="text" className="py-2 outline-none px-3 text-sm w-full" value={product.slug}/>
                        </div>
                        <span className="text-[14px]">Unique human-readable product identifier. No longer than 255 characters.</span>
                        <label className="font-semibold text-sm text-gray-600 pb-2 pt-3 block">Description</label>
                        <TextEditor onChange={setDescription} content={description}/>
                        <label className="font-semibold text-sm text-gray-600 pb-1 pt-3 block">Short Description</label>
                        <textarea className="min-h-[100px] border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full" value={product.slug}/>
                    </div>
                    <div className="bg-white  my-6 p-4  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <h1 className="text-lg font-semibold">Basic Infomation</h1>
                    </div>
                </div>
                <div className="flex-1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">right  </div>
            </div>

        </div>
    );
}

ProductDetail.getLayout = (page: ReactElement) => {
    return (
        <AdminLayout>
          {page}
        </AdminLayout>
      )
}