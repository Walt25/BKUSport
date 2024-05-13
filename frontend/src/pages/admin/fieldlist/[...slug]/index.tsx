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
    import { ProductImage } from "@/components/ProductImage";
import { FaTrash } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { FieldsType } from "@/pages";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MenuDot } from "../../customerlist";
export const getServerSideProps = (async (context) => {
    const id = context.params?.slug?.[0];
    return { props: { id } };
}) satisfies GetServerSideProps<{}>;


export type AttributeType = {
    title: string,
    content: string
}

export default function FieldDetail({ id }: InferGetServerSidePropsType<typeof getServerSideProps>) {   
    const [field, setField] = useState<FieldsType>({} as FieldsType)
    const [loading, setLoading] = useState(true)
    const [description, setDescription] = useState("")

    const [listImage, setListImage] = useState<FileList>({} as FileList)
    const [selectImage, setSelectImage] = useState<File[]>([])
    const [attributes, setAttributes] = useState<AttributeType[]>([])
    const [addAttribute, setAddAttribute] = useState(false)
    const [currenAttr, setCurrenAttr] = useState<AttributeType>({} as AttributeType)
    const [showModel, setShowModel] = useState(false)
    
    
    useEffect(() => {
        const getField = async () => {
            if (id) {
                const res = await axios.get(`http://localhost:4000/fields/${id}`)
                if (res.data.result) {
                    setField(res.data.result)
                }
                else setField({} as FieldsType)
                setLoading(false)
            }
            else setField({} as FieldsType)
            setLoading(false)
        }
        getField()
    }, [id])


    if (!field) return <div>Not found</div>;

    const breadcrumb: BreadcrumbType[] = [
        {
            title: 'Dashboard',
            link: '/admin/dashboard'
        },
        {
            title: 'Fields',
            link: '/admin/dashboard/fields'
        },
        {
            title: "Edit Field",
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

    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const file = event.target.files
        console.log(file)
        setListImage(file)

    };

    const handleCheck = (src: string) => {
        // console.log(selectImage.includes(src), src, selectImage)
        // if (!selectImage.includes(src)) {
        //     setSelectImage([...selectImage, src])
        // }
        // else setSelectImage(selectImage.filter(i => i !== src))

    }


    const booking = [
        {
            id: "#3201",
            date: "June 26, 2021",
            time: '15:00 - 16:30',
            customer: "Jessica Moore",
            paid: "Yes",
            total: "$200.00"
        },
        {
            id: "#3201",
            date: "June 26, 2021",
            time: '15:00 - 16:30',
            customer: "Jessica Moore",
            paid: "Yes",
            total: "$200.00"
        },
        {
            id: "#3201",
            date: "June 26, 2021",
            time: '15:00 - 16:30',
            customer: "Jessica Moore",
            paid: "Yes",
            total: "$200.00"
        },
        {
            id: "#3201",
            date: "June 26, 2021",
            time: '15:00 - 16:30',
            customer: "Jessica Moore",
            paid: "COD",
            total: "$200.00"
        },
        {
            id: "#3201",
            date: "June 26, 2021",
            time: '15:00 - 16:30',
            customer: "Jessica Moore",
            paid: "COD",
            total: "$200.00"
        },
        {
            id: "#3201",
            date: "June 26, 2021",
            time: '15:00 - 16:30',
            customer: "Jessica Moore",
            paid: "Yes",
            total: "$200.00"
        },
    ]

    if (loading) return <div>Loading</div>

    return (
        <div className="px-7 py-4">
            <div className="py-4">
                <Breadcrumb item={breadcrumb} />
            </div>
            <div className="flex flex-row items-center justify-between">
                <span className="font-semibold text-2xl">{field.name}</span>
                <button className="block mb-2 text-sm font-medium border w-fit px-2 py-1 mt-2 text-gray-900 dark:text-white border-blue-500">Save Field</button>
            </div>
            <div className="grid grid-cols-8 gap-4">
                <div className="flex flex-col col-span-4">
                    <div className="bg-white my-6 p-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <h1 className="text-lg font-semibold">Basic Infomation</h1>
                        <label className="font-semibold text-sm text-gray-600 pb-1 pt-3 block">Name</label>
                        <input type="text" className="border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full" value={field.name}/>
                        <label className="font-semibold text-sm text-gray-600 pb-2 pt-3 block">Slug</label>
                        <div className="border mb-1 rounded-sm border-[#ced4da] flex flex-row items-center">
                            <div className="px-3 bg-[#e9ecef] py-2 border-r border-[#ced4da]">https://example.com/products/</div>
                            <input type="text" className="py-2 outline-none px-3 text-sm w-full" value={field.slug}/>
                        </div>
                        <span className="text-[14px]">Unique human-readable product identifier. No longer than 255 characters.</span>
                        <label className="font-semibold text-sm text-gray-600 pb-2 pt-3 block">Description</label>
                        <TextEditor onChange={setDescription} content={description}/>
                        <label className="font-semibold text-sm text-gray-600 pb-1 pt-3 block">Short Description</label>
                        <textarea className="min-h-[100px] border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full" value={field.slug}/>
                        <h1 className="text-lg font-semibold">Attribute</h1>
                        {
                            attributes.length > 0 && attributes.map((attribute, key) => (
                                <div className="flex flex-row items-center">
                                    <div className="grid grid-cols-4 gap-3" key={key}>
                                        <input type="text" className="border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full" value={attribute.title} disabled/>
                                        <input type="text" className="col-span-3 border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full" value={attribute.content} disabled/>
                                    </div>
                                    <button className="mt-[4px] mb-[12px] flex-1 flex justify-center pl-4"><ImCancelCircle   /></button>
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
                                <button onClick={()=> setAddAttribute(true)} className="flex mb-2 text-sm font-medium border w-full px-2 py-1 mt-2 text-gray-900 dark:text-white border-blue-500"><span className="w-fit">New</span></button>
                            }
                        </div>
                        
                    </div>

                </div>
                <div className="flex-1 flex flex-col col-span-2">
                    <div className="bg-white p-4 my-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <FormControl className='w-full' size='small' >
                            <InputLabel id="demo-simple-select-label" className='text-sm'>Sport</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            >
                            <MenuItem className='text-sm' value={10}>Football</MenuItem>
                            <MenuItem className='text-sm' value={20}>Badminton</MenuItem>
                            <MenuItem className='text-sm' value={30}>Volleyball</MenuItem>
                            </Select>
                        </FormControl>
                    </div> 
                    <div className="bg-white  mb-6 p-4  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
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
                                field.images.length < 1 ? <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRtO_JDfcU-A_Hi5IayDm2yf-q2gmSQZh3ghQ6-9BVNQ&s"} alt="pic" /> :
                                field.images.map((i, key) => (
                                    <ProductImage src={i} onCheck={handleCheck} key={key}/>
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
                                <input type="text" className="border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full" value="BKU SPORT"/>
                            </div>
                            <div>
                                <label className="font-semibold text-sm text-gray-600 pb-1 pt-3 block">Contact</label>
                                <input type="number" className="border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full" value="0123456789"/>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 mb-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <h1 className="text-lg font-semibold">Location</h1>
                        <textarea  className="border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full" value={field.location}/>
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
                                        <input type="number" className="border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full" value={time.price}/>
                                    </div>
                                </div>
                            ))
                        }
                    </div> 
                      
                </div>
            </div>
            <div className="bg-white p-4 my-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <h1 className="text-lg font-semibold mb-6 mt-4">Booking History</h1>
                <TableContainer component={Paper} className='shadow-none border'>
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Number</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Time</TableCell>
                            <TableCell align="left">Customer</TableCell>
                            <TableCell align="left">Paid</TableCell>
                            <TableCell align="left">Total</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {booking.map((row) => (
                            <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row" className='w-fit hover:underline cursor-pointer'>
                                {row.id}
                            </TableCell>
                            <TableCell align="left">{row.date}</TableCell>
                            <TableCell align="left">{row.time}</TableCell>
                            <TableCell align="left">{row.customer}</TableCell>
                            <TableCell align="left">{row.paid === 'Yes' ? <span className="border border-green-500 w-fit px-1.5 py-0.5 rounded-md bg-green-100 text-green-700 text-xs">Yes</span> : 
                                <div className="border border-blue-500 w-fit px-1.5 py-0.5 rounded-md bg-blue-100 text-blue-700 text-xs">Cod</div>}
                            </TableCell>
                            <TableCell align="left">{row.total}</TableCell>
                            <TableCell align="left">
                                <MenuDot onDelete={() => setShowModel(true)}/>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

FieldDetail.getLayout = (page: ReactElement) => {
    return (
        <AdminLayout>
          {page}
        </AdminLayout>
      )
}