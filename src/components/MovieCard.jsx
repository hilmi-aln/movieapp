import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const MovieCard = ({ title, poster_path, overview, vote_average, id }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="movie">
      <img src={IMG_API + poster_path} alt="" />
      <div className="d-flex align-items-baseline justify-content-between p-1 text-white">
        <h5>{title}</h5>
        {currentUser && vote_average > 8 ? (
          <span className="tag green">{vote_average}</span>
        ) : currentUser && vote_average < 6 ? (
          <span className="tag red">{vote_average}</span>
        ) : currentUser ? (
          <span className="tag orange">{vote_average}</span>
        ) : (
          <span></span>
        )}
      </div>
      <div className="movie-over">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
