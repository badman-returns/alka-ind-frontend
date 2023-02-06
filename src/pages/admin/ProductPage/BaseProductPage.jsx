import React, { useEffect } from "react";
import {
  fetchProducts,
  fetchProductById,
  productSelector,
} from "../../../store/slices/product";
import ProductPage from "./ProductPage";
import { useDispatch, useSelector } from "react-redux";

function BaseProductPage() {
  const dispatch = useDispatch();
  const { productList } = useSelector(productSelector);

  const getProducts = () => {
    dispatch(fetchProducts(1));
  };

  useEffect(() => {
    getProducts();
  }, []);
  return <ProductPage products={productList} />;
}

export default BaseProductPage;
