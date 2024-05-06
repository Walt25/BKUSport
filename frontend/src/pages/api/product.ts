import axios from "axios";
import { graphql } from "../../helpers/graphql";
import { ProductType } from "../../components/Product";
import { NextApiRequest, NextApiResponse } from "next";
import { productData } from "@/data";

export const getProducts  = async (): Promise<ProductType[]> =>  {
    const res = productData
    return res || [];

}

export const getProduct = async (id: string) => {
  const res = axios.get(`http://localhost:4000/equipments/${id}`)
  return res || {} as ProductType
}

export const getAllEquipment = async () => {
  const res = await axios.get("http://localhost:4000/equipments")
  return res || []
}
