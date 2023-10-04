import React from 'react'
import ArtistCards from './ArtistCards';
import { Link } from 'react-router-dom';

const ArtistListBySearch = ({title, artists}) => {
  return (
    <div className='mx-5 px-2'>
      <h1 className='text-white text-2xl font-bold'>{title}</h1>
      <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-900 scrollbar-thumb-rounded scrollbar-track-transparent">
        {artists?.map((artist) => {
          return (
            <Link to={"/artist/" + artist.id} key={artist.id}>
              <ArtistCards artist={artist} />
            </Link>
          );
        })}
      </div>
    </div>
  )
}

export default ArtistListBySearch