import { ReactElement } from "react";
import { RangeSlider } from "../../../components/Slider";
import { GroupCheckboxes } from "../../../components/CheckboxList";
import EnhancedTable from "@/components/Admin/Table";
import { Breadcrumb } from "@/components/Breadcrumb";
import { DenseMenu } from "@/components/Menu";
import { AdminLayout } from "@/components/Layout/AdminLayout";
import { UserLayout } from "@/components/Layout/UserLayout";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductList() {

    const breadcrumb = [
        {
            title: 'Dashboard',
            link: '/admin/dashboard'
        },
        {
            title: 'Products',
            link: '/admin/dashboard/productlist'
        },
    ]



    return (
        <div className="p-7">
            <div className="py-4">
                <Breadcrumb item={breadcrumb} />
            </div>
            <div className="flex flex-row">
                <div className="flex-1 ml-6">
                    <EnhancedTable />
                </div> 
            </div>
            <ToastContainer />
        </div>
    )
}

ProductList.getLayout = (page: ReactElement) => {
    return (
        <AdminLayout>
          {page}
        </AdminLayout>
      )
}

export default ProductList