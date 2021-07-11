import React from "react";
import { useState, useEffect } from "react";
import "./Hero.css";
import axios from "./axios";
import requests from "./Requests";
function Hero() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="hero"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="hero-content">
        <div className="hero-gradient-top"></div>
        <h1 className="hero-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        
        <h2 className="hero-description">{truncate(movie?.overview, 140)}</h2>
        <div className="hero-buttons">
          <button className="hero-button">Play</button>
          <button className="hero-button">My List</button>
        </div>
      </div>
      <div className="hero-gradient-bottom"></div>
    </header>
  );
}

export default Hero;
