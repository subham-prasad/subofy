import React from 'react'
import PlaylistCards from './PlaylistCards'
import { Link } from 'react-router-dom'

const PlaylistList = ({title, playlists}) => {

    if(!playlists) return null
  
  const {items} = playlists
    return (
    <div className="m-3 p-4">
        <h1 className="font-bold text-2xl">{title}</h1>
      <div className="flex overflow-x-scroll">
        {items?.map((item)=>{
            return (
<Link to={"/playlist/"+ item?.id } key={item?.id}>
        <PlaylistCards item = {item} />
        </Link>
            )
        })}
        
      </div>

    </div>
  )
}

export default PlaylistList