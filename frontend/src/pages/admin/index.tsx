import { Breadcrumb } from '@/components/Breadcrumb'
import { AdminLayout } from '@/components/Layout/AdminLayout'
import React, { ReactElement } from 'react'

function Admin() {
  const breadcrumb = [
    {
        title: 'Homepage',
        link: '/admin'
    },
    {
        title: 'Dashboard',
        link: '/admin'
    },
  ]

  return (
    <div className="p-7 h-[100vh]">
            <div className="py-4">
                <Breadcrumb item={breadcrumb} />
            </div>
            <div className='grid grid-cols-4 gap-4 text-white'>
              <div className='rounded-md bg-blue-500 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] '>
                <div className='shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-3 font-semibold'>0 tin nhắn mới</div>
                <div className='px-3 py-2 text-sm'>Xem ngay</div>
              </div>
              <div className='rounded-md bg-yellow-500 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                <div className='shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-3 font-semibold'>5 người dùng</div>
                <div className='px-3 py-2 text-sm'>Xem ngay</div>
              </div>
              <div className='rounded-md bg-green-500 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                <div className='shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-3 font-semibold'>0 đơn hàng mới</div>
                <div className='px-3 py-2 text-sm'>Xem ngay</div>
              </div>
              <div className='rounded-md bg-red-500 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                <div className='shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-3 font-semibold'>Thêm khuyến mãi</div>
                <div className='px-3 py-2 text-sm'>Thêm ngay</div>
              </div>
            </div>
        </div>
  )
}

Admin.getLayout = (page: ReactElement) => {
  return (
      <AdminLayout>
        {page}
      </AdminLayout>
    )
}

export default Admin
