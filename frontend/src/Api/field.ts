import { FieldsType } from "@/pages"
import axios from "axios"

export const getAllFields = async () => {
    const res = axios.get(`http://localhost:4000/fields`)
    return res || [] as FieldsType[]
}