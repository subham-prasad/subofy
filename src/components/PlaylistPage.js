

import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import PlaylistHeader from './PlaylistHeader'
import PlaylistItems from './PlaylistItems'

const PlaylistPage = () => {

    const {playlistId} = useParams()

   
  return (
    <div>
      <PlaylistHeader playlistId = {playlistId} />

      

      <PlaylistItems playlistId = {playlistId} />
    </div>
  )
}

export default PlaylistPage