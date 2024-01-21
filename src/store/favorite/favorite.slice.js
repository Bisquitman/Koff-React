import { createSlice } from "@reduxjs/toolkit";
import { FAVORITE_LS_KEY } from "../../consts.js";

const initialState = {
  favoriteList: JSON.parse(localStorage.getItem(FAVORITE_LS_KEY) || "[]"),
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteList.push(action.payload);
      localStorage.setItem(FAVORITE_LS_KEY, JSON.stringify(state.favoriteList));
    },
    removeFavorite: (state, action) => {
      state.favoriteList = state.favoriteList.filter((id) => id !== action.payload);
      localStorage.setItem(FAVORITE_LS_KEY, JSON.stringify(state.favoriteList));
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
