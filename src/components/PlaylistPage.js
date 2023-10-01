

import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import PlaylistHeader from './PlaylistHeader'
import PlaylistItems from './PlaylistItems'

const PlaylistPage = () => {

    const {playlistId} = useParams()

   
  return (
    <div className='m-1 col-span-8 rounded-xl bg-[#121212] text-white p-10 overflow-y-scroll h-screen'>
      <PlaylistHeader playlistId = {playlistId} />

      <PlaylistItems playlistId = {playlistId} />
    </div>
  )
}

export default PlaylistPage