
import { createSlice } from "@reduxjs/toolkit";

const initialStateForCounter = { counter: 1 };

const counterRTKSlice = createSlice({
  name: "counterRTK",
  initialState: initialStateForCounter,

  reducers: {
    increment(state) {

      state.counter += 1;
    },

    decrement(state) {
      state.counter -= 1;
    },

    reset(state) {
      state.counter = 0;
    },

    incrementSpec(state, action) {
      state.counter += action.payload;
    },

    decrementSpec(state, action) {
      state.counter -= action.payload;
    },
  },
});

// --- ACTION ---
export const { increment, decrement, reset, incrementSpec, decrementSpec } =
  counterRTKSlice.actions;

export const selectCounter = (state) => state.counterRTK.counter;

export default counterRTKSlice.reducer;