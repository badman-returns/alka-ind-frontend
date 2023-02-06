import { createSlice } from "@reduxjs/toolkit";
import {
  addCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../../services/category.service";

const initialState = {
  category: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    storeCategory: (state, { payload }) => {
      state.category = payload;
    },
  },
});

export const { storeCategory } = categorySlice.actions;

export const categorySelector = (state) => state.category || {};

export default categorySlice.reducer;

export function fetchCategory() {
  return async (dispatch) => {
    try {
      const response = await getCategories();
      const category = response.ResponseData;
      dispatch(storeCategory(category));
    } catch (error) {
      throw new Error(error);
    }
  };
}

export function insertCategory(category) {
  return async (dispatch) => {
    try {
      const response = await addCategory(category);
      dispatch(fetchCategory());
      return response.data.ResponseMessage;
    } catch (error) {
      throw new Error(error);
    }
  };
}

export function editCategory(id, category) {
  return async (dispatch) => {
    try {
      const response = await updateCategory(id, category);
      dispatch(fetchCategory());
      return response.data.ResponseMessage;
    } catch (error) {
      throw new Error(error);
    }
  };
}

export function removeCategory(id) {
  return async (dispatch) => {
    try {
      const response = await deleteCategory(id);
      dispatch(fetchCategory());
      return response.data.ResponseMessage;
    } catch (error) {
      throw new Error(error);
    }
  };
}
