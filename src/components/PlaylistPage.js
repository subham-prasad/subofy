

import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import PlaylistHeader from './PlaylistHeader'
import PlaylistItems from './PlaylistItems'

const PlaylistPage = () => {

    const {playlistId} = useParams()

   
  return (
    <div className="col-span-9 rounded-xl bg-[#121212] text-white h-screen overflow-y-scroll ">
      <PlaylistHeader playlistId = {playlistId} />

      

      <PlaylistItems playlistId = {playlistId} />
    </div>
  )
}

export default PlaylistPage