import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter.js";
import aboutFormSlice from "./about.js";
import contactSlice from "./about.js";

export const store = configureStore({
  reducer: {
    counterRTK: counterSlice,
    aboutRTK: aboutFormSlice,
    contactRTK: contactSlice,
  },
});