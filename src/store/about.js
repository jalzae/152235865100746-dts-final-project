import { createSlice } from "@reduxjs/toolkit";

const aboutForm = { about: { title: '', desc: '' } };


const aboutFormSlice = createSlice({
  name: "aboutFormSlice",
  initialState: aboutForm,

  reducers: {
    changeAboutValue(state, action) {
      state.about += action.payload;
    },

  },
});


// --- ACTION ---
export const { changeAboutValue } =
  aboutFormSlice.actions;

export default aboutFormSlice.reducer;