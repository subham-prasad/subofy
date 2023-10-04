import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import spotifySlice from "./spotifySlice";
import artistSlice from "./artistSlice";
import trackSlice from "./trackSlice";
import playlistSlice from "./playlistSlice";
import searchSlice from "./searchSlice";
import menuSlice from "./menuSlice";


const store = configureStore({
  reducer: {
    user : userSlice,
    menu: menuSlice,
    spotify: spotifySlice,
    artist: artistSlice,
    track: trackSlice,
    playlist: playlistSlice,
    search: searchSlice,
  },
});

export default store;
