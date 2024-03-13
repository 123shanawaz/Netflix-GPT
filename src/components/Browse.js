// import React, { useEffect, useState } from "react";
import Header from "./Header";
import useNowPlyingMovies from "../hooks/useNowPlyingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // const [] = useState([]);
  useNowPlyingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
