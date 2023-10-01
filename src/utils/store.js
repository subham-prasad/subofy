import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import spotifySlice from "./spotifySlice";
import artistSlice from "./artistSlice";
import trackSlice from "./trackSlice";
import playlistSlice from "./playlistSlice";


const store = configureStore({
  reducer: {
    user : userSlice,
    spotify: spotifySlice,
    artist: artistSlice,
    track: trackSlice,
    playlist: playlistSlice,
  },
});

export default store;
