import { createSlice } from "@reduxjs/toolkit";

const spotifySlice = createSlice({
  name: "spotify",
  initialState: {
    accessToken: null,
    newReleaseAlbums: null,
    severalArtist: null,
  },
  reducers: {
    addAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    addNewReleaseAlbum: (state, action) => {
      state.newReleaseAlbums = action.payload;
    },
    addSeveralArtist: (state, action) => {
      state.severalArtist = action.payload;
    },
  },
});

export const { addAccessToken,addNewReleaseAlbum ,addSeveralArtist} = spotifySlice.actions;

export default spotifySlice.reducer;
