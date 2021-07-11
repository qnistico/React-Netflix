import React, { useState, useEffect } from "react";
import "./RowItem.css";
import axios from "./axios";

function RowItem({ title, fetchUrl, isLargeRowItem = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row-item">
      <h2>{title}</h2>
      <div className="row-images">
        {movies.map(
          (movie) =>
            ((isLargeRowItem && movie.poster_path) ||
            (!isLargeRowItem && movie.backdrop_path)) && (
              <img
                src={`${base_url}${
                  isLargeRowItem ? movie.poster_path : movie.backdrop_path
                }`}
                key={movie.id}
                alt={movie.name}
                className={`row-image ${isLargeRowItem && "row-image-large"}`}
              />
            )
        )}
      </div>
    </div>
  );
}

export default RowItem;
