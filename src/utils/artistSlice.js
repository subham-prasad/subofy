import { createSlice } from "@reduxjs/toolkit";

const artistSlice = createSlice({

    name: "artist",
    initialState: {
        artistDetails: null,
        artistRelatedArtists: null,
        artistAlbums: null,
        artistTopTracks: null,
    },

    reducers: {
        addArtistDetails: (state, action) =>{
            state.artistDetails = action.payload
        },
        addArtistAlbums: (state, action) =>{
            state.artistAlbums = action.payload
        },
        addArtistTopTracks: (state, action) =>{
            state.artistTopTracks = action.payload
        },
        addArtistRelatedArtists: (state, action) =>{
            state.artistRelatedArtists = action.payload
        },
        clearArtistData: (state) => {
            state.artistDetails = null;
            state.artistAlbums = null;
            state.artistTopTracks = null;
          },

    }
})

export const {addArtistDetails,addArtistAlbums, addArtistTopTracks,clearArtistData,addArtistRelatedArtists} = artistSlice.actions
export default artistSlice.reducer