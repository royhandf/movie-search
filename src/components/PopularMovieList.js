import React from "react"

const PopularMovieList = ({ movie }) => {
  return (
    <div className="w-1/3 h-1/3">
      <img
        src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
        alt={`${movie.title} poster`}
        width="500"
      />
      <div class="p-4">
        <p class="font-medium text-lg">{movie.title}</p>
        <p class="font-medium text-lg">{movie.release_date}</p>
      </div>
    </div>
  )
}

export default PopularMovieList
