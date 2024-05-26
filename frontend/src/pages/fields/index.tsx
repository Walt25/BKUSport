import { ReactElement, useEffect, useRef, useState } from "react";
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
import { RangeSlider } from "@/components/Slider";
import { GroupCheckboxes } from "@/components/CheckboxList";
import { UniformType } from "@/Api/uniform";
import { DenseMenu } from "@/components/Menu";

const menuList: ReactElement[] = [
  <div className="font-semibold">Filter</div>,
  <RangeSlider />,
  <GroupCheckboxes input={{
      title: "Categories",
      listItem: [
          'Soccer',
          'Volleyball',
          'Badminton',
          'Swimming',
          'Tennis',
          'Table Tenis'
      ]
  }} onChange={function (categories: string): void {
      throw new Error("Function not implemented.");
  } } />,
  <GroupCheckboxes input={{
      title: "Product type",
      listItem: [
          'Simple',
          'Variable',
          'Digital',
      ]
  }} />,
  <GroupCheckboxes input={{
      title: "Brands",
      listItem: [
          'Brandix',
          'FastWheels',
          'FuelCorp',
          'RedGate',
          'Specter',
          'TurboElectric'

      ]
  }} />
]

const ProductPage = () => {

    const [fields, setFields] = useState<FieldsType[]>([])
    const [showDropdown, setShowDropDown] = useState(false)
    const ref = useRef(null);
    const sm = useMediaQuery("(max-width: 640px)");
    const md = useMediaQuery("(max-width: 768px)");

    const [products, setProducts] = useState<FieldsType[]>([])
    useEffect(() => {
      const getEquipments = async () => {
        const res = await getAllFields()
        if (res.length > 0) {
            setProducts(res)
        }
        else setProducts([])
    }

    getEquipments()
    }, [])

    useEffect(() => {
      const getFields = async () => {
        const res = await getAllFields()
        setFields(res)
      }
      getFields()
    }, [])

    return (
      <div className="w-[94%] mx-auto">
        <div className="flex items-center justify-center h-[190px] bg-[url('https://t4.ftcdn.net/jpg/05/58/74/03/360_F_558740316_doEcfqBvECaPfUd7iBsfoRZD3cWNBd1L.jpg')]">
          <span className="text-white font-mono text-5xl font-semibold tracking-widest">SPORT UNIFORMS</span>
        </div>
        <div className="mb-6 mx-4 flex flex-row items-center">
          <div>

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
        <div className="relative rounded-xl mt-12 py-12 flex flex-col items-center bg-gradient-to-r from-blue-200 to-blue-500">
            <div className="rounded-full absolute -top-[20px] flex justify-center items-center w-[36%] h-[70px] bg-no-repeat mx-auto font-semibold text-2xl text-white bg-blue-500">Sản phẩm nổi bật</div>
            <div className="w-full pt-12 px-3">
              <FieldsCarousel items={fields} slidePerView={sm ? 3 : md ? 3 : 4} />
            </div>
        </div>
        <div className="flex flex-col">
        
        <div className="grid grid-cols-4 gap-4 my-12">
          <div>
            <DenseMenu item={menuList} />  
          </div> 
          <div className="col-span-3 grid grid-cols-3 gap-4 ">
            {
              products ? products.map((product, key) => (
                <Field item={product} key={key} />
              )) : <span>Sorry! no product found</span>
            }
          </div>
        </div>
        </div>
      </div>
    )
}

export default ProductPage