import { Breadcrumb } from '@/components/Breadcrumb';
import { AdminLayout } from '@/components/Layout/AdminLayout'
import { Model } from '@/components/Model';
import { FieldsType } from '@/pages';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router';
import React, { ReactElement, useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { MenuDot } from '../customerlist';
import { Checkbox } from '@mui/material';
import { ImBin2 } from 'react-icons/im';

const userList = [
    {
        id: 0,
        username: "Adam Taylor",
        role: "user",
        date_of_birth: "October 19, 1999",
        created_at: "May 15, 2021",
        avatar: "https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-1-96x96.jpg",
        email: "taylor-adam@example.com"
    },
    {
        id: 1,
        username: "Anna Wilson",
        role: "user",
        date_of_birth: "October 09, 2000",
        created_at: "February 26, 2021",
        avatar: "https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-12-40x40.jpg",
        email: "wilson-anna@example.com"
    },
    {
        id: 2,
        username: "Brian Wood",
        role: "user",
        date_of_birth: "October 19, 1999",
        created_at: "May 15, 2021",
        avatar: "https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-7-40x40.jpg",
        email: "taylor-adam@example.com"
    },
    {
        id: 3,
        username: "Charlotte Jones",
        role: "user",
        date_of_birth: "October 19, 1999",
        created_at: "May 15, 2021",
        avatar: "https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-9-40x40.jpg",
        email: "jones-charlotte@example.com"
    },
    {
        id: 4,
        username: "Jacob Lee",
        role: "user",
        date_of_birth: "October 19, 1999",
        created_at: "May 15, 2021",
        avatar: "https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-11-40x40.jpg",
        email: "taylor-adam@example.com"
    },

  ];

function UniformList() {

    const [fields, setFields] = useState<FieldsType[]>([])

    const route = useRouter()
    const [showModel, setShowModel] = useState(false)
    const [checked, setChecked] = useState(-1)
    

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
                        {
                            userList.map((row, key) => (
                                checked !== row.id ?
                                <TableRow
                                    key={key}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}  
                                >
                                <TableCell align="left" component="th" scope="row" >
                                    <Checkbox onChange={() => setChecked(row.id)} checked={checked === row.id}/>
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
                                </TableRow> :
                                    <TableRow
                                        key={key}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}  
                                        className='bg-blue-500'
                                    >
                                        <TableCell align="left" component="th" scope="row" >
                                            <Checkbox className='bg-white hover:bg-white' onChange={() => setChecked(-1)} checked={checked === row.id}/>
                                        </TableCell>
                                        <TableCell className='text-white text-lg'>
                                            Delete this user
                                        </TableCell>
                                        <TableCell className='bg-blue-500'/>
                                        <TableCell className='bg-blue-500'/>
                                        <TableCell className='bg-blue-500'/>
                                        <TableCell>
                                            <ImBin2 className='text-white cursor-pointer' size={20}/>
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

UniformList.getLayout = (page: ReactElement) => {
    return (
        <AdminLayout>
          {page}
        </AdminLayout>
      )
}

export default UniformList
