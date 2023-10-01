import { createSlice } from "@reduxjs/toolkit";

const spotifySlice = createSlice({
  name: "spotify",
  initialState: {
    accessToken: null,
    newReleaseAlbums: null,
    severalArtist: null,
    albumDetails: null,
    albumTracks: null,
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
    addAlbumDetails: (state, action) => {
      state.albumDetails = action.payload;
    },
    addAlbumTracks: (state, action) => {
      state.albumTracks = action.payload;
    },
  },
});

export const { addAccessToken,addNewReleaseAlbum ,addSeveralArtist, addAlbumDetails,addAlbumTracks} = spotifySlice.actions;

export default spotifySlice.reducer;
