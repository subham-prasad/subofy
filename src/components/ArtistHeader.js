import React from 'react'
import useArtistDetails from '../hooks/useArtistDetails';
import { useSelector } from 'react-redux';

const ArtistHeader = ({artistId}) => {
    useArtistDetails(artistId);
    const artistDetails = useSelector((store) => store.artist.artistDetails);

    if(!artistDetails) return null
    const { images, name, followers, geners } = artistDetails;

    
  return (
    <div className="flex w-full p-4">
        <img
          className="w-1/3 h-1/3 "
          alt="Artist"
          src={images?.[0]?.url}
        />
        <div className=" my-auto h-2/3 w-2/3 px-2">
          <h1 className=" text-2xl md:text-5xl font-bold">{name}</h1>
          <h3 className="text-lg font-medium">
            {"Total Followers: " + followers?.total}
          </h3>
        </div>
      </div>
  )
}

export default ArtistHeader