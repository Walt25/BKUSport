import { AttributeType } from "@/pages/admin/fieldlist/[...slug]"
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
    category: string[],
    tag: string[]
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
        tag} = data
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
        tag
    })

    return res
}