// import React, { useEffect, useState } from "react";
import Header from "./Header";
import useNowPlyingMovies from "../hooks/useNowPlyingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/UsePopularMovies";
import UseTopRatedMovies from "../hooks/UseTopRatedMovies";
import UseUpComingMovies from "../hooks/UseUpComingmovies";
import { GptSearch } from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  // const [] = useState([]);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlyingMovies();
  usePopularMovies();
  UseTopRatedMovies();
  UseUpComingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
