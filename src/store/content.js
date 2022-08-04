import axios from '../plugins/axios/axios'
import { createSlice } from "@reduxjs/toolkit";

const listContent = { banner: [], list: [], best: [], selected: {}, total_items: 0, page: 1, total_page: 1 };

const listSlice = createSlice({
  name: "contentSlice",
  initialState: listContent,

  reducers: {
    loadData(state) {

    },

    loadMore(state, action) {

    },

    changeBanner(state, action) {
      state.banner = action.payload
    },

    changeList(state, action) {
      state.list = action.payload
    },

    changeBest(state, action) {
      state.best = action.payload
    },

    changeSelected(state, action) {
      state.selected = action.payload
    },

  },
});

export const { loadData, loadMore, changeBanner, changeList, changeBest, changeSelected } =
  listSlice.actions;

export default listSlice.reducer;
