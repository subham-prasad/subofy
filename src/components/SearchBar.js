import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSearchResults,
  addSearchText,
  clearSearchResults,
} from "../utils/searchSlice";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const accessToken = useSelector((state) => state?.spotify?.accessToken);
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state?.search?.searchResults);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchText.trim() === "") {
        dispatch(clearSearchResults());
      } else if (!searchResults[searchText]) {
        // Make the API call only if results for the searchText are not available.
        getSearchResults();
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchResults = async () => {
    const data = await fetch(
      "https://api.spotify.com/v1/search?q=" +
        searchText +
        "&type=album%2Cplaylist%2Cshow%2Cepisode%2Cartist%2Ctrack%2Caudiobook",
      {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
        method: "GET",
      }
    );

    const json = await data.json();
    // console.log(json);
    dispatch(
      addSearchResults({
        [searchText]: json,
      })
    );
    dispatch(addSearchText(searchText));
  };
  return (
    <div>
      <input
        className="mx-16 my-10 w-1/3 bg-[#28282B] h-14 rounded-3xl p-3 text-white"
        type="text"
        placeholder="What do you want to listen to?"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
