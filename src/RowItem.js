import React, { useState, useEffect } from "react";
import "./RowItem.css";
import axios from "./axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import MovieModal from "./Components/MovieModal";

function RowItem({ title, fetchUrl, isLargeRowItem = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      <div className="row-item">
        <h2>{title}</h2>
        <div className="row-images">
          {movies.map(
            (movie) =>
              ((isLargeRowItem && movie.poster_path) ||
                (!isLargeRowItem && movie.backdrop_path)) && (
                <div className="row-image-single">
                  <Link
                    to={`/movies/${movie?.id}`}
                  >
                    <img
                      src={`${base_url}${
                        isLargeRowItem ? movie.poster_path : movie.poster_path
                      }`}
                      key={movie.id}
                      alt={movie.name}
                      className={`row-image ${
                        isLargeRowItem && "row-image-large"
                      }`}
                    />
                  </Link>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default RowItem;
