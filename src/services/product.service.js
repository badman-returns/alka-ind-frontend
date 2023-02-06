import { AxiosInstance } from "./base.service";

export async function getProducts(page) {
  try {
    const response = await AxiosInstance.get(`/products?page=${page}`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getProductsById(id) {
  try {
    const response = await AxiosInstance.get(`/product/${id}`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}
