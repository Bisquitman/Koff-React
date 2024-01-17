import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice.js";
import categoriesReducer from "./categories/categories.slice.js";
import productsReducer from "./products/products.slice.js";
import productReducer from "./product/product.slice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    products: productsReducer,
    product: productReducer,
  },
});
