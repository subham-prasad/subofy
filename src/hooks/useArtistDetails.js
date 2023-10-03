import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addArtistDetails, clearArtistData } from '../utils/artistSlice';
import { useParams } from 'react-router-dom';

const useArtistDetails = (artistId) => {
    const accessToken = useSelector((store) => store.spotify.accessToken);


    const dispatch = useDispatch();

  
    useEffect(() => {

      accessToken && getArtistDetails();
    }, [accessToken, artistId]);
  
    const getArtistDetails = async () => {
      const data = await fetch("https://api.spotify.com/v1/artists/" + artistId, {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
        method: "GET",
      });
      const json = await data.json();
      dispatch(addArtistDetails(json))
      // console.log(json)
    };
}

export default useArtistDetails