import React from "react"
import { getMovieList, searchMovie } from "../utils/api"
import { useEffect, useState } from "react"
import PopularMovieList from "./PopularMovieList"

const SearchMovie = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])

  const search = async (keyword) => {
    if (keyword.length > 4) {
      const movie = await searchMovie(keyword)
      setPopularMovies(movie.results)
    }

    if (keyword.length === 0) {
      getMovieList().then((result) => {
        setPopularMovies(result)
      })
    }
  }

  return (
    <div className="container mx-auto pt-6">
      <div className="flex justify-center max-w-screen-sm mx-auto overflow-hidden px-10 pt-3 pb-10">
        <input
          className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Cari Film Yang Diinginkan..."
          type="search"
          onChange={({ target }) => search(target.value)}
        />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10 max-w-7xl mx-auto">
        {popularMovies.map((movie, i) => (
          <PopularMovieList key={i} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default SearchMovie
