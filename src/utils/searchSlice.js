import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchResults: {},
    searchText: "",
  },
  reducers: {
    addSearchResults: (state, action) => {
      state.searchResults = { ...state.searchResults, ...action.payload };
    },

    addSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    clearSearchResults: (state) => {
      const searchResultsArray = Object.entries(state.searchResults);

      if (searchResultsArray.length > 10) {
        searchResultsArray.splice(10,1);
      }

      state.searchResults = Object.fromEntries(searchResultsArray);
      // state.searchText = "";
    },
  },
});

export const { addSearchResults, clearSearchResults, addSearchText } =
  searchSlice.actions;
export default searchSlice.reducer;
