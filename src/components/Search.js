import React from 'react'
import SearchBar from './SearchBar'
import SearchSuggestions from './SearchSuggestions'

const Search = () => {
  return (
    <div className="col-span-9 rounded-xl bg-[#121212] text-white h-screen overflow-y-scroll ">

      <SearchBar />
      <SearchSuggestions />
    </div>
  )
}

export default Search