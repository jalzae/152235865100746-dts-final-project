import axios from '../plugins/axios/axios'
import { createSlice } from "@reduxjs/toolkit";

const listContent = { banner: [], list: [], best: [], selected: {}, total_items: 0, page: 1, total_page: 1 };

const listSlice = createSlice({
  name: "contentSlice",
  initialState: listContent,

  reducers: {
    async loadData(state) {
      const response = await axios.post('/home/event_data', {}, {});
      state.banner = response.data
      state.list = response.data
      state.best = response.data
    },

    async loadMore(state, action) {

    }

  },
});

export const { loadData, loadMore } =
  listSlice.actions;

export default listSlice.reducer;
