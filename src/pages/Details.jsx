import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [videoKey, setVideoKey] = useState("");

  const { id } = useParams();
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const apiKey = process.env.REACT_APP_API_KEY;
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`;

  useEffect(() => {
    axios
      .get(movieDetailBaseUrl)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
    axios
      .get(videoUrl)
      .then((res) => setVideoKey(res.data.results[0].key))
      .catch((err) => console.log(err));
  }, [movieDetailBaseUrl, videoUrl]);

  return (
    <div className="video">
      <div className="videoPart">
        <iframe
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
        ></iframe>
      </div>
      <div className="movieDecription">
        <div className="movie">
          <img src={IMG_API + movieDetails.poster_path} alt="" />
        </div>
        <div className="description">
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
