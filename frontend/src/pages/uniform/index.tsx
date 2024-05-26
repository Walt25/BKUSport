import { ReactElement, useEffect, useState } from "react";
import { getAllEquipment, getProducts } from "../api/product";
import { Product, ProductType } from "@/components/Product";
import { DenseMenu } from "@/components/Menu";
import { RangeSlider } from "@/components/Slider";
import { GroupCheckboxes } from "@/components/CheckboxList";
import { UniformType, getAllUniform } from "@/Api/uniform";
import { Food } from "@/components/Food";


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

const UniformPage = () => {


    const [products, setProducts] = useState<UniformType[]>([])
    useEffect(() => {
      const getEquipments = async () => {
        const res = await getAllUniform()
        if (res.data.result.length > 0) {
            setProducts(res.data.result)
        }
        else setProducts([])
    }

    getEquipments()
    }, [])

    console.log(products)

    return (
      <div className="w-[94%] mx-auto flex flex-col">
        <div className="flex items-center justify-center h-[190px] bg-[url('https://t4.ftcdn.net/jpg/05/58/74/03/360_F_558740316_doEcfqBvECaPfUd7iBsfoRZD3cWNBd1L.jpg')]">
          <span className="text-white font-mono text-5xl font-semibold tracking-widest">SPORT UNIFORMS</span>
        </div>
        <div className="grid grid-cols-4 gap-4 my-12">
          <div>
            <DenseMenu item={menuList} />  
          </div> 
          <div className="col-span-3 grid grid-cols-4 gap-4 ">
            {
              products ? products.map((product, key) => (
                <Food item={product} key={key} />
              )) : <span>Sorry! no product found</span>
            }
          </div>
        </div>
      </div>
    )
}

export default UniformPage