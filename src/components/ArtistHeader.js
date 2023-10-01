import React from 'react'
import useArtistDetails from '../hooks/useArtistDetails';
import { useSelector } from 'react-redux';

const ArtistHeader = ({artistId}) => {
    useArtistDetails(artistId);
    const artistDetails = useSelector((store) => store.artist.artistDetails);

    if(!artistDetails) return null
    const { images, name, followers, geners } = artistDetails;

    
  return (
    <div className="flex">
        <img
          className="w-auto h-64 object-cover "
          alt="Artist"
          src={images?.[0]?.url}
        />
        <div className=" px-3 py-10">
          <h1 className="text-8xl font-bold">{name}</h1>
          <h3 className="text-lg font-medium">
            {"Total Followers: " + followers?.total}
          </h3>
        </div>
      </div>
  )
}

export default ArtistHeader