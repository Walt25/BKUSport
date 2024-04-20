import axios from "axios";

type GraphQLResponse = {
    data?: any;
    extensions?: any;
    error?: any;
}

export const graphql = async (query: string): Promise<GraphQLResponse> => { 
    const graphqlEndpoint = process.env.WORDPRESS_GRAPHQL;

    try {
        const response = await axios({
            url: graphqlEndpoint,
            method: 'post',
            data: { query } 
        });
        return response.data;
    }
    catch (e: any) {
        console.error(e);
        return {
            error: e.message
        };
    }
}