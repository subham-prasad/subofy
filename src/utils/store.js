import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import spotifySlice from "./spotifySlice";


const store = configureStore({
  reducer: {
    user : userSlice,
    spotify: spotifySlice
  },
});

export default store;
