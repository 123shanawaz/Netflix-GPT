import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

export const SecondaryContainer = () => {
  const NowPlayingMovies = useSelector(
    (store) => store.movies.NowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies.PopularMovies);
  const TopRated = useSelector((store) => store.movies.TopRated);
  const UpComing = useSelector((store) => store.movies.UpComing);
  console.log(UpComing);

  // const popularMovies = useSelector((store) => store?.movies?.popularMovies);
  // console.log(movies);
  // console.log(popularMovies);
  return (
    NowPlayingMovies && (
      <div className="bg-black">
        <div className="relative pl-10 -mt-56 z-20">
          <MovieList title={"Now Playing"} movies={NowPlayingMovies} />
          <MovieList title={"TopRated"} movies={TopRated} />
          <MovieList title={"Popular"} movies={popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={UpComing} />
          {/* <MovieList title={"Horror"} movies={NowPlayingMovies} /> */}
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
