import React from "react";
import http from "../axios";
import "./css/Row.css";

const Row = ({ title, fetchUrl, thumbnail = false }) => {
  const [movies, setMovies] = React.useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  React.useEffect(() => {
    async function getMovies() {
      try {
        const responseObject = await http.get(`${fetchUrl}`);
        setMovies(responseObject?.data?.results || []);
      } catch (err) {}
    }
    getMovies();
  }, [fetchUrl]);

  console.table(movies);
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${thumbnail && " poster__thumbnail "} `}
            src={`${baseUrl}${
              thumbnail ? movie.backdrop_path : movie.poster_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
