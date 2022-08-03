import { createSlice } from "@reduxjs/toolkit";

const aboutForm = { about: { title: '', desc: '' } };

const contactSlice = createSlice({
  name: "contactSlice",
  initialState: aboutForm,

  reducers: {
    changeAboutValue(state, action) {
      state.about = action.payload;
    },

  },
});

export const { changeAboutValue } =
  contactSlice.actions;

export const select = (state) => state.aboutForm.about;

export default contactSlice.reducer;