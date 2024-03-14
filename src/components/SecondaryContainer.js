import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

export const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies?.addNowPlayingMovies);
  console.log(movies);
  return (
    movies && (
      <div className="bg-black">
        <div className="relative pl-10 -mt-56 z-20">
          <MovieList title={"Now Playing"} movies={movies} />
          <MovieList title={"Trending"} movies={movies} />
          <MovieList title={"Popular"} movies={movies} />
          <MovieList title={"Upcoming Movies"} movies={movies} />
          <MovieList title={"Horror"} movies={movies} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
