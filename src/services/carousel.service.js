import { AxiosInstance } from "./base.service";

export async function getCarousels(){
    try {
        const response = await AxiosInstance.get('/banners');
        return response.data;
    } catch (error) {
        return error;
    }
}

export async function insertCarousel(carousel) {
    try {
        const response = await AxiosInstance.post('/admin/banner', carousel);
        return response;
    } catch (error) {
        return error;
    }
}

export async function deleteCarousel(id){
    try {
        const response = await AxiosInstance.delete(`/admin/banner/${id}`,);
        return response;
    } catch (error) {
        return error;
    }
}