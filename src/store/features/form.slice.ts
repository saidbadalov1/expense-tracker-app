import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    editingId: null,
  },
  reducers: {
    setEditingId: (state, action) => {
      state.editingId = action.payload;
    },
  },
});

export const { setEditingId } = formSlice.actions;

export default formSlice.reducer;
