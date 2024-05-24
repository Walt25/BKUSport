import { BreadcrumbType, Breadcrumb } from '@/components/Breadcrumb'
import { AdminLayout } from '@/components/Layout/AdminLayout'
import { ProductType } from '@/components/Product'
import { TextEditor } from '@/components/TextEditor'
import React, { ReactElement, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { ImCancelCircle } from 'react-icons/im'
import { AttributeType } from './[...slug]'
import { Checkbox } from '@mui/material'

function Addfield() {
  const [product, setProduct] = useState<ProductType>({} as ProductType)
    const [description, setDescription] = useState("")

    const [uploadImages, setUploadImages] = useState<string[]>([])
    const [selectImage, setSelectImage] = useState<string[]>([])
    const [attributes, setAttributes] = useState<AttributeType[]>([])
    const [addAttribute, setAddAttribute] = useState(false)
    const [currenAttr, setCurrenAttr] = useState<AttributeType>({} as AttributeType)


    if (!product) return <div>Not found</div>;

    const breadcrumb: BreadcrumbType[] = [
        {
            title: 'Dashboard',
            link: '/admin/dashboard'
        },
        {
            title: 'Fields',
            link: '/admin/fieldlist'
        },
        {
            title: "Add Field",
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

    const checkChecked = (src: string) => {
        return selectImage.includes(src)
    }

    const timeTable = [
        {
            time:'5:00 - 6:30',
            price: '300.000'
        },
        {
            time:'6:30 - 8:00',
            price: '300.000'
        },
        {
            time:'8:00 - 9:30',
            price: '300.000'
        },
        {
            time:'9:30 - 11:00',
            price: '300.000'
        },
        {
            time:'11:00 - 12:30',
            price: '300.000'
        },
        {
            time:'13:30 - 15:00',
            price: '300.000'
        },
        {
            time:'15:00 - 16:30',
            price: '300.000'
        },
        {
            time:'16:30 - 18:00',
            price: '300.000'
        },
        {
            time:'18:00 - 19:30',
            price: '300.000'
        },
        {
            time: '19:30 - 21:00',
            price: '300.000'
        },
        {
            time: '21:00 - 22:30',
            price: '300.000'
        },
    ]


    return (
        <div className="px-7 py-4">
            <div className="py-4">
                <Breadcrumb item={breadcrumb} />
            </div>
            <div className='flex flex-row items-center justify-between'>
              <span className="font-semibold text-2xl">Add Field</span>
              <button className="block mb-2 text-sm font-medium border w-fit px-2 py-1 mt-2 text-gray-900 dark:text-white border-blue-500">Save Field</button>
            </div>
            <div className="grid grid-cols-8 gap-4">
                <div className="flex flex-col col-span-4">
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
                                <button onClick={()=> setAddAttribute(true)} className="block mb-2 text-sm font-medium border w-fit px-2 py-1 mt-2 text-gray-900 dark:text-white border-blue-500">Add   </button>
                            }
                        </div>
                    </div>

                </div>
                <div className="flex-1 flex flex-col col-span-2">
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
                        <div className="bg-white p-4 mb-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                            <h1 className="text-lg font-semibold">Owner</h1>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="font-semibold text-sm text-gray-600 pb-1 pt-3 block">Name</label>
                                    <input type="text" className="border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full" />
                                </div>
                                <div>
                                    <label className="font-semibold text-sm text-gray-600 pb-1 pt-3 block">Contact</label>
                                    <input type="number" className="border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                            <h1 className="text-lg font-semibold">Location</h1>
                            <textarea  className="border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full"/>
                        </div>   
                </div>
                <div className="flex-1 flex flex-col col-span-2">
                    <div className="bg-white p-4 my-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <h1 className="text-lg font-semibold">Price</h1>
                        {
                            timeTable.map((time, key) => (
                                <div className="flex flex-row items-center">
                                    <div className="grid grid-cols-2 gap-3" key={key}>
                                        <input type="text" className="border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full text-center" value={time.time} disabled/>
                                        <input type="number" className="border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full"/>
                                    </div>
                                </div>
                            ))
                        }
                    </div> 
                      
                </div>
            </div>

        </div>
    )
}
Addfield.getLayout = (page: ReactElement) => {
    return (
        <AdminLayout>
          {page}
        </AdminLayout>
      )
}

export default Addfield
