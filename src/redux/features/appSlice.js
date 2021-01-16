import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "loader",
  initialState: {
    loading: false,
  },
  reducers: {
    showLoader: (state = {}) => {
      state.loading = true;
    },

    hideLoader: (state = {}) => {
      state.loading = false;
    },
  },
});

export const { showLoader, hideLoader } = appSlice.actions;

export default appSlice.reducer;
