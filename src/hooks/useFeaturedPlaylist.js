import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addfeaturedPlaylist} from "../utils/playlistSlice"

const useFeaturedPlaylist = () => {

    const dispatch = useDispatch()
    const accessToken = useSelector(store => store.spotify.accessToken)
    
    useEffect(()=>{
        accessToken && getPlaylist()
      },[])
      const getPlaylist = async() =>{

        const data = await fetch("https://api.spotify.com/v1/browse/featured-playlists?country=IN", {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
          method: "GET",
        });
        const json = await data.json();
        dispatch(addfeaturedPlaylist(json))
             }

}

export default useFeaturedPlaylist