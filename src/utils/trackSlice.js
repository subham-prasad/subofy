import { createSlice } from "@reduxjs/toolkit";

const trackSlice = createSlice({
  name: "track",
  initialState: {
    trackDetails: null,
  },
  reducers: {
    addTrackDetails: (state, action) => {
      state.trackDetails = action.payload;
    },
  },
});

export const { addTrackDetails } = trackSlice.actions;

export default trackSlice.reducer;
