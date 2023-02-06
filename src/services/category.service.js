import { AxiosInstance } from "./base.service";

export async function getCategories() {
  try {
    const response = await AxiosInstance.get("/categories");
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function addCategory(category) {
  try {
    const response = await AxiosInstance.post("/admin/category", {
      name: category,
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateCategory(id, category) {
  try {
    const response = await AxiosInstance.put(`/admin/category/${id}`, {
      name: category,
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteCategory(id) {
  try {
    const response = await AxiosInstance.delete(`/admin/category/${id}`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}
