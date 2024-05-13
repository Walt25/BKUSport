import { BreadcrumbType, Breadcrumb } from '@/components/Breadcrumb'
import { AdminLayout } from '@/components/Layout/AdminLayout'
import { ProductType } from '@/components/Product'
import { ProductImage } from '@/components/ProductImage'
import { TextEditor } from '@/components/TextEditor'
import React, { ReactElement } from 'react'
import { FaTrash } from 'react-icons/fa'
import { ImCancelCircle } from 'react-icons/im'
import { AttributeType } from '../../[...slug]'
import { Divider } from '@mui/material'


function FieldOrderDetail() {


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

    return (
        <div className="px-7 py-4">
            <div className="py-4">
                <Breadcrumb item={breadcrumb} />
            </div>
            <div className='flex flex-row items-center justify-between mb-2 '>
              <span className="font-semibold text-2xl">Order #3021</span>
              <button className="block text-sm font-medium border w-fit px-2 py-1 mt-2 text-gray-900 dark:text-white border-blue-500">Delete</button>
            </div>
            <div>
              <Divider />
              <div className='py-2 flex flex-row text-sm'>
                <span className='px-4'>October 7, 2020 at 9:08 pm</span>
                <Divider orientation="vertical" flexItem/>
                <span className='mx-4 px-2 bg-[#def2d0] text-[#245900] border rounded-md '>Field order</span>
                <Divider orientation="vertical" flexItem/>
                <span className='px-4'>Total $58.82</span>
                <Divider orientation="vertical" flexItem/>
                <span className='mx-4 px-2 bg-[#f9f1c8] text-yellow-800 border rounded-md '>Paid</span>
              </div>
              <Divider />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col col-span-2">
                    <div className="bg-white my-6 p-4  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <textarea name="note" id="note" className='w-full border p-3 outline-none' placeholder='Write note'></textarea>
                    </div>
                    <div className="bg-white mb-6 p-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <h1 className="text-lg font-semibold">Basic Infomation</h1>
                        <div className='flex flex-row items-center justify-between mt-4'>
                          <h1 className="text-sm font-semibold">Field name</h1>
                          <button className="block text-sm font-medium w-fit text-blue-500">View</button>
                        </div>
                        <input type="text" className="border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full" value={"Sân bóng đá The One Gamuda"} disabled/>
                        <div className='flex flex-row items-center justify-between'>
                          <h1 className="text-sm font-semibold">Location</h1>
                        </div>
                        <textarea  className="border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-1 text-sm w-full" value={"Đường số 2 Gamuda Gardens, Phường Trần Phú, Hoàng Mai, Hà Nội"} disabled/>
                        <div className='flex flex-row items-center justify-between'>
                          <h1 className="text-sm font-semibold">Time</h1>
                        </div>
                        <input type="text" className="border rounded-sm border-[#ced4da] outline-none px-3 py-2 mt-1 mb-3 text-sm w-full" value={"15:00 - 16:30"} disabled/>

                    </div>

                </div>
                <div className="flex-1 flex flex-col col-span-1">
                    <div className="bg-white  my-6 p-4  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <div className='flex flex-row items-center justify-between'>
                          <h1 className="text-md font-semibold">Customer</h1>
                          <button className="block text-sm font-medium w-fit text-blue-500">Edit</button>
                        </div>
                        <div className='flex flex-row items-center pt-4'>
                          <img className='rounded-full' src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-1-40x40.jpg" alt="pix" />
                          <div className='flex flex-col pl-2'>
                            <span className='font-semibold'>Jessica Moore</span>
                            <span className='text-sm text-gray-500'>@jessica-moore</span>
                          </div>
                        </div>
                    </div>
                    <div className="bg-white  mb-6 p-4  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <div className='flex flex-row items-center justify-between'>
                          <h1 className="text-md font-semibold">Contact person</h1>
                          <button className="block text-sm font-medium w-fit text-blue-500">Edit</button>
                        </div>
                        <div className='flex flex-col items-start pt-4'>
                            <span className='text-md font-semibold '>Jessica Moore</span>
                            <span className='text-sm text-blue-500'>jessica-moore@example.com</span>
                            <span className='text-sm text-gray-500'>+38 (094) 730-24-25</span>
                        </div>
                    </div>
                    <div className="bg-white  mb-6 p-4  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <div className='flex flex-row items-center justify-between mb-4'>
                          <h1 className="text-md font-semibold">Transaction</h1>
                        </div>
                        <Divider flexItem/>
                              <div className='py-3 flex flex-row justify-between items-center'>
                                <div className='flex flex-col pl-2'>
                                  <span>Payment</span>
                                  <span className='text-sm text-gray-500'>via Paypal</span>
                                </div>
                                <div className='text-sm'>October 7, 2020</div>
                                <div className='text-sm'>
                                    $58.82
                                </div>
                              </div>
                          <Divider flexItem/>
                    </div>
                </div>
            </div>

        </div>
    )
}
FieldOrderDetail.getLayout = (page: ReactElement) => {
    return (
        <AdminLayout>
          {page}
        </AdminLayout>
      )
}
export default FieldOrderDetail

