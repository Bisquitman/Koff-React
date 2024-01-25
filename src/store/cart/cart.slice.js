import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../consts.js";

export const fetchCart = createAsyncThunk("cart/fetchCart", async (_, { getState, rejectWithValue }) => {
  const state = getState();
  const token = state.auth.accessToken;

  try {
    const response = await fetch(`${API_URL}/api/cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Не удалось загрузить содержимое корзины");
    }

    return response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Update - PUT
// Remove - DELETE
// Add - POST

export const addProductToCart = createAsyncThunk(
  "cart/addProductToCart",
  async (productData, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.accessToken;

    try {
      const response = await fetch(`${API_URL}/api/cart/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error("Не удалось добавить товар в корзину");
      }

      return response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const removeProductFromCart = createAsyncThunk(
  "cart/removeProductFromCart",
  async (productData, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.accessToken;

    try {
      const response = await fetch(`${API_URL}/api/cart/products/${productData.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      });

      if (!response.ok) {
        throw new Error("Не удалось удалить товар из корзины");
      }

      return response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  products: [],
  totalPrice: 0,
  totalCount: 0,
  loadingFetch: false, // получение корзины
  loadingAdd: false, // добавление в корзину
  loadingUpdate: false, // изменение количества товара
  loadingRemove: false, // удаление из корзины
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loadingFetch = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.products = action.payload;
        state.totalCount = action.payload.totalCount;
        state.totalPrice = action.payload.totalPrice;
        state.loadingFetch = false;
        state.error = null;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loadingFetch = false;
        state.error = action.error.message;
      });
    builder
      .addCase(addProductToCart.pending, (state) => {
        state.loadingAdd = true;
        state.error = null;
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loadingAdd = false;
        state.error = null;
      })
      .addCase(addProductToCart.rejected, (state, action) => {
        state.loadingAdd = false;
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;
