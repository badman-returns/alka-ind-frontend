import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  categorySelector,
  fetchCategory,
  insertCategory,
  editCategory,
  removeCategory,
} from "../../../store/slices/category";
import CategoryPage from "./CategoryPage";
import { toast } from "react-toastify";

function BaseCategoryPage() {
  const dispatch = useDispatch();
  const { category } = useSelector(categorySelector);

  function getCategories() {
    dispatch(fetchCategory());
  }

  const modifyCategoryData = async (id, name) => {
    const response = await dispatch(editCategory(id, name));
    toast.success(response);
  };

  const addCategory = async (name) => {
    const response = await dispatch(insertCategory(name));
    toast.success(response);
  };

  const deleteCategory = async (id) => {
    const response = await dispatch(removeCategory(id));
    toast.success(response);
  };

  const submitCategoryData = (id, name) => {
    if (id !== null && id !== undefined) {
      modifyCategoryData(id, name);
    } else {
      addCategory(name);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  console.log(category);
  return (
    <CategoryPage
      categories={category}
      submitCategoryData={submitCategoryData}
      deleteCategory={deleteCategory}
    />
  );
}

export default BaseCategoryPage;
