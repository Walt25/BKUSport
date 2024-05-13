import { BreadcrumbType, Breadcrumb } from '@/components/Breadcrumb'
import { AdminLayout } from '@/components/Layout/AdminLayout'
import { ProductType } from '@/components/Product'
import React, { ReactElement, useState } from 'react'
import { AttributeType } from '../../fieldlist/[...slug]'
import { Divider } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { HiOutlineDotsVertical } from 'react-icons/hi'

function CustomerDetail() {
    const [product, setProduct] = useState<ProductType>({} as ProductType)
    const [description, setDescription] = useState("")

    const [listImage, setListImage] = useState<FileList>({} as FileList)
    const [selectImage, setSelectImage] = useState<File[]>([])
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
            title: 'Customers',
            link: '/admin/customerlist'
        },
        {
            title: "Customer",
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

    const rows = [
        {
            id: "#80294",
            time: "Today at 6:10 pm",
            state: "Pending",
            quantity: "4 items",
            price: "$320.00"
        },
        {
            id: "#80294",
            time: "Today at 6:10 pm",
            state: "Pending",
            quantity: "4 items",
            price: "$320.00"
        },
        {
            id: "#80294",
            time: "Today at 6:10 pm",
            state: "Pending",
            quantity: "4 items",
            price: "$320.00"
        },
        {
            id: "#80294",
            time: "Today at 6:10 pm",
            state: "Pending",
            quantity: "4 items",
            price: "$320.00"
        },
        {
            id: "#80294",
            time: "Today at 6:10 pm",
            state: "Pending",
            quantity: "4 items",
            price: "$320.00"
        },
    ]


    return (
        <div className="px-7 py-4">
            <div className="py-4">
                <Breadcrumb item={breadcrumb} />
            </div>
            <div className='flex flex-row items-center justify-between'>
              <span className="font-semibold text-2xl">Adam Taylor</span>
              <button className="block mb-2 text-sm font-medium border w-fit px-2 py-1 mt-2 text-gray-900 dark:text-white border-blue-500">Save</button>
            </div>
            <div className="flex flex-row">
                <div className="flex-1 mr-6 flex flex-col">
                    <div className="bg-white my-6 p-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <div className='flex flex-col items-center mb-4'>
                            <img className='rounded-full' src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-1-96x96.jpg" alt="avatar" />
                            <span className='text-lg font-semibold mt-3 mb-1'>Adam Taylor</span>
                            <span className='text-sm text-blue-500'>jessica-moore@example.com</span>
                            <span className='text-sm text-gray-500'>+38 (094) 730-24-25</span>
                        </div>
                        <Divider />
                        <div className='flex flex-col mt-4'>
                            <div className='flex flex-col pb-3'>
                                <span className='font-semibold text-sm pb-1'>Registered</span>
                                <input className='text-sm text-gray-500 p-2 outline-none border' value={'June 26, 2021'} disabled/>
                            </div>
                            <div className='flex flex-col pb-3'>
                                <span className='font-semibold text-sm pb-1'>Date of Birth</span>
                                <input className='text-sm text-gray-500 p-2 outline-none border' value={'October 19, 1999'} disabled/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-[67%] flex flex-col">
                    <div className="bg-white my-6 p-4  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <textarea name="note" id="note" className='w-full border p-3 outline-none' placeholder='Note about Customer'></textarea>
                    </div>
                    <div className="bg-white mb-6 p-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <div className='flex flex-row items-center justify-between mb-4'>
                            <h1 className="text-lg font-semibold ">Orders</h1>
                            <span className='text-sm text-gray-500'>Total spent $34,980.34 on 7 orders</span>
                        </div>
                        <TableContainer component={Paper} className='shadow-none border'>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                
                                <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="left">{row.time}</TableCell>
                                    <TableCell align="left">{row.state}</TableCell>
                                    <TableCell align="left">{row.quantity}</TableCell>
                                    <TableCell align="left">{row.price}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>   
                        <div className=' flex flex-col items-center w-full my-4 text-blue-500'><span>View all 7 orders</span></div>
                    </div>
                    <div className="bg-white mb-6 p-4  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <div className='flex flex-row items-center justify-between pb-3'>
                            <h1 className="text-lg font-semibold ">Field Booking</h1>
                        </div>
                        <Divider />

                        <div className='my-2 flex flex-row justify-between items-center'>
                            <div className='flex flex-col'>
                                <span>No booking data</span>
                            </div>
                        </div>
                        <Divider />

                    </div>
                    <div className="bg-white mb-6 p-4  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <div className='flex flex-row items-center justify-between pb-3'>
                            <h1 className="text-lg font-semibold ">Address</h1>
                        </div>
                        <Divider />

                        <div className='my-2 flex flex-row justify-between items-center'>
                            <div className='flex flex-col'>
                                <span>Jessica Moore</span>
                                <span className='text-sm text-gray-500'>14/5 Bau Bang St Ward 13</span>
                            </div>
                            <HiOutlineDotsVertical />
                        </div>
                        <Divider />

                    </div>
                    <div className="bg-white mb-6 p-4  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <div className='flex flex-row items-center justify-between pb-3'>
                            <h1 className="text-lg font-semibold ">Teams</h1>
                        </div>
                        <Divider />

                        <div className='my-2 flex flex-row justify-between items-center'>
                            <div className='flex flex-col'>
                                <span>BKU Football Club</span>
                                <span className='text-sm text-gray-500'>Football</span>
                            </div>
                            <HiOutlineDotsVertical />
                        </div>
                        <Divider />
                        <div className='my-2 flex flex-row justify-between items-center'>
                            <div className='flex flex-col'>
                                <span>HCM Badminton Boys</span>
                                <span className='text-sm text-gray-500'>Batminton</span>
                            </div>
                            <HiOutlineDotsVertical />
                        </div>
                        <Divider />

                    </div>
                </div>
            </div>

        </div>
)}

CustomerDetail.getLayout = (page: ReactElement) => {
return (
    <AdminLayout>
        {page}
    </AdminLayout>
    )
}


export default CustomerDetail
