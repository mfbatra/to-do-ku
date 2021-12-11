import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoslice";

export default configureStore({
  reducer: {
    todo: todoSlice,
  },
  // devTools: false,
});
