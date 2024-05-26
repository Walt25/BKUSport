import { ProductType } from "@/components/Product"
import { Foodstype } from "@/pages"
import axios from "axios"

export type UniformType = {
    _id: string;
    images: string[];
    name: string;
    stock: number;
    type: {stock: number, size: string}[];
    price: number;
    description: string;
    slug: string;
}

export const getUniform = async (id: string) => {
    const res = axios.get(`http://localhost:4000/uniforms/${id}`)
    return res || {} as UniformType
  }

  export const getAllUniform = async () => {
    const res = axios.get(`http://localhost:4000/uniforms`)
    return res || [] as UniformType[]
  }