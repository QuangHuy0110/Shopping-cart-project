import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
  name: "api",
  initialState: {
    apiList: [],
  },
  reducers: {
    addApiToStorage: (state, action) => {
      state.apiList = action.payload;
    },
  },
});

export const apiActions = apiSlice.actions;

export default apiSlice;
