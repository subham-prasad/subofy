import { createSlice } from "@reduxjs/toolkit";

const spotifySlice = createSlice({
  name: "spotify",
  initialState: {
    accessToken: null,
    newReleaseAlbums: null,
    severalArtist: null,
    albumDetails: null,
    albumTracks: null,
    spotifyURI : null,
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

    addSpotifyURI(state, action){
      state.spotifyURI = action.payload;
    }
  },
});

export const { addAccessToken,addNewReleaseAlbum ,addSeveralArtist, addAlbumDetails,addAlbumTracks, addSpotifyURI} = spotifySlice.actions;

export default spotifySlice.reducer;
