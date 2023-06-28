import { BASIC_HTTP } from "./axiosclient";

export const registerApi = async (data) => {
    try {
        const response = await BASIC_HTTP.post('v1/user', data);
        return response.data;
    } catch (error) {
        throw error.response.data.message
    }
}


export const loginApi = async (data) => {
    try {
        let response = await BASIC_HTTP.post('v1/user/login', data);
        return response.data;
    } catch (error) {
        throw error.response.data.message;
    }
    
}