import { ReactElement } from "react";
import {DenseMenu} from "../../components/Menu";
import { RangeSlider } from "../../components/Slider";
import { GroupCheckboxes } from "../../components/CheckboxList";
import EnhancedTable from "@/components/Admin/Table";
import { Breadcrumb } from "@/components/Breadcrumb";

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

    const menuList: ReactElement[] = [
        <div className="font-semibold">Filter</div>,
        <RangeSlider />,
        <GroupCheckboxes input={{
            title: "Categories",
            listItem: [
                'Power tools',
                'Hand tools',
                'Machine tools',
                'Power machinery',
                'Measurement'
            ]
        }} />,
        <GroupCheckboxes input={{
            title: "Product type",
            listItem: [
                'Simple',
                'Variable',
                'Digital',
            ]
        }} />,
        <GroupCheckboxes input={{
            title: "Brands",
            listItem: [
                'Brandix',
                'FastWheels',
                'FuelCorp',
                'RedGate',
                'Specter',
                'TurboElectric'

            ]
        }} />
    ]

    return (
        <div className="p-7">
            <div className="py-4">
                <Breadcrumb item={breadcrumb} />
            </div>
            <div className="flex flex-row">
                <div className="w-[18%]">
                    <DenseMenu item={menuList} />
                </div>
                <div className="flex-1 ml-6">
                    <EnhancedTable />
                </div> 
            </div>
        </div>
    )
}

export default ProductList