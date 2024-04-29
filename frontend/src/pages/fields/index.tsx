import { useEffect, useRef, useState } from "react";
import { getProducts } from "../api/product";
import axios from "axios";
import { getAllFields } from "../api/field";
import { FieldsType } from "..";
import { Field } from "@/components/Field";
import { Box, Drawer, Menu, MenuItem, useMediaQuery } from "@mui/material";
import { CustomMenu } from "@/components/CustomMenu/CustomMenu";
import { TbSoccerField } from "react-icons/tb";
import { BiSearch } from "react-icons/bi";
import { bannerTop } from "@/data";
import { BoxBanner } from "@/components/BoxBanner";
import { FieldsCarousel } from "@/components/FieldsCarousel";


const ProductPage = () => {

    const [fields, setFields] = useState<FieldsType[]>([])
    const [showDropdown, setShowDropDown] = useState(false)
    const ref = useRef(null);
    const sm = useMediaQuery("(max-width: 640px)");
    const md = useMediaQuery("(max-width: 768px)");

    useEffect(() => {
      const getFields = async () => {
        const res = await getAllFields()
        setFields(res)
      }
      getFields()
    }, [])

    return (
      <div className="w-[94%] mx-auto">
        <div className="mt-12 mb-6 mx-4 flex flex-row items-center">
          <div>
            <button id="dropdownDividerButton" ref={ref} onClick={() => setShowDropDown(!showDropdown)} className="flex flex-row items-center relative text-white bg-blue-700 hover:bg-blue-800 outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
              <TbSoccerField size={24} className="mr-2"/>
              Danh mục sân
              <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
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
                    <a href="#" className="block text-sm py-1 hover:text-[--primary-color] dark:hover:bg-gray-600 dark:hover:text-white">Sân bóng đá</a>
                  </div>
                </MenuItem>
                <MenuItem disableRipple style={{ cursor: "default" }}>
                  <div>
                    <a href="#" className="block text-sm py-1 hover:text-[--primary-color] dark:hover:bg-gray-600 dark:hover:text-white">Sân bóng rổ</a>
                  </div>
                </MenuItem>
                <MenuItem disableRipple style={{ cursor: "default" }}>
                  <div>
                    <a href="#" className="block text-sm  py-1 hover:text-[--primary-color] dark:hover:bg-gray-600 dark:hover:text-white">Sân cầu lông</a>
                  </div>
                </MenuItem>
            </CustomMenu>
          </div>
        </div>
        <div className="flex flex-row n max-sm:flex-col">
            {bannerTop.map((item, key) => (
                <BoxBanner src={item} sx={"flex-1 mx-3 my-6 h-[220px]"} key={key} />
            ))}
        </div>
        <div className="px-3 bg-[--primary-color] p-12 my-6">
          <FieldsCarousel items={fields} slidePerView={sm ? 3 : md ? 3 : 4} />
        </div>
        <div className="py-12">
          <h1 className="text-2xl font-semibold">Danh sách sân</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {
            fields.map((i, key) => (
              <Field item={i} key={key}/>
            ))
          }
        </div>
      </div>
    )
}

export default ProductPage