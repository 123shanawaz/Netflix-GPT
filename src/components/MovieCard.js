import React from "react";
import { IMG_CDN_YRL } from "../utils/constant";

export const MovieCard = ({ posterPath }) => {
  console.log(posterPath);
  return (
    <div className="w-48 pr-4">
      <img src={IMG_CDN_YRL + posterPath} alt="Movie-card"></img>
    </div>
  );
};
