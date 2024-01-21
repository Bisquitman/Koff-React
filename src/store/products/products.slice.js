import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../consts.js";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (params, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.accessToken;
  const queryParams = new URLSearchParams();

  if (params) {
    for (const paramsKey in params) {
      if (Object.hasOwnProperty.call(params, paramsKey) && params[paramsKey]) {
        queryParams.append(paramsKey, params[paramsKey]);
      }
    }
  }
  const response = await fetch(`${API_URL}/api/products?${queryParams}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    if (response.status === 401) {
      return thunkAPI.rejectWithValue({
        status: response.status,
        error: "Не удалось получить список товаров",
      });
    }
    throw new Error("Не удалось получить список товаров");
  }

  return await response.json();
});

const initialState = {
  data: [],
  loading: false,
  error: null,
  pagination: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.pagination = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          state.data = action.payload;
          state.pagination = null;
        } else {
          state.data = action.payload.data;
          state.pagination = action.payload.pagination;
        }
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.pagination = null;
      });
  },
});

export default productsSlice.reducer;
