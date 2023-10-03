import React from 'react'
import { Play_IMG_CDN } from '../utils/constants'
import { addSpotifyURI } from '../utils/spotifySlice'
import { useDispatch } from 'react-redux'

const PlaylistCards = ({item}) => {
  const dispatch = useDispatch()

    const {name, description, images} = item

    const setMusic = () => {
      dispatch(addSpotifyURI(item.uri))
    
      
    }
  return (
    <div>
<div className="m-4 p-4 bg-gray-800 w-56 mx-2 rounded-xl h-80 relative group">
      <img className="w-30" src={images?.[0].url} alt="Album" />
      <button onClick={setMusic} 
        className=" w-20 h-20 my-2 absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
          <img className="cursor-pointer" alt="Play" src={Play_IMG_CDN} />
        </button>
      <h1 className="font-bold truncate h-10">{name}</h1>

      <p className='truncate h-10'>{description}</p>
    </div>
    </div>
  )
}

export default PlaylistCards