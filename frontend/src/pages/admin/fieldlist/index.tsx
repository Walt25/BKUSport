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

const MenuDot = () => {

    const ref = useRef(null)
    const [showDropdown, setShowDropDown] = useState(false)

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
                    <a href="#" className="block text-sm py-1 hover:text-[--primary-color] dark:hover:bg-gray-600 dark:hover:text-white">Xóa sân</a>
                  </div>
                </MenuItem>
            </CustomMenu>
        </div>
    )
}

function FieldList() {

    const [fields, setFields] = useState<FieldsType[]>([])

    const route = useRouter()
    

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

    useEffect(() => {
        const getFields = async () => {
            const res = await axios.get("http://localhost:4000/fields")
            if (res.data.result.length > 0) {
                res.data.result.forEach((item: FieldsType) => {
                    const slug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
                    item.slug = slug;
                  });
                setFields(res.data.result)
            }
            else setFields([])
        }

        getFields()
    }, [])

    return (
        <div className="p-7 h-[100vh]">
            <div className="py-4">
                <Breadcrumb item={breadcrumb} />
            </div>
            <div className='flex flex-row items-center justify-between bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md p-4 mb-3'>
                <FormControl className='w-[200px]' size='small'  variant="standard">
                    <InputLabel id="demo-simple-select-label">Sport</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    >
                    <MenuItem className='text-sm' value={10}>Football</MenuItem>
                    <MenuItem className='text-sm' value={20}>Badminton</MenuItem>
                    <MenuItem className='text-sm' value={30}>Volleyball</MenuItem>
                    </Select>
                </FormControl>
                <div className="flex flex-row items-center h-10 w-[250px] max-sm:hidden">
                    <div className="bg-[#ebedf0] h-[42px] px-2 w-10 flex justify-center items-center rounded-l-md">
                        <BiSearch size={18} />
                    </div>
                    <input className="px-2 rounded-r-md outline-none w-80 h-[42px] border text-sm" type="text" placeholder="Bạn đang tìm kiếm gì?" />
                </div>
                <FormControl className='w-[200px]' size='small'  variant="standard">
                    <InputLabel id="demo-simple-select-label">Location</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    >
                    <MenuItem className='text-sm' value={10}>District 1</MenuItem>
                    <MenuItem className='text-sm' value={20}>District 2</MenuItem>
                    <MenuItem className='text-sm' value={30}>District 3</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className='w-[200px]' size='small'  variant="standard">
                    <InputLabel id="demo-simple-select-label">Owner</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    >
                    <MenuItem className='text-sm' value={10}>BKU Sport</MenuItem>
                    <MenuItem className='text-sm' value={20}>HCMUT</MenuItem>
                    <MenuItem className='text-sm' value={30}>HCMUTE</MenuItem>
                    </Select>
                </FormControl>
                <button onClick={() => {
                    route.push('/admin/fieldlist/addfield')
                }} className="block mb-2 text-sm font-medium border w-fit px-2 py-1 mt-2 text-gray-900 dark:text-white border-blue-500">Add new</button>

            </div>
            <div className="flex flex-row">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Visual</TableCell>
                            <TableCell align="left">Sport</TableCell>
                            <TableCell align="left">Location</TableCell>
                            <TableCell align="left">Owner</TableCell>
                            <TableCell align="left">Contact</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {fields.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row" className='w-fit hover:underline cursor-pointer' onClick={() => {
                                route.push(`/admin/fieldlist/${row._id}/${row.slug}`)
                            }}>
                                {row.name}
                            </TableCell>
                            <TableCell align="left"><img src={row.images[0]} alt="pic" className='w-10 h-10'/></TableCell>
                            <TableCell align="left">Football</TableCell>
                            <TableCell align="left">{row.location}</TableCell>
                            <TableCell align="left">BKU Sport</TableCell>
                            <TableCell align="left">0123456789</TableCell>
                            <TableCell align="left">
                                <MenuDot />
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

FieldList.getLayout = (page: ReactElement) => {
    return (
        <AdminLayout>
          {page}
        </AdminLayout>
      )
}

export default FieldList
