import { createSlice } from "@reduxjs/toolkit";

const playlistSlice = createSlice({
  name: "playlist",
  initialState: {
    featuredPlaylist: null,
    playlistDetails: null,
    playlistItems: null,
  },

  reducers: {
    addfeaturedPlaylist: (state, action) => {
      state.featuredPlaylist = action.payload;
    },
    addPlaylistDetails: (state, action) =>{
      state.playlistDetails = action.payload;
    },
    addPlaylistItems: (state, action) =>{
      state.playlistItems = action.payload;
    },
  },
});

export const { addfeaturedPlaylist, addPlaylistDetails,addPlaylistItems } = playlistSlice.actions;

export default playlistSlice.reducer;
