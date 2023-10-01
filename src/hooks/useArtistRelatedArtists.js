import React, { useEffect } from 'react'
import { addArtistRelatedArtists } from '../utils/artistSlice';
import { useDispatch, useSelector } from 'react-redux';

const useArtistRelatedArtists = (artistId) => {
    const accessToken = useSelector((store) => store.spotify.accessToken);


    const dispatch = useDispatch();
  
  
    useEffect(() => {
      getArtistRelatedArtist();
  
  
    }, [accessToken,artistId]);
  
    const getArtistRelatedArtist = async () => {
      const data = await fetch(
        "https://api.spotify.com/v1/artists/" +
          artistId +
          "/related-artists",
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
          method: "GET",
        }
      );
      const json = await data.json();
    //   const jsonObject = Object.assign({}, json);
      dispatch(addArtistRelatedArtists(json));
      
    };
  };


export default useArtistRelatedArtists