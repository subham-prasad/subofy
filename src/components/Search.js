import React from 'react'
import SearchBar from './SearchBar'
import SearchSuggestions from './SearchSuggestions'

const Search = () => {
  return (
    <div className='h-full'>

      <SearchBar />
      <SearchSuggestions />
    </div>
  )
}

export default Search