import React from 'react'
import useAlbumTracks from '../hooks/useAlbumTracks';
import { useSelector } from 'react-redux';
import TrackCard from './TrackCard';

const AlbumTrackList = ({albumId}) => {
    useAlbumTracks(albumId);

    const albumTracks = useSelector(store => store.spotify.albumTracks)

    // console.log(albumTracks)
    if(!albumTracks) return null

    const {items} = albumTracks
  return (
    <div>
        {items?.map((item) => {
          return <TrackCard item={item} key={item?.id} />;
        })}
      </div>
  )
}

export default AlbumTrackList