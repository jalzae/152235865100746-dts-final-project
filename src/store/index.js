import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter.js";
import aboutFormSlice from "./about.js";
import contactSlice from "./about.js";
import contentSlice from "./content.js";
import userSlice from "./user.js";

export const store = configureStore({
  reducer: {
    counterRTK: counterSlice,
    aboutRTK: aboutFormSlice,
    contactRTK: contactSlice,
    contentRTK: contentSlice,
    userRTK: userSlice,
  },
});