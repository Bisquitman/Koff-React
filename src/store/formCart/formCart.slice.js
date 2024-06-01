import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../consts.js";

export const submitCartForm = createAsyncThunk(
  "formCart/submitCartForm",
  async (formData, { getState, rejectedWithValue }) => {
    const state = getState();
    const token = state.auth.accessToken;

    try {
      const response = await fetch(`${API_URL}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Ощибка при отправке данных заказа`);
      }

      const responseData = await response.json();
      return responseData.orderId;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

const initialState = {
  loading: false,
  error: null,
  success: false,
  orderId: null,
};

const formCartSlice = createSlice({
  name: "formCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitCartForm.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(submitCartForm.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.orderId = action.payload;
      })
      .addCase(submitCartForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export default formCartSlice.reducer;