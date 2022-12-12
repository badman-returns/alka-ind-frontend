import { GetAuthorizationClient } from "./base.service";

export async function getCarousels(){
    try {
        const response = await GetAuthorizationClient.get('/banners');
        return response.data;
    } catch (error) {
        return error;
    }
}

export async function insertCarousel(carousel) {
    try {
        const response = await GetAuthorizationClient.post('/admin/banner', carousel);
        return response;
    } catch (error) {
        return error;
    }
}