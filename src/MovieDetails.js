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
  let { id } =
    useParams();
  const [movie, setMovie] = useState([]);
  const [cast, setCast] = useState([]);
console.log("this", id);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchById(id));
      const castrequest = await axios.get(requests.fetchCastById(id));
      console.log(request);
      setCast(castrequest.data);
      setMovie(request.data);
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
            <h1>Title: {movie.name}</h1>
            <div className="movie-details-item">
            <h2>Rating</h2>
            <p>
               {movie.vote_average}
              <span className="movie-details-vote-count">
                Count: {movie.vote_count}
              </span>
            </p>
            </div>
            <div className="movie-details-item">
            <h2>Description</h2>
            <p>{movie.overview}</p>
            </div>
            <div className="movie-details-item">
            <h2>Cast</h2>
            <p>{cast?.cast?.map(castMember => (
              <li>{castMember.name}</li>
            ))}</p>
                        </div>

            <div className="movie-details-item">
            <h2>Release Date</h2>
            <p>{movie.release_date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
