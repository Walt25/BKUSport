import { AdminLayout } from '@/components/Layout/AdminLayout'
import React, { ReactElement, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MenuDot } from '../../customerlist';
import { Pagination } from '@mui/material';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Model } from '@/components/Model';
import Box from '@mui/material/Box';
import TableSortLabel from '@mui/material/TableSortLabel';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import { BiSearch } from 'react-icons/bi';
import { useRouter } from 'next/router';


type Order = 'asc' | 'desc';

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
  }

  const headCells = [
    {
      id: 'number',
      numeric: false,
      disablePadding: true,
      label: 'Number',
    },
    {
        id: 'field',
        numeric: false,
        disablePadding: true,
        label: 'Field',
      },
    {
      id: 'date',
      numeric: true,
      disablePadding: false,
      label: 'Date',
    },
    {
      id: 'time',
      numeric: true,
      disablePadding: false,
      label: 'Time',
    },
    {
        id: 'customer',
        numeric: true,
        disablePadding: false,
        label: 'Customer',
      },
      {
        id: 'paid',
        numeric: true,
        disablePadding: false,
        label: 'Status',
      },
      {
        id: 'total',
        numeric: true,
        disablePadding: false,
        label: 'Total',
      },
  ];
  
  
  function EnhancedTableHead(props: EnhancedTableProps) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
      props;
    const createSortHandler =
      (property: string) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
      };
  
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all desserts',
              }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'center' : 'center'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

function Order() {

    const [showModel, setShowModel] = useState(false)
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<string>('price');
    const [selected, setSelected] = React.useState<readonly string[]>([]);
    const route = useRouter()
    
    const booking = [
        {
            id: "#3201",
            date: "June 26, 2021",
            field: "Sân bóng đá The One Gamuda",
            time: '15:00 - 16:30',
            customer: "Jessica Moore",
            paid: "Paid",
            total: "$200.00"
        },
        {
            id: "#3201",
            field: "Sân bóng đá The One Gamuda",
            date: "June 26, 2021",
            time: '15:00 - 16:30',
            customer: "Jessica Moore",
            paid: "Paid",
            total: "$200.00"
        },
        {
            id: "#3201",
            field: "Sân bóng đá The One Gamuda",
            date: "June 26, 2021",
            time: '15:00 - 16:30',
            customer: "Jessica Moore",
            paid: "Paid",
            total: "$200.00"
        },
        {
            id: "#3201",
            field: "Sân bóng đá The One Gamuda",
            date: "June 26, 2021",
            time: '15:00 - 16:30',
            customer: "Jessica Moore",
            paid: "COD",
            total: "$200.00"
        },
        {
            id: "#3201",
            field: "Sân bóng đá The One Gamuda",
            date: "June 26, 2021",
            time: '15:00 - 16:30',
            customer: "Jessica Moore",
            paid: "COD",
            total: "$200.00"
        },
        {
            id: "#3201",
            field: "Sân bóng đá The One Gamuda",
            date: "June 26, 2021",
            time: '15:00 - 16:30',
            customer: "Jessica Moore",
            paid: "Paid",
            total: "$200.00"
        },
        {
            id: "#3201",
            field: "Sân bóng đá The One Gamuda",
            date: "June 26, 2021",
            time: '15:00 - 16:30',
            customer: "Jessica Moore",
            paid: "Cancel",
            total: "$200.00"
        },

    ]

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

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
          const newSelected = booking.map((n) => n.id);
          setSelected(newSelected);
          return;
        }
        setSelected([]);
      };

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: string,
      ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
      };

  return (
    <div className='p-7 h-[100vh]'>
        <div>
            <Breadcrumb item={breadcrumb} />
        </div>
        <h1 className="text-2xl font-semibold mb-6 mt-4">Booking History</h1>
        <div className='flex flex-row items-center justify-between bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md p-4 mb-3'>
                
                <div className="flex flex-row items-center h-10 w-full max-sm:hidden">
                    <div className="bg-[#ebedf0] h-[42px] px-2 w-10 flex justify-center items-center rounded-l-md">
                        <BiSearch size={18} />
                    </div>
                    <input className="px-2 rounded-r-md outline-none w-full h-[42px] border text-sm" type="text" placeholder="Bạn đang tìm kiếm gì?" />
                </div>
            </div>
       <div className="bg-white p-4 mb-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <TableContainer component={Paper} className='shadow-none border'>
                    <Table aria-label="simple table">
                         <EnhancedTableHead
                          order={order}
                          orderBy={orderBy}
                          onSelectAllClick={handleSelectAllClick}
                          onRequestSort={handleRequestSort}
                          rowCount={booking.length} 
                          numSelected={selected.length}                            />
                        <TableBody>
                        {booking.map((row) => (
                            <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell padding="checkbox" component="th" scope="row" >
                                <Checkbox
                                    color="primary"
                                />
                            </TableCell>
                            <TableCell align='center' className='w-fit hover:underline cursor-pointer' onClick={() => {
                                route.push('/admin/fieldlist/order/1')
                            }}>
                                {row.id}
                            </TableCell>
                            <TableCell align="center">{row.field}</TableCell>
                            <TableCell align="center">{row.date}</TableCell>
                            <TableCell align="center">{row.time}</TableCell>
                            <TableCell align="center">{row.customer}</TableCell>
                            <TableCell align="center">{row.paid === 'Paid' ? <span className="border border-green-500 w-fit px-1.5 py-0.5 rounded-md bg-green-100 text-green-700 text-xs">Paid</span> : 
                                row.paid === 'COD' ? <span className="border border-blue-500 w-fit px-1.5 py-0.5 rounded-md bg-blue-100 text-blue-700 text-xs">Cod</span> : 
                                <span className="border border-red-500 w-fit px-1.5 py-0.5 rounded-md bg-red-100 text-red-700 text-xs">Cancel</span> }
                            </TableCell>
                            <TableCell align="center">{row.total}</TableCell>
                            <TableCell align="center">
                                <MenuDot onDelete={() => setShowModel(true)} cancel={true}/>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Pagination count={2} variant="outlined" shape="rounded" className='mt-4'/>
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
    </div>
  )
}

Order.getLayout = (page: ReactElement) => {
    return (
        <AdminLayout>
          {page}
        </AdminLayout>
      )
}

export default Order
