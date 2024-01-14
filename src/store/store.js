import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice.js";
import categoriesReducer from "./categories/categories.slice.js";
import goodsReducer from "./goods/goods.slice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    goods: goodsReducer,
  },
});
