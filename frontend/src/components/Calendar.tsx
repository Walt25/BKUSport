import React, { useEffect, useState } from "react"
import dayjs from "dayjs"
import range from "lodash-es/range"
import moment, { Moment } from 'moment'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

type CalendarProps = {
    onBooking: (date: string, time: string, price: string) => void
}

export const Calendar:React.FC<CalendarProps> = ({onBooking}) => {
  const [days, setDays] = useState<string[]>([])
  const [currentDay, setCurrentDay] = useState(moment())
  const [tense, setTense] = useState("AM")


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
        weekDates.push({dayMonth: current.day(i).format("MMM Do"), date: current.day(i).format("DD/MM/YYYY"), day: current.day(i).format("Do")}); 
    }
  
    return weekDates; 
  }

  const tableAM = [
    {
        time: "5:00 - 6:30",
        price: '300000',
        available: true
    },
    {
        time: "6:30 - 8:00",
        price: '300000',
        available: true
    },
    {
        time: "8:00 - 9:30",
        price: '300000',
        available: true
    },
    {
        time: "9:30 - 11:00",
        price: '300000',
        available: true
    },
    {
        time: "11:00 - 12:30",
        price: '300000',
        available: true
    },
  ]
  const tablePM = [
    {
        time: "13:00 - 14:30",
        price: '300000',
        available: true
    },
    {
        time: "14:30 - 16:00",
        price: '300000',
        available: true
    },
    {
        time: "16:00 - 17:30",
        price: '300000',
        available: true
    },
    {
        time: "17:30 - 19:00",
        price: '300000',
        available: true
    },
    {
        time: "19:00 - 20:30",
        price: '300000',
        available: true
    },
  ]
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row p-2 border rounded-md items-center">
            <div className="cursor-pointer rounded-full p-1 hover:bg-[--primary-color] transition duration-300 ease-in-out flex items-center justify-center" onClick={handlePrev}>
                <MdKeyboardArrowLeft size={24} />
            </div>
            <div className="datetime px-3">
                <span>From {getThisWeekDates()[0].dayMonth} to {getThisWeekDates()[6].dayMonth}</span>
            </div>
            <div className="cursor-pointer rounded-full p-1 hover:bg-[--primary-color] transition duration-300 ease-in-out flex items-center justify-center" onClick={handleNext}>
                <MdKeyboardArrowRight size={24} />
            </div>
        </div>
        <div>
            <button className="px-4 py-2 border mx-2" onClick={() => setTense("AM")}>AM</button>
            <button className="px-4 py-2 border mx-2" onClick={() => setTense("PM")}>PM</button>
        </div>
      </div>
      <div>
            <div className="flex flex-row flex-1">
                <div className="flex flex-col">
                    {
                        weekDays.map(d => (
                            <div className="border border-r-0 my-3 flex-1 flex justify-center items-center pl-3 rounded-tl-md rounded-bl-md" key={d}>
                                {d}
                            </div>
                    ))}
                </div>
                <div className="flex-1">
                    {
                        getThisWeekDates().map(i => (
                            <div className="flex flex-row py-3">
                                <div className="border border-l-0 py-4 pl-1 pr-3 min-w-[50px] flex justify-center items-center rounded-tr-md rounded-br-md">{i.day}</div>
                                <div className="pl-10 grid grid-cols-5 gap-6 w-full">
                                    {
                                        tense === "AM" ? tableAM.map((t, k) => (
                                            <div key={k} className="flex flex-col border items-center justify-center" onClick={() => onBooking(i.date, t.time, t.price)}>
                                                <span>{t.time}</span>
                                                <span>{t.price}</span>
                                            </div>
                                        )) : tablePM.map((t, k) => (
                                            <div key={k} className="flex flex-col border items-center justify-center" onClick={() => onBooking(i.date, t.time, t.price)}>
                                                <span>{t.time}</span>
                                                <span>{t.price}</span>
                                            </div>
                                        ))

                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                
            </div>
          {/* <table className="w-full">
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
          </table> */}
      </div>
    </div>
  )
}

