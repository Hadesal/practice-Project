import { createSlice } from "@reduxjs/toolkit";

export const fileSlice = createSlice({
  name: "menuPageDesign",
  initialState: {},
  reducers: {
    setNewMenuDesign: (state, action) => {},
  },
});

export const { setNewMenuDesign } = fileSlice.actions;
export default fileSlice.reducer;
