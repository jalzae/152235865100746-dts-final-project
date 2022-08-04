import { createSlice } from "@reduxjs/toolkit";
import axios from '../plugins/axios/axios'

const userForm = { isLogin: false, user: {} };

const userSlice = createSlice({
  name: "userSlice",
  initialState: userForm,

  reducers: {

    changeUser(state, action) {
      state.user = action.payload
    },
    changeStatus(state, action) {
      state.isLogin = action.payload
    },

  },
});


// --- ACTION ---
export const { changeUser, changeStatus } =
  userSlice.actions;


export default userSlice.reducer;