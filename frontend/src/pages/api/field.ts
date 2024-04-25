import axios from "axios";
import { FieldsType } from "..";

export const getFieldById = async (id: string) => {
  
    const res = await axios.get(`http://localhost:4000/fields/${id}`)

    return res
}