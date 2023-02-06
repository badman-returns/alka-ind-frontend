import { createSlice } from '@reduxjs/toolkit';
import { getAbout, postAbout } from '../../services/about.service';

const initialState = {
    about: null,
    loading: false,
    error: false,
};

const aboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {
        storeAbout: (state, { payload }) => {
            state.about = payload;
        },
    }
});

// Action
export const { storeAbout } = aboutSlice.actions;

// Selector
export const aboutSelector = state => state.about || {};

// Reducer
export default aboutSlice.reducer;

// Async thunk action
export function fetchAbout() {
    return async dispatch => {
        try {
            const response = await getAbout();
            const about = response.ResponseData;
            dispatch(storeAbout(about));
            // dispatch(dispatchLoader(false));
        } catch (error) {
            throw new Error(error);
        }
    }
}

export function insertAbout(payload) {
    return async dispatch => {
        try {
            const response = await postAbout(payload);
            let status = response.status;
            let message = response.data.ResponseMessage;
            dispatch(fetchAbout());
            return {message, status};
        } catch (error) {
            throw new Error(error);
        }
    }
}