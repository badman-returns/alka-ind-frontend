import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getProductsById } from "../../services/product.service";

const initialState = {
  productList: [],
  product: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    storeProductList: (state, { payload }) => {
      state.productList = payload;
    },
    storeProduct: (state, { payload }) => {
      state.product = payload;
    },
  },
});

export const { storeProduct, storeProductList } = productSlice.actions;

export const productSelector = (state) => state.product;

export default productSlice.reducer;

export function fetchProducts(page) {
  return async (dispatch) => {
    try {
      const response = await getProducts(page);
      const productList = response.ResponseData;
      dispatch(storeProductList(productList));
    } catch (error) {
      throw new Error(error);
    }
  };
}

export function fetchProductById(id) {
  return async (dispatch) => {
    try {
      const response = await getProductsById();
      const product = response.ResponseData;
      dispatch(storeProduct(product));
    } catch (error) {
      throw new Error(error);
    }
  };
}
