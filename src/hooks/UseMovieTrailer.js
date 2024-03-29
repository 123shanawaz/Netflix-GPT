import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideos } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  //   console.log(movieId);
  const dispatch = useDispatch();
  //   const [trailerId, setTrailerId] = useState(null);

  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    const filterData = json.results?.filter(
      (video) => video.type === "Trailer"
    );
    // console.log(filterData);
    const trailer = filterData?.length ? filterData[0] : json.results[0];
    // console.log(trailer);
    // setTrailerId(trailer.key);
    dispatch(addTrailerVideos(trailer));
  };

  useEffect(() => {
    getMoviesVideos();
  }, []);
};
export default useMovieTrailer;
