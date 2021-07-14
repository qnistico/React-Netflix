import React from "react";
import { useState, useEffect } from "react";
import "./Hero.css";
import axios from "./axios";
import requests from "./Requests";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import "./MovieDetails.css";
import Navbar from "./Navbar";
function MovieDetails() {
  let { name, vote_average, vote_count, overview, credits, cast, release_date } =
    useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTopRated);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div>
      <Navbar />
      <div className="movie-details">
        <div className="movie-details-flex">
            <img
              src={`${base_url}${movie.poster_path}`}
              key={movie.id}
              alt={movie.name}
              className="movie-details-img"
            />
          <div className="movie-details-content">
            <h1>Title: {name}</h1>
            <div className="movie-details-item">
            <h2>Rating</h2>
            <p>
               {vote_average}
              <span className="movie-details-vote-count">
                Count: {vote_count}
              </span>
            </p>
            </div>
            <div className="movie-details-item">
            <h2>Description</h2>
            <p>{overview}</p>
            </div>
            <div className="movie-details-item">
            <h2>Cast</h2>
            <p>{credits} {cast}</p>
            </div>
            <div className="movie-details-item">
            <h2>Release Date</h2>
            <p>{release_date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
