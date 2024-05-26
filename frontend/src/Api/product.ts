import { ProductType } from "@/components/Product"
import { AttributeType } from "@/pages/admin/fieldlist/[...slug]"
import { getJwtFromCookie } from "@/ultils"
import axios from "axios"

export type AddProductType = {
    images:{data: string[]},
    name: string,
    type: {stock: number, size: string}[],
    regularPrice: string,
    discountPrice: string,
    description: string,
    slug: string,
    attribute: AttributeType[],
    category: {title: string, tag: string},
    sport: {title: string, tag: string}[]
}

export const upload = async (files: FormData) => {
    
    const res = await axios.post(`http://localhost:4000/equipments/upload`,
        files,
        {
            headers: { "Content-Type": "multipart/form-data" },
        }
    )
    return res
}

export const addProduct = async (data: AddProductType) => {
    const {
        images, 
        name, 
        type, 
        regularPrice, 
        discountPrice, 
        description,
        slug,
        attribute,
        category,
        sport
    } = data
    const res = await axios.post('http://localhost:4000/equipments', {
        images, 
        name, 
        type, 
        regularPrice, 
        discountPrice, 
        description,
        slug,
        attribute,
        category,
        sport
    })

    return res
}


export const getProduct = async (id: string) => {
    const res = axios.get(`http://localhost:4000/equipments/${id}`)
    return res || {} as ProductType
  }

export const updateProductById = async (data: AddProductType, id: string) => {

    if (getJwtFromCookie() === null) return {status: "error", message: "You have no permission"};

    const {
        images, 
        name, 
        type, 
        regularPrice, 
        discountPrice, 
        description,
        slug,
        attribute,
        category,
    } = data

    const res = await axios.put(`http://localhost:4000/equipments/${id}`, {
        id,
        images, 
        name, 
        type, 
        regularPrice, 
        discountPrice, 
        description,
        slug,
        attribute,
        category,
    }, 
        {headers: {Authorization: `${getJwtFromCookie()}`}}
    )

    return {status: "success", data: res};
}