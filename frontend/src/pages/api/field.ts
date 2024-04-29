import axios from "axios";
import { FieldsType } from "..";
import { NextApiRequest, NextApiResponse } from "next";

export const getFieldById = async (id: string) => {
  
    const res = await axios.get(`http://localhost:4000/fields/${id}`)

    return res
}

export const getAllFields = async () => {
    const res = await axios.get("http://localhost:4000/fields")
    if (res.data.result.length > 0) {
        res.data.result.forEach((item: FieldsType) => {
            const slug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
            item.slug = slug;
        });
    }
    return res.data.result || []
}
