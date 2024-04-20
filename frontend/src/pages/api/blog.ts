import { NextApiRequest, NextApiResponse } from "next";
import { graphql } from "../../helpers/graphql";

export const getBlogs = async () => {
    const query = `
    query getBlogs {
        posts {
            nodes {
                author {
                    node {
                        firstName
                        lastName
                    }
                }
                date
                title
                slug
                featuredImage {
                    node {
                        mediaItemUrl
                    }
                }
            }
        }
    }
    `;

    const res = await graphql(query);
    return res.data?.posts?.nodes ?? [];
}

export const getBlog = async (slug: string) => {
    const query = `
    query NewQuery {
        post(id: "${slug}", idType: URI) {
            author {
                node {
                    firstName
                    lastName
                }
            }
            date
            title
            content
            featuredImage {
                node {
                    mediaItemUrl
                }
            }
        }
    }
    `;

    const res = await graphql(query);

    return res.data?.post;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
}