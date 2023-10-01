import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addArtistAlbums, clearArtistData,  } from '../utils/artistSlice';
import { useParams } from 'react-router-dom';

const useArtistAlbums = (artistId) => {
    const accessToken = useSelector((store) => store.spotify.accessToken);
    const artistAlbums = useSelector((store) => store.artist.artistAlbums);

    const dispatch = useDispatch();
    const { artistId: currentArtistId } = useParams();
  
    useEffect(() => {
   
      accessToken && getArtistAlbums();
     
      
    }, [accessToken,artistId]);
  
    const getArtistAlbums = async () => {
      const data = await fetch("https://api.spotify.com/v1/artists/" + artistId + "/albums?limit=10", {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
        method: "GET",
      });
      const json = await data.json();
      dispatch(addArtistAlbums(json))
    };
}

export default useArtistAlbums