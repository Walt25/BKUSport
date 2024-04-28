import React, { useEffect, useState } from "react"
import dayjs from "dayjs"
import range from "lodash-es/range"
import moment, { Moment } from 'moment'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

export const Calendar = () => {
  const [days, setDays] = useState<string[]>([])
  const [currentDay, setCurrentDay] = useState(moment())

  const handlePrev = () => {
    setCurrentDay(moment(currentDay.subtract(1, 'weeks')))
  }

  const handleNext = () => {
    setCurrentDay(moment(currentDay.add(1, 'weeks')))
  }

  const getThisWeekDates = () => {
    var weekDates= []; 
    const current = moment(currentDay)
  
    for (var i = 1; i <= 7; i++) {
        weekDates.push(current.day(i).format("MMM Do")); 
    }
  
    return weekDates; 
  }

  const tablePrice = [
    [
        {
            time: "5:00 - 6:30",
            price: '300K',
            available: true
        },
        {
            time: "6:30 - 8:00",
            price: '300K',
            available: true
        },
        {
            time: "8:00 - 9:30",
            price: '300K',
            available: true
        },
        {
            time: "9:30 - 11:00",
            price: '300K',
            available: true
        },
        {
            time: "11:00 - 12:30",
            price: '300K',
            available: true
        },

    ],
    [
        {
            time: "5:00 - 6:30",
            price: '300K',
            available: true
        },
        {
            time: "6:30 - 8:00",
            price: '300K',
            available: true
        },
        {
            time: "8:00 - 9:30",
            price: '300K',
            available: true
        },
        {
            time: "9:30 - 11:00",
            price: '300K',
            available: true
        },
        {
            time: "11:00 - 12:30",
            price: '300K',
            available: false
        },

    ],
    [
        {
            time: "5:00 - 6:30",
            price: '300K',
            available: true
        },
        {
            time: "6:30 - 8:00",
            price: '300K',
            available: true
        },
        {
            time: "8:00 - 9:30",
            price: '300K',
            available: true
        },
        {
            time: "9:30 - 11:00",
            price: '300K',
            available: true
        },
        {
            time: "11:00 - 12:30",
            price: '300K',
            available: true
        },

    ],
    [
        {
            time: "5:00 - 6:30",
            price: '300K',
            available: true
        },
        {
            time: "6:30 - 8:00",
            price: '300K',
            available: true
        },
        {
            time: "8:00 - 9:30",
            price: '300K',
            available: true
        },
        {
            time: "9:30 - 11:00",
            price: '300K',
            available: true
        },
        {
            time: "11:00 - 12:30",
            price: '300K',
            available: true
        },

    ],
    [
        {
            time: "5:00 - 6:30",
            price: '300K',
            available: true
        },
        {
            time: "6:30 - 8:00",
            price: '300K',
            available: true
        },
        {
            time: "8:00 - 9:30",
            price: '300K',
            available: true
        },
        {
            time: "9:30 - 11:00",
            price: '300K',
            available: true
        },
        {
            time: "11:00 - 12:30",
            price: '300K',
            available: true
        },

    ],
    [
        {
            time: "5:00 - 6:30",
            price: '300K',
            available: true
        },
        {
            time: "6:30 - 8:00",
            price: '300K',
            available: true
        },
        {
            time: "8:00 - 9:30",
            price: '300K',
            available: true
        },
        {
            time: "9:30 - 11:00",
            price: '300K',
            available: true
        },
        {
            time: "11:00 - 12:30",
            price: '300K',
            available: true
        },

    ],
    [
        {
            time: "5:00 - 6:30",
            price: '300K',
            available: true
        },
        {
            time: "6:30 - 8:00",
            price: '300K',
            available: true
        },
        {
            time: "8:00 - 9:30",
            price: '300K',
            available: true
        },
        {
            time: "9:30 - 11:00",
            price: '300K',
            available: true
        },
        {
            time: "11:00 - 12:30",
            price: '300K',
            available: true
        },

    ],

  ]


  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row p-2 border rounded-md items-center">
            <div className="cursor-pointer rounded-full p-1 hover:bg-[--primary-color] transition duration-300 ease-in-out flex items-center justify-center" onClick={handlePrev}>
                <MdKeyboardArrowLeft size={24} />
            </div>
            <div className="datetime px-3">
                <span>From {getThisWeekDates()[0]} to {getThisWeekDates()[6]}</span>
            </div>
            <div className="cursor-pointer rounded-full p-1 hover:bg-[--primary-color] transition duration-300 ease-in-out flex items-center justify-center" onClick={handlePrev}>
                <MdKeyboardArrowRight size={24} />
            </div>
        </div>
        <div>
            <button className="px-4 py-2 border mx-2">AM</button>
            <button className="px-4 py-2 border mx-2">PM</button>
        </div>
      </div>
      <div className="flex flex-row">
            <div className="flex flex-row">
                <div className="flex flex-col">
                    {
                        weekDays.map(d => (
                            <td className="border border-r-0 my-2 flex-1 flex justify-center items-center pl-3 rounded-tl-md rounded-bl-md" key={d}>
                                {d}
                            </td>
                    ))}
                </div>
                <div className="text-center flex flex-col w-[100px] mr-2">
                    {
                        getThisWeekDates().map(i => (
                            <td className="border border-l-0 my-2 flex-1 flex justify-center items-center rounded-tr-md rounded-br-md">{i}</td>
                        ))
                    }
                </div>
            </div>
          <table className="w-full">
            <tbody>
                {
                    tablePrice.map(i => (
                        <tr className="text-center flex w-full">
                            {
                                i.map(k => (
                                    <td className={`border border-[#93B4FD] flex-1 m-2 rounded-md ${k.available ? 'bg-[#DBE6FE]' : 'bg-red-300'} `}>
                                        <div className="flex flex-col p-2">
                                            <span>{k.time}</span>
                                            <span>{k.price}</span>
                                        </div>
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }

            </tbody>
          </table>
      </div>
    </div>
  )
}

