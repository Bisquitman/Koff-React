import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice.js";
import categoriesReducer from "./categories/categories.slice.js";
import productsReducer from "./products/products.slice.js";
import productReducer from "./product/product.slice.js";
import favoriteReducer from "./favorite/favorite.slice.js";
import cartReducer from "./cart/cart.slice.js";
import { apiTokenErrorMiddleware } from "./middleware.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    products: productsReducer,
    product: productReducer,
    favorite: favoriteReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiTokenErrorMiddleware),
});
