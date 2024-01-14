import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL_PRODUCTS } from "../../consts.js";

export const fetchGoods = createAsyncThunk("goods/fetchGoods", async (arg, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.accessToken;

  const response = await fetch(API_URL_PRODUCTS, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Не удалось получить список товаров");
  }

  return await response.json();
});

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoods.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchGoods.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default goodsSlice.reducer;
