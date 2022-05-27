import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { AuthContext } from "../context/AuthContext";

const apiKey = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const searchMovie = (e) => {
    e.preventDefault();
    if (currentUser) {
      axios(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      ).then((res) => {
        setMovies(res.data.results);
      });
    } else {
      // MovieInfo()
      alert("Please login");
      navigate("/login");
    }
  };

  const MovieInfo = () => {
    axios(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`).then(
      (res) => {
        setMovies(res.data.results);
      }
    );
  };

  useEffect(() => {
    MovieInfo();
  }, []);

  return (
    <>
      <form className="search" onSubmit={searchMovie}>
        <input
          type="search"
          className="search-input"
          placeholder="Search a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="d-flex justify-content-center flex-wrap ">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
        ) : (
          <p>No results were found matching your search criteria.</p>
        )}
      </div>
    </>
  );
};

export default Home;
