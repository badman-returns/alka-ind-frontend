import { AxiosInstance } from "./base.service";

export async function getOrganisationInfo() {
    try {
        const response = await AxiosInstance.get('/org-info');
        return response.data;
    } catch (error) {
        return error;
    }
}

export async function updateOrganisationInfo(formData) {
    try {
        const response = await AxiosInstance.put('/admin/org-info', formData);
        return response;
    } catch (error) {
        return error;
    }
}