import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading : false,
};

const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        dispatchLoader:(state, {payload}) => {
            state.loading = payload;
        },
    },
});

// Action
export const {dispatchLoader} = loaderSlice.actions;

// Selector
export const loaderSelector = state => state.loader || {};

// Reducer
export default loaderSlice.reducer;