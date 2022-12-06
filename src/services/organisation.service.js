import { GetAuthorizationClient } from "./base.service";

export async function getOrganisationInfo() {
    try {
        const response = await GetAuthorizationClient.get('/org-info');
        return response.data;
    } catch (error) {
        return error;
    }
}

export async function updateOrganisationInfo(formData) {
    try {
        const response = await GetAuthorizationClient.put('/admin/org-info', formData);
        return response;
    } catch (error) {
        return error;
    }
}