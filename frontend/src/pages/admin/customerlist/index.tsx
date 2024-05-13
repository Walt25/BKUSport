import EnhancedTable from '@/components/Admin/Table'
import { Breadcrumb } from '@/components/Breadcrumb'
import { GroupCheckboxes } from '@/components/CheckboxList'
import { AdminLayout } from '@/components/Layout/AdminLayout'
import { DenseMenu } from '@/components/Menu'
import { RangeSlider } from '@/components/Slider'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { FieldsType } from '@/pages'
import { HiDotsVertical } from 'react-icons/hi'
import { TbSoccerField } from 'react-icons/tb'
import { CustomMenu } from '@/components/CustomMenu/CustomMenu'
import { BiSearch } from 'react-icons/bi'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useRouter } from 'next/router'
import { Checkbox } from '@mui/material'
import { Model } from '@/components/Model'

type MenuDotProps = {
    onDelete: () => void
    cancel?: boolean
}

export const MenuDot:React.FC<MenuDotProps> = ({onDelete, cancel = false}) => {

    const ref = useRef(null)
    const [showDropdown, setShowDropDown] = useState(false)

    const handleClick = () => {
        console.log('click')
        onDelete()
    }

    return (
        <div ref={ref}>
            <HiDotsVertical onClick={() => setShowDropDown(true)} className='cursor-pointer'/>
            <CustomMenu
                anchorEl={ref.current}
                open={showDropdown}
                className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
                onClose={() => setShowDropDown(false)}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem disableRipple style={{ cursor: "default" }}>
                  <div>
                    <a href="#" className="block text-sm py-1 hover:text-[--primary-color] dark:hover:bg-gray-600 dark:hover:text-white">Xem chi tiết</a>
                  </div>
                </MenuItem>
                <MenuItem disableRipple style={{ cursor: "default" }}>
                  <div>
                    <a href="#" className="block text-sm py-1 hover:text-[--primary-color] dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleClick}>Xóa</a>
                  </div>
                </MenuItem>
                {
                    cancel && 
                    <MenuItem disableRipple style={{ cursor: "default" }}>
                        <div>
                            <a href="#" className="block text-sm py-1 hover:text-[--primary-color] dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleClick}>Hủy đơn</a>
                        </div>
                    </MenuItem>
                }
            </CustomMenu>
            
        </div>
    )
}

// _id?: ObjectId
//   username: string
//   email: string
//   role: string
//   date_of_birth?: Date
//   password: string
//   created_at?: Date
//   updated_at?: Date
//   email_verify_token?: string //jwt or ""
//   //Optional
//   avatar?: string
//   rental_id?: ObjectId[]
  
  const userList = [
    {
        username: "Adam Taylor",
        role: "user",
        date_of_birth: "October 19, 1999",
        created_at: "May 15, 2021",
        avatar: "https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-1-96x96.jpg",
        email: "taylor-adam@example.com"
    },
    {
        username: "Anna Wilson",
        role: "user",
        date_of_birth: "October 09, 2000",
        created_at: "February 26, 2021",
        avatar: "https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-12-40x40.jpg",
        email: "wilson-anna@example.com"
    },
    {
        username: "Brian Wood",
        role: "user",
        date_of_birth: "October 19, 1999",
        created_at: "May 15, 2021",
        avatar: "https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-7-40x40.jpg",
        email: "taylor-adam@example.com"
    },
    {
        username: "Charlotte Jones",
        role: "user",
        date_of_birth: "October 19, 1999",
        created_at: "May 15, 2021",
        avatar: "https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-9-40x40.jpg",
        email: "jones-charlotte@example.com"
    },
    {
        username: "Jacob Lee",
        role: "user",
        date_of_birth: "October 19, 1999",
        created_at: "May 15, 2021",
        avatar: "https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-11-40x40.jpg",
        email: "taylor-adam@example.com"
    },

  ];

function CustomerList() {

    const [fields, setFields] = useState<FieldsType[]>([])

    const route = useRouter()
    const [showModel, setShowModel] = useState(false)
    

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

    console.log(showModel)

    return (
        <div className="p-7 h-[100vh]">
            <div className="">
                <Breadcrumb item={breadcrumb} />
            </div>
            <h1 className='text-3xl font-semibold py-6'>Customer</h1>
            <div className='flex flex-row items-center justify-between bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md p-4 mb-3'>
                
                <div className="flex flex-row items-center h-10 w-[250px] max-sm:hidden">
                    <div className="bg-[#ebedf0] h-[42px] px-2 w-10 flex justify-center items-center rounded-l-md">
                        <BiSearch size={18} />
                    </div>
                    <input className="px-2 rounded-r-md outline-none w-80 h-[42px] border text-sm" type="text" placeholder="Bạn đang tìm kiếm gì?" />
                </div>
            </div>
            <div className="flex flex-row">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Registed</TableCell>
                            <TableCell align="left">Role</TableCell>
                            <TableCell align="left">Date of Birth</TableCell>

                            <TableCell align="left"></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {userList.map((row, key) => (
                            <TableRow
                            key={key}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell align="left" component="th" scope="row" >
                                <Checkbox />
                            </TableCell>
                            <TableCell className='w-fit hover:underline cursor-pointer' onClick={() => {
                                route.push(`/admin/customerlist/6b2133wweewqeqe4`)
                            }}>
                                <div className='flex flex-row items-center'>
                                    <img src={row.avatar} alt="pic" className='w-10 h-10 rounded-md'/>
                                    <div className='flex flex-col pl-2'>
                                        <span className='font-semibold'>{row.username}</span>
                                        <span className='text-[#6c757d]'>{row.email}</span>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell align="left">
                                {row.created_at}
                            </TableCell>
                            <TableCell align="left">
                                {row.role}
                            </TableCell>
                            <TableCell align="left">
                                {row.date_of_birth}
                            </TableCell>
                            <TableCell align="left">
                                <MenuDot onDelete={() => setShowModel(true)}/>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            {showModel && (
                <Model
                    onClose={() => setShowModel(false)}
                    top='40%'
                    bottom='40%'
                    left='40%'
                    right='40%'
                    render={
                        <div>
                            <div className="flex flex-row w-[95%] mx-auto my-6 justify-center">
                                <span>Xác nhận xóa?</span>
                            </div>
                            <div className="w-[94%] mx-auto flex flex-row justify-around">
                                <button className="block text-sm font-medium border w-fit px-3 py-2 mt-2 text-red-500 dark:text-white border-red-500">Delete</button>
                                <button className="block text-sm font-medium border w-fit px-3 py-2 mt-2 text-green-500 dark:text-white border-green-500">Cancel</button>
                            </div>
                        </div>
                    }
                />
            )}
        </div>
    )
}

CustomerList.getLayout = (page: ReactElement) => {
    return (
        <AdminLayout>
          {page}
        </AdminLayout>
      )
}

export default CustomerList
