"use client";
import React, { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import "react-datepicker/dist/react-datepicker.css"
import {ProductType} from '../../../../components/Product'
import {Breadcrumb, BreadcrumbType} from '../../../../components/Breadcrumb'
import {getProduct} from '../../../api/product'
import { AdminLayout } from "@/components/Layout/AdminLayout";
import { useSearchParams } from 'next/navigation'
import { TextEditor } from "@/components/TextEditor";
import axios from "axios";
import { MdCancelPresentation } from "react-icons/md";
import { Checkbox } from "@mui/material";
import { FaTrash } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { MultipleSelectChip } from "@/components/SelectChips";
import { GroupCheckboxes } from "@/components/CheckboxList";
import { createSlug } from "@/ultils";

export const getServerSideProps = (async (context) => {
    const id = context.params?.slug?.[0];
    return { props: { id } };
}) satisfies GetServerSideProps<{}>;


export type AttributeType = {
    title: string,
    content: string
}

export default function ProductDetail({ id }: InferGetServerSidePropsType<typeof getServerSideProps>) {   
    const [product, setProduct] = useState<ProductType>({} as ProductType)
    const [loading, setLoading] = useState(true)
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState<string[]>([])
    const [categories, setCategories] = useState<string[]>([]) 

    const [name, setName] = useState('')
    const [slug, setSlug] = useState('')
    
    const [addCategory, setAddCategory] = useState(false)
    const [currenAttr, setCurrenAttr] = useState<AttributeType>({} as AttributeType)
    const [currentCate, setCurrenCate] = useState<string>('')
    const [category, setCategory] = useState<string[]>([
        'Volleyball',
        'Soccer',
        'Badminton',
        'Tennis',
        'Basketball'
    ])

    const [uploadImages, setUploadImages] = useState<string[]>([])
    const [selectImage, setSelectImage] = useState<string[]>([])
    const [attributes, setAttributes] = useState<AttributeType[]>([])
    const [addAttribute, setAddAttribute] = useState(false)
    
    
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

    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const file = event.target.files
        let upload: string[] = []
        for (let i = 0; i < file.length; i++) {
            upload.push(URL.createObjectURL(file[i]))
        }
        setUploadImages(uploadImages.concat(upload))

    };

    const handleCheck = (src: string) => {
        if (!selectImage.includes(src)) {
            setSelectImage([...selectImage, src])
        }
        else {
            setSelectImage(selectImage.filter(i => i !== src))
        }
    }

    const handleDeleteImage = () => {
        const upload = new Set(uploadImages)
        const select = new Set(selectImage)
        selectImage.map(i => {
            if(upload.has(i)) {
                upload.delete(i)
                select.delete(i)
            }
        })
        setSelectImage(Array.from(select))
        setUploadImages(Array.from(upload))
    }

    const handleChangeTag = (tags: string[]) => {
        console.log(tags)
        setTags(tags)
    }

    const handleChangeCategories = (cate: string) => {
        if (categories.includes(cate)) {
            setCategories(categories.filter(i => i !== cate))
        }
        else {
            setCategories([...categories, cate])
        }
    }
    

    const checkChecked = (src: string) => {
        return selectImage.includes(src)
    }

    console.log(product.description)

    if (loading) return <div>Loading</div>

    return (
        <div className="px-7 py-4">
            <div className="py-4">
                <Breadcrumb item={breadcrumb} />
            </div>
            <span className="font-semibold text-2xl">{product.name}</span>
            <div className="flex flex-row">
                <div className="w-[67%] mr-6 flex flex-col">
                    <div className="bg-white my-6 p-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <h1 className="text-lg font-semibold">Basic Infomation</h1>
                        <label className="font-semibold text-sm text-gray-600 pb-1 pt-3 block">Name</label>
                        <input onChange={e => {
                            setName(e.target.value)
                            setSlug(createSlug(e.target.value))
                        }} type="text" className="border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full" value={name || product.name}/>
                        <label className="font-semibold text-sm text-gray-600 pb-2 pt-3 block">Slug</label>
                        <div className="border mb-1 rounded-sm border-[#ced4da] flex flex-row items-center">
                            <div className="px-3 bg-[#e9ecef] py-2 border-r border-[#ced4da]">https://example.com/products/</div>
                            <input type="text" className="py-2 outline-none px-3 text-sm w-full" value={slug || product.slug}/>
                        </div>
                        <span className="text-[14px]">Unique human-readable product identifier. No longer than 255 characters.</span>
                        <label className="font-semibold text-sm text-gray-600 pb-2 pt-3 block">Description</label>
                        <textarea onChange={e => setDescription(e.target.value)} className="min-h-[100px] border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full" value={description || product.description}/>
                        <h1 className="text-lg font-semibold">Attribute</h1>
                        {
                            product.attribute.length > 0 && product.attribute.map((attribute, key) => (
                                <div className="flex flex-row items-center">
                                    <div className="grid grid-cols-4 gap-3" key={key}>
                                        <input type="text" className="border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full" value={attribute.title} disabled/>
                                        <input type="text" className="col-span-3 border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full" value={attribute.content} disabled/>
                                    </div>
                                    <button className="mt-[4px] mb-[12px] flex-1 flex justify-center"><ImCancelCircle   /></button>
                                </div>
                            ))
                        }
                        {
                            addAttribute && (
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="font-semibold text-sm text-gray-600 pb-1 pt-3 block">Title</label>
                                        <input onChange={e => setCurrenAttr({...currenAttr, title: e.target.value})} type="text" className="border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full" />
                                    </div>
                                    <div>
                                        <label className="font-semibold text-sm text-gray-600 pb-1 pt-3 block">Content</label>
                                        <input onChange={e => setCurrenAttr({...currenAttr, content: e.target.value})} type="text" className="border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full" />
                                    </div>
                                </div>
                            )
                        }
                        <div className="grid grid-cols-9 gap-4">
                            {
                                addAttribute ? <button onClick={()=>{
                                    setAttributes([...attributes, currenAttr])
                                    setAddAttribute(false)
                                }} className="block mb-2 text-sm font-medium border w-fit px-2 py-1 mt-2 text-gray-900 dark:text-white border-blue-500">Save</button> :
                                <button onClick={()=> setAddAttribute(true)} className="block mb-2 text-sm font-medium border w-fit px-2 py-1 mt-2 text-gray-900 dark:text-white border-blue-500">Add new</button>
                            }
                        </div>
                    </div>

                </div>
                <div className="flex-1 flex flex-col">
                    <div className="bg-white  my-6 p-4  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        {
                            selectImage.length > 0 ? 
                            <div className="flex flex-row justify-between p-2 mb-1 items-center bg-blue-200">
                                <span>{`${selectImage.length} selected`}</span>
                                <FaTrash className="text-[#3464eb]"/>
                            </div> :
                            <h1 className="text-lg mb-4 font-semibold">Product Images</h1>
                        }
                        <div className="grid grid-cols-3 gap-4 border p-2">
                            {
                                product.images.data.length < 1 ? <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRtO_JDfcU-A_Hi5IayDm2yf-q2gmSQZh3ghQ6-9BVNQ&s"} alt="pic" /> :
                                product.images.data.map((i, key) => (
                                    <div key={key}>
                                        <div className="group border relative"><img className="max-h-[130px] w-full" src={i} alt="pic"/>
                                            <Checkbox className={`hover:bg-white p-0 m-0 ${!checkChecked(i) && "hidden"} rounded-none group-hover:flex absolute top-0 right-0 bg-white`} checked={checkChecked(i)} onChange={() => handleCheck(i)}/>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <label className="block mb-2 text-sm font-medium border w-fit px-2 py-1 mt-2 text-gray-900 dark:text-white border-blue-500" htmlFor="file_input">Upload file</label>
                        <input multiple  onChange={handleImageUpload} className="block hidden w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" accept="image/*" />
                        
                    </div>
                    <div className="bg-white p-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <h1 className="text-lg font-semibold">Pricing</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="font-semibold text-sm text-gray-600 pb-1 pt-3 block">Regular Price</label>
                                <input type="number" className="border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full" value={product.regularPrice}/>
                            </div>
                            <div>
                                <label className="font-semibold text-sm text-gray-600 pb-1 pt-3 block">Discount Price</label>
                                <input type="number" className="border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full" value={product.discountPrice}/>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white mb-6 p-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <MultipleSelectChip selectedTag={product.tag} names={['tag 1', 'tag 2']} onChange={handleChangeTag}/>
                    </div>
                    <div className="bg-white p-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <GroupCheckboxes 
                            input={{
                                title: "Categories",
                                listItem: category
                            }}
                            onChange={handleChangeCategories} 
                            checkedItems={categories.length > 0 && categories || product.category}
                        />
                        {
                            addCategory && (
                                <div className="grid grid-cols-1 gap-4">
                                    <div>
                                        <label className="font-semibold text-sm text-gray-600 pb-1 pt-3 block">Category</label>
                                        <input onChange={e => setCurrenCate(e.target.value)} type="text" className="border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full" />
                                    </div>
                                    
                                </div>
                            )
                        }
                        {
                            addCategory ? <button onClick={()=>{
                                currentCate !== '' && setCategory([...category, currentCate])
                                setAddCategory(false)
                            }} className="block mb-2 text-sm font-medium border w-fit px-2 py-1 mt-2 text-gray-900 dark:text-white border-blue-500">Save</button> :
                            <button onClick={()=> setAddCategory(true)} className="block mb-2 text-sm font-medium border w-fit px-2 py-1 mt-2 text-gray-900 dark:text-white border-blue-500">Add new</button>
                        }

                    </div>
                </div>
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