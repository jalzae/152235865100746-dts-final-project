import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter.js";

export const store = configureStore({
  reducer: {
    counterRTK: counterSlice,
  },
});