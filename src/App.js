import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";
const API_URL = "http://www.omdbapi.com?apikey=d0db8a45";

const post = {
  Title: "Batman: The Animated Series",
  Year: "1992–1995",
  imdbID: "tt0103359",
  Type: "series",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [Searchterm, setSearchterm] = useState(" "); // [1
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("batman");
  }, []);

  return (
    <>
      <div className="app">
        <h1>MoviesWorld</h1>

        <div className="search">
          <input
            placeholder="Search for a movie"
            value={Searchterm}
            onChange={(e) => setSearchterm(e.target.value)}
          />
          <img src={SearchIcon} alt="Search Icon" onClick={() => searchMovies(Searchterm)} />
        </div>
        {movies?.length > 0 ? (
          <div className="container">
           {movies.map((post)=>(
            <MovieCard post={post} />
           ))}
          </div>
        ) : (
          <div className="empty">No movies found</div>
        )}
      </div>
    </>
  );
};

export default App;
