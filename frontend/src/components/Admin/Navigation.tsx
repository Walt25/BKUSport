import { TbDashboard } from "react-icons/tb";
import { BsFileText } from "react-icons/bs";
import { LuUser2 } from "react-icons/lu";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoHeartOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { IoMdSettings} from "react-icons/io";
import { ReactElement } from 'react';
import { Dropdown } from "@/components/Admin/Dropdown";


export type DashBoardItemType = {
    title: string,
    link?: string,
    icon?: ReactElement
    advance?: DashBoardItemType[]
}

const dashBoardItem: DashBoardItemType[] = [
    {
        title: 'Dashboard',
        link: '/admin',
        icon: <TbDashboard size={16}/>
    },
    {
        title: 'Catalog',
        icon: <BsFileText size={16}/>,
        advance: [
            {
                title: 'Products List',
                link: '/admin/productlist'
            },
            {
                title: 'Product',
                link: 'product'
            },
            {
                title: 'Category List',
                link: 'categorylist'
            },
            {
                title: 'Category',
                link: 'category'
            }
        ]
    },
    {
        title: 'Customers',
        icon: <LuUser2 size={16}/>,
        advance: [
            {
                title: 'Customers List',
                link: 'customerlist'
            },
            {
                title: 'Customer',
                link: 'customer'
            },
        ]
    },
    {
        title: 'Orders',
        icon: <HiOutlineShoppingCart size={16}/>,
        advance: [
            {
                title: 'Orders List',
                link: 'orderlist'
            },
            {
                title: 'Order',
                link: 'order'
            },
        ]
    },
    {
        title: 'Orders',
        icon: <IoHeartOutline size={16}/>,
        advance: [
            {
                title: 'Coupons List',
                link: 'couponlist'
            },
            {
                title: 'Coupon',
                link: 'coupon'
            },
        ]
    },
    {
        title: 'Inbox',
        icon: <MdMailOutline size={16}/>,
        advance: [
            {
                title: 'List',
                link: 'inboxlist'
            },
            {
                title: 'Conversation',
                link: 'inboxconversation'
            },
        ]
    },
    {
        title: 'Chat',
        link: 'chat',
        icon: <IoChatbubbleEllipsesOutline size={16}/>
    },
    {
        title: 'Calendar',
        link: 'alendar',
        icon: <FaRegCalendarAlt size={16}/>
    },
    {
        title: 'Analytics',
        link: 'analytics',
        icon: <SiGoogleanalytics size={16}/>
    },
    {
        title: 'Setting',
        link: 'setting',
        icon: <IoMdSettings size={16}/>
    },

]

export const AdminNavbar = () => {

    return (
        <div                 
            className={`flex flex-col text-white bg-[#3d464d] h-[100vh] w-[200px] fixed`}
        >
            <div className="bg-[#1976d2] h-[52px] flex flex-row items-center justify-center">
                <span className="font-bold text-xl indent-3 text-white w-full">SPORT</span>
                <div className='bg-white text-black text-[10px] px-4 py-1 mx-2 flex items-center justify-center font-semibold'>ADMIN</div>
            </div>
            <ul className='flex-1 overflow-x-hidden flex flex-col w-full'>
                   {
                        dashBoardItem.map((item, key) => (
                            <Dropdown item={item} key={key} />
                        ))
                   }
            </ul>
        </div>
    )
}