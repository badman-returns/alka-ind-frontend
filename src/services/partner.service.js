import { AxiosInstance } from './base.service';

export async function getPartners(){
    try {
        const response = await AxiosInstance.get('/partners');
        return response;
    } catch (error) {
        throw new Error(error);
    }
}

export async function insertPartner(payload){
    try {
        const response = await AxiosInstance.post('/admin/partner', payload);
        return response;
    } catch (error) {
        throw new Error(error);
    }
}

export async function updatePartner(id, payload){
    try {
        const response = await AxiosInstance.put(`/admin/partner/${id}`, payload);
        return response;
    } catch (error) {
        throw new Error(error);
    }
}

export async function deletePartner(id){
    try {
        const response = await AxiosInstance.delete(`/admin/partner/${id}`);
        return response;
    } catch (error) {
        throw new Error(error);
    }
}