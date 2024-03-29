import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.NowPlayingMovies);
  // console.log(movies);
  if (movies == null) return;
  const mainMovie = movies[0];
  // console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;
  // console.log(id);
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground moviesId={id} />
    </div>
  );
};

export default MainContainer;
