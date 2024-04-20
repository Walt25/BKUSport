import axios from "axios";
import { graphql } from "../../helpers/graphql";
import { ProductType } from "../../components/Product";
import { NextApiRequest, NextApiResponse } from "next";

export const getProducts  = async (): Promise<ProductType[]> =>  {
    const query = `
        query getProducts {
            products {
                nodes {
                  id
                  name
                  sku
                  shortDescription
                  slug
                  ... on SimpleProduct {
                    id
                    name
                    regularPrice
                    salePrice
                    galleryImages {
                      nodes {
                        mediaItemUrl
                      }
                    }
                    attributes {
                      nodes {
                        attributeId
                        label
                        options
                        visible
                      }
                    }
                  }
                }
              }
        }
    `;

    const res = await graphql(query);
    return res.data?.products?.nodes ?? [];

}

export const getProductsByCategory  = async (id: string, limit = 3): Promise<ProductType[]> =>  {
    const query = `
        query getProducts {
            products(where: {categoryId: ${id}}, last: ${limit}) {
                nodes {
                  id
                  name
                  sku
                  shortDescription
                  slug
                  ... on SimpleProduct {
                    id
                    name
                    regularPrice
                    salePrice
                    galleryImages {
                      nodes {
                        mediaItemUrl
                      }
                    }
                    attributes {
                      nodes {
                        attributeId
                        label
                        options
                        visible
                      }
                    }
                  }
                }
              }
        }
    `;

    const res = await graphql(query);
    return res.data?.products?.nodes ?? [];

}

export const getProduct = async (id: string): Promise<ProductType> => {
    const query = `
        query getProduct {
            product(id: "${id}") {
                id
                name
                sku
                description
                shortDescription
                ... on SimpleProduct {
                    id
                    name
                    regularPrice
                    salePrice
                    galleryImages {
                        nodes {
                            mediaItemUrl
                        }
                    }
                }
                productCategories {
                    edges {
                        node {
                            id
                            name
                        }
                    }
                }
                attributes {
                    nodes {
                        attributeId
                        label
                        options
                        visible
                    }
                }
            }
        }
    `;

    const res = await graphql(query);

    return res.data?.product;
}

export const getProductsFiltered = async (categories: number[] | null, maxPrice: number, minPrice: number): Promise<ProductType[]> => {

  const query = `
      query getProductsFiltered($categoryIdIn: [Int] = ${categories ? `[${categories}]` : `[]`}) {
        products(where: {categoryIdIn: $categoryIdIn, maxPrice: ${maxPrice}, minPrice: ${minPrice}}) {
          pageInfo {
            hasNextPage
            endCursor
          }
          nodes {
            id
            name
            sku
            shortDescription
            slug
            ... on SimpleProduct {
              id
              name
              regularPrice
              salePrice
              galleryImages {
                nodes {
                  mediaItemUrl
                }
              }
              attributes {
                nodes {
                  attributeId
                  label
                  options
                  visible
                }
              }
            }
          }
        }
      }
  `;

  console.log(query)

  const res = await graphql(query);

  return res.data?.products?.nodes || [];
} 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
      
      const {categories, price} = req.query
      
      if (typeof categories === 'string' && typeof price === 'string') {
        const cate = categories.length !== 0 ? categories.split(',').map(Number) : null
        const pri = price.split(',').map(Number)
        const products = await getProductsFiltered(cate, pri[1], pri[0])
        return res.status(200).json(products);
      }

      return res.status(200).json({data: [] });
      
      
  } else {
      res.status(405).json({ message: "Method not allowed" });
  }
}