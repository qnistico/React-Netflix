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
function MovieDetails() {
    let { name, vote_average, vote_count, overview, cast} = useParams();

    return (
        <div className="movie-details">
            <div>
        <h1>Title: {name}</h1>
        <p>Votes: {vote_average} <span className="movie-details-vote-count">Count: {vote_count}</span></p>
        <p>Description: {overview}</p>
        <p>Cast: {cast}</p>
      </div>

        </div>
    )
}

export default MovieDetails
