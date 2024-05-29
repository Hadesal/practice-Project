import { configureStore } from "@reduxjs/toolkit";
import menuPageStylesReducer from "./slices/designes/menuPageStylesSlice";

export default configureStore({
  reducer: { menuPageStyles: menuPageStylesReducer },
});
