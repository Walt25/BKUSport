import { AdminLayout } from '@/components/Layout/AdminLayout'
import React, { ReactElement, useEffect, useState } from 'react'
import { AttributeType } from './[...slug]'
import { Breadcrumb, BreadcrumbType } from '@/components/Breadcrumb'
import { ProductType } from '@/components/Product'
import { TextEditor } from '@/components/TextEditor'
import { FaTrash } from 'react-icons/fa'
import { ImCancelCircle } from 'react-icons/im'
import { Checkbox } from '@mui/material'
import { GroupCheckboxes } from '@/components/CheckboxList'
import {MultipleSelectChip} from '@/components/SelectChips'
import { addProduct, upload } from '@/Api/product'
import { createSlug } from '@/ultils'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import { Model } from '@/components/Model'
import { sportData } from '@/data'
import { MultiSelect } from "react-multi-select-component";

type ImageUploadType = {
    url: string,
    file: File
}

type CategoryType = {
    title: string,
    tag: string
}

type SportType = {
    label: string,
    value: string
}

function AddProduct() {
    // const [product, setProduct] = useState<ProductType>({} as ProductType)
    const [description, setDescription] = useState("")
    const [name, setName] = useState<string>('')
    const [slug, setSlug] = useState<string>('')
    const [uploadImages, setUploadImages] = useState<ImageUploadType[]>([])
    const [regularPrice, setRegularPrice] = useState<string>('')
    const [discountPrice, setDiscountPrice] = useState<string>('')
    const [attributes, setAttributes] = useState<AttributeType[]>([])
    const [categories, setCategories] = useState<CategoryType>({} as CategoryType) 
    const [showModel, setShowModel] = useState(false)
    const [sport, setSport] = useState<SportType[]>([])
    
    const [currenAttr, setCurrenAttr] = useState<AttributeType>({} as AttributeType)
    const [addAttribute, setAddAttribute] = useState(false)
    const [selectImage, setSelectImage] = useState<ImageUploadType[]>([])

    const route = useRouter()

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
            title: "Add Product",
            link: '#'
        }
    ];
    
    useEffect(() => {
        setSlug(createSlug(name))
    }, [name])

    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const file = event.target.files
        let upload: ImageUploadType[] = []
        for (let i = 0; i < file.length; i++) {
            upload.push({url: URL.createObjectURL(file[i]), file: file[i]})
        }
        setUploadImages(uploadImages.concat(upload))
    };

    const handleCheck = (image: ImageUploadType) => {
        if (!selectImage.find(i => i.url === image.url)) {
            setSelectImage([...selectImage, image])
        }
        else {
            setSelectImage(selectImage.filter(i => i.url !== image.url))
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

    const handleSubmit = async () => {
        const formData = new FormData()
            uploadImages.forEach((images) => {
                formData.append(`images`, images.file);
            });
        const uploadImage = await upload(formData)
        const uploadProduct = await addProduct({
            images: uploadImage.data,
            name,
            type: [],
            regularPrice,
            discountPrice,
            description,
            slug,
            attribute: attributes,
            category: categories,
            sport: []
        })

        if (uploadProduct) {
            setShowModel(true)
            setTimeout(() => {
                setShowModel(false)
                route.push('/admin/productlist')
            }, 2000)
        }
    }

    const checkChecked = (src: string) => {
        return !!selectImage.find(i => i.url === src)
    }

    const getCategory = () => {
        let cate: {title: string, tag: string}[] = []
        sportData.map(data => {
            if (sport.find(s => s.label === data.label)) {
                cate = cate.concat(data.category)
            }
        })
        const map = new Map()
        cate.map(i => {
            if(!map.has(i.title)) {
                map.set(i.title, i.tag)
            }
        })
        return Array.from(map.keys())
    }

    return (
        <div className="px-7 py-4">
            <div className="py-4">
                <Breadcrumb item={breadcrumb} />
            </div>
            <div className='flex flex-row items-center justify-between'>
                <span className="font-semibold text-2xl">Add Product</span>
                <button className="block mb-2 text-sm font-medium border w-fit px-2 py-1 mt-2 text-gray-900 dark:text-white border-blue-500" onClick={handleSubmit}>Add Product</button>
            </div>
            <div className="flex flex-row">
                <div className="w-[67%] mr-6 flex flex-col">
                    <div className="bg-white my-6 p-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <h1 className="text-lg font-semibold">Basic Infomation</h1>
                        <label className="font-semibold text-sm text-gray-600 pb-1 pt-3 block">Name</label>
                        <input onChange={(e) =>{
                            setName(e.target.value)
                            setSlug(createSlug(e.target.value))    
                        }}  
                        value={name} type="text" className="border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full"/>
                        <label className="font-semibold text-sm text-gray-600 pb-2 pt-3 block">Slug</label>
                        <div className="border mb-1 rounded-sm border-[#ced4da] flex flex-row items-center">
                            <div className="px-3 bg-[#e9ecef] py-2 border-r border-[#ced4da]">https://example.com/products/</div>
                            <input onChange={e => setSlug(e.target.value)} type="text" className="py-2 outline-none px-3 text-sm w-full" value={slug}/>
                        </div>
                        <span className="text-[14px]">Unique human-readable product identifier. No longer than 255 characters.</span>
                        <label className="font-semibold text-sm text-gray-600 pb-1 pt-3 block">Description</label>
                        <textarea value={description} className="min-h-[100px] h-fit border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full" onChange={e => setDescription(e.target.value)}/>
                        <h1 className="text-lg font-semibold">Attribute</h1>
                        {
                            attributes.length > 0 && attributes.map((attribute, key) => (
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
                                <FaTrash className="text-[#3464eb]" onClick={handleDeleteImage}/>
                            </div> :
                            <h1 className="text-lg mb-4 font-semibold">Product Images</h1>
                        }
                        <div className="grid grid-cols-3 gap-4 border p-2">
                            {
                                uploadImages.length < 1 ? <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRtO_JDfcU-A_Hi5IayDm2yf-q2gmSQZh3ghQ6-9BVNQ&s"} alt="pic" /> :
                                uploadImages.map((i, key) => (
                                    <div key={key}>
                                        <div className="group border relative"><img className="max-h-[130px] w-full" src={i.url} alt="pic"/>
                                            <Checkbox className={`hover:bg-white p-0 m-0 ${!checkChecked(i.url) && "hidden"} rounded-none group-hover:flex absolute top-0 right-0 bg-white`} checked={checkChecked(i.url)} onChange={() => handleCheck(i)}/>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <label className="block mb-2 text-sm font-medium border w-fit px-2 py-1 mt-2 text-gray-900 dark:text-white border-blue-500" htmlFor="file_input">Upload file</label>
                        <input multiple onChange={handleImageUpload} className="block hidden w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" accept="image/*" />
                        
                    </div>
                    <div className="mb-6 bg-white p-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <MultiSelect
                            options={sportData}
                            value={sport}
                            onChange={setSport}
                            labelledBy="Select"
                            className='max-w-[365px]'
                        />
                    </div>
                    <div className="mb-6 bg-white p-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <select id="countries" className="outline-none bg-white border border-gray-300 text-gray-3
                        00 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose type</option>
                            {
                                getCategory().map((i, k) => (
                                    <option value={i}>
                                        <div className='py-2'>{i}</div>
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="bg-white mb-6 p-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <h1 className="text-lg font-semibold">Pricing</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="font-semibold text-sm text-gray-600 pb-1 pt-3 block">Regular Price</label>
                                <input value={regularPrice} type="string" className="border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full" onChange={e => setRegularPrice(e.target.value)}/>
                            </div>
                            <div>
                                <label className="font-semibold text-sm text-gray-600 pb-1 pt-3 block">Discount Price</label>
                                <input value={discountPrice} type="string" className="border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full" onChange={e => setDiscountPrice(e.target.value)}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {showModel && (
                <Model
                    top='40%'
                    bottom='40%'
                    left='40%'
                    right='40%'
                    onClose={() => setShowModel(false)}
                    render={
                        <div>
                            <div className="flex flex-col w-[95%] mx-auto my-6 justify-center items-center">
                                
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAuR_JFau6CIfKcvOtNqUtxSUoAPRsL483mbvJjEvtKA&s" alt="pic"
                                    className='w-[60px]'
                                />
                                <span className='pt-3'>Thêm thành công</span>
                            </div>
                        </div>
                    }
                />
            )}
        </div>
    )
}

AddProduct.getLayout = (page: ReactElement) => {
    return (
        <AdminLayout>
          {page}
        </AdminLayout>
      )
}

export default AddProduct
