import { createSlice } from '@reduxjs/toolkit';
import { getOrganisationInfo, updateOrganisationInfo } from '../../services/organisation.service';

const initialState = {
    orgInfo: null,
    loading: false,
    error: false,
};

const organisationSlice = createSlice({
    name: 'organisation',
    initialState,
    reducers: {
        storeOrganisation: (state, { payload }) => {
            state.orgInfo = payload;
        }
    }
});

//Actions
export const { storeOrganisation } = organisationSlice.actions;

// Selector
export const organisationSelector = state => state.organisation || {};

// Reducer
export default organisationSlice.reducer;

// Async thunk action
export function fetchOrganisationInfo(){
    return async dispatch => {
        try{
            const response = await getOrganisationInfo();
            const organisationInfo = response.ResponseData;
            dispatch(storeOrganisation(organisationInfo));
        } catch(error){
            throw new Error(error);
        }
    }
}

export function postOrganisationInfo(payload){
    return async dispatch => {
        try {
            const response = await updateOrganisationInfo(payload);
            if(response.status === 200){
                dispatch(fetchOrganisationInfo());
                return response.data.ResponseMessage;
            } else {
                return response;
            }
        } catch (error) {
            throw new Error(error);
        }
    }
}