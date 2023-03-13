import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  search: "",
  filterTags: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    searchItem(state, action) {
      state.search = action.payload;
    },
    selected(state, action) {
      state.filterTags.push(action.payload);
    },

    deleted(state, action) {
      const removedTagIndex = state.filterTags.indexOf(action.payload);

      if (removedTagIndex !== -1) {
        state.filterTags.splice(removedTagIndex, 1);
      }
    },
  },
});
export const { deleted, selected, searchItem } = filterSlice.actions;
export default filterSlice.reducer;
