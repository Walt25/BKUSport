import Link from "next/link"
import { DashBoardItemType } from "@/components/Admin/Navigation"
import { useState } from "react"
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io"

type DropdownType = {
    item: DashBoardItemType
}

export const Dropdown: React.FC<DropdownType> = (props) => {

    const {title, advance, link, icon} = props.item

    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <div>
            <Link href={`${link ? link : ''}`}>
                <li className='p-3 hover:bg-[#48525a] text-xs flex flex-row items-center justify-between'  onClick={handleClick}>
                    <div className='flex flex-row items-center'>
                        <div className="w-4 h-4 flex items-center justify-center">{icon}</div>
                        <span className='pl-2'>{title}</span>
                    </div>
                    {
                        advance && (!active ? <IoIosArrowBack /> : <IoIosArrowDown />)
                    }
                
                
                </li>
            </Link>
            {
                advance && (active && (
                    <ul className="scrollbar">
                        {
                            advance.map((item, key) => (
                                <Link href={item.link ? item.link : ''} key={key} >
                                    <li className='p-3 hover:bg-[#48525a] text-xs flex flex-row items-center justify-between'>
                                        <div className='flex flex-row items-center'>
                                            <div className="w-4 h-4 flex items-center justify-center">{item.icon}</div>
                                            <span className='pl-2'>{item.title}</span>
                                        </div>
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                ))
            }
        </div>
    )
}