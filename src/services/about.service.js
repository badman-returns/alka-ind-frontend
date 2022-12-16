import { AxiosInstance } from "./base.service";

export async function getAbout() {
    try {
        const response = await AxiosInstance.get('/about');
        return response.data;
    } catch (error) {
        return error;
    }
}

export async function postAbout(payload) {
    try {
        const response = await AxiosInstance.put('/admin/about', { content: payload });
        return response;
    } catch (error) {
        return error;
    }
}