import { createSlice } from "@reduxjs/toolkit";

export const expencesSlice = createSlice({
  name: "expences",
  initialState: {
    filter: "all",
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = expencesSlice.actions;

export default expencesSlice.reducer;
