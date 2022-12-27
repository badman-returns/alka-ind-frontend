import { createSlice } from "@reduxjs/toolkit";
import { deletePartner, getPartners, insertPartner, updatePartner } from "../../services/partner.service";

const initialState = {
    partners: [],
};

export const partnerSlice = createSlice({
    name: 'partners',
    initialState,
    reducers: {
        storePartners:((state, {payload} ) => {
            state.partners = payload;
        }), 
    },
});

export const {storePartners} = partnerSlice.actions;
export const partnerSelector = state => state.partner || {};
export default partnerSlice.reducer;

export function fetchPartners(){
    return async dispatch => {
        try {
            const response = await getPartners();
            if(response.status === 200){
                const partners = response.data.ResponseData;
                dispatch(storePartners(partners))
            }
        } catch (error) {
            throw new Error(error);
        }
    }
}

export function addPartner(payload){
    return async dispatch => {
        try {
            const response = await insertPartner(payload);
            if(response.status === 200){
                dispatch(fetchPartners());
                return response.data.ResponseMessage;
            }
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export function updatePartnerDetails(id, payload){
    return async dispatch => {
        try {
            const response = await updatePartner(id, payload);
            if(response.status === 200){
                dispatch(fetchPartners());
                return response.data.ResponseMessage;
            }
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export function removePartner(id){
    return async dispatch => {
        try {
            const response = await deletePartner(id);
            if(response.status === 200){
                dispatch(fetchPartners());
                return response.data.ResponseMessage;
            }
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }
}