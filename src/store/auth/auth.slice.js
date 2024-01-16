import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ACCESS_TOKEN_KEY, API_URL } from "../../consts.js";

export const fetchAccessToken = createAsyncThunk("auth/fetchAccessToken", async () => {
  const response = await fetch(`${API_URL}/api/users/accessKey`);

  if (!response.ok) {
    throw new Error("Не удалось получить токен доступа");
  }

  const data = await response.json();
  return data.accessKey;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: localStorage.getItem(ACCESS_TOKEN_KEY) || null,
    loading: false,
    error: null,
  },
  reducers: {
    removeToken(state) {
      state.accessToken = null;
      localStorage.removeItem(ACCESS_TOKEN_KEY);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAccessToken.fulfilled, (state, action) => {
        state.accessToken = action.payload;
        localStorage.setItem(ACCESS_TOKEN_KEY, action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAccessToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { removeToken } = authSlice.actions;
export default authSlice.reducer;
