import { TbDashboard } from "react-icons/tb";
import { BsFileText } from "react-icons/bs";
import { LuUser2 } from "react-icons/lu";
import { HiOutlineShoppingCart, HiUserGroup } from "react-icons/hi";
import { IoHeartOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { IoMdSettings} from "react-icons/io";
import { ReactElement } from 'react';
import { Dropdown } from "@/components/Admin/Dropdown";
import { GiSoccerField } from "react-icons/gi";


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
                title: 'Product List',
                link: '/admin/productlist'
            },
            {
                title: 'Uniform List',
                link: '/admin/uniformlist'
            }
           
        ]
    },
    {
        title: 'Fields',
        icon: <GiSoccerField   size={16}/>,
        advance: [
            {
                title: 'Field List',
                link: '/admin/fieldlist'
            },
            {
                title: 'Field Orders',
                link: '/admin/fieldlist/order'
            },
            
        ]
    },
    {
        title: 'Customers',
        icon: <LuUser2 size={16}/>,
        advance: [
            {
                title: 'Customers List',
                link: '/admin/customerlist'
            },
            
        ]
    },
    {
        title: 'Orders',
        icon: <HiOutlineShoppingCart size={16}/>,
        advance: [
            {
                title: 'Orders List',
                link: '/admin/orderlist/1'
            },
            {
                title: 'Order',
                link: 'order'
            },
        ]
    },
    {
        title: 'Teams',
        icon: <HiUserGroup  size={16}/>,
        advance: [
            {
                title: 'Teams List',
                link: "#"
            }
        ]
    },
    {
        title: 'Coupons',
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