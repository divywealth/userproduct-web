import { BASIC_HTTP } from "./axiosclient";


export const getProducts = async () => {
    try {
        const response = await BASIC_HTTP.get('v1/products')
        return response.data;
    } catch (error) {
        throw error.response.data.message
    }
}