import { createSlice } from '@reduxjs/toolkit';
import { getCarousels, insertCarousel, deleteCarousel } from '../../services/carousel.service';

const initialState = {
    carousels: null,
};

const carouselSlice = createSlice({
    name: 'carousels',
    initialState,
    reducers: {
        storeCarousel: (state, {payload}) => {
            state.carousels = payload;
        }
    }
});

// Actions
export const { storeCarousel } = carouselSlice.actions;

// Selector
export const carouselSelector = state => state.carousel || {};

// Reducer
export default carouselSlice.reducer;

// Async thunk action
export function fetchCarousels(){
    return async dispatch => {
        try {
            const response = await getCarousels();
            const carousels = response.ResponseData;
            dispatch(storeCarousel(carousels));
        } catch (error) {
            throw new Error(error);
        }
    }
}


export function addCarousel(payload){
    return async dispatch => {
        try {
            const response = await insertCarousel(payload);
            if(response.status === 200){
                dispatch(fetchCarousels());
                return response.data.ResponseMessage;
            } else {
                return response;
            }
        } catch (error) {
            throw new Error(error);
        }
    }
}

export function deleteCarouselById(id){
    return async dispatch => {
        try {
            const response = await deleteCarousel(id);
            if(response.status === 200){
                dispatch(fetchCarousels());
                return response.data.ResponseMessage;
            } else {
                return response;
            }
        } catch (error) {
            throw new Error(error);
        }
    }
}
