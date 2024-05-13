import { Breadcrumb } from '@/components/Breadcrumb'
import { AdminLayout } from '@/components/Layout/AdminLayout'
import React, { ReactElement } from 'react'

function OrderList() {

    const breadcrumb = [
        {
            title: 'Dashboard',
            link: '/admin/dashboard'
        },
        {
            title: 'Field',
            link: '/admin/dashboard/fieldlist'
        },
    ]

  return (
    <div className="p-7 h-[100vh]">
        <div className="pb-4">
            <Breadcrumb item={breadcrumb} />
        </div>
        <h1 className='text-3xl font-semibold'>Order</h1>
    </div>
  )
}

OrderList.getLayout = (page: ReactElement) => {
    return (
        <AdminLayout>
          {page}
        </AdminLayout>
      )
}

export default OrderList
