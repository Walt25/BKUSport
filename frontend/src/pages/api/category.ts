import { NextApiRequest, NextApiResponse } from "next";
import { graphql } from "../../helpers/graphql";
import { getProductsByCategory } from "./product";
import { CategoryType } from "../../components/Catalog";

export const getCategories = async (): Promise<CategoryType[]> => {
    const query = `
        query getProductCategories {
            productCategories {
                nodes {
                    productCategoryId
                    name
                    slug
                    image {
                        mediaItemUrl
                    }
                }
            }
        }
    `

    const res = await graphql(query);
    return res.data?.productCategories?.nodes ?? [];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const categories = await getCategories();

        for (const category of categories) {
            const products = await getProductsByCategory(category.productCategoryId);
            category.children = products;
        }

        return res.status(200).json(categories);
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}