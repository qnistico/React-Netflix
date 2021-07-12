import React from 'react';
import Hero from './Hero';
import "./LandingPage.css";
import Navbar from './Navbar';
import requests from './Requests';
import RowItem from './RowItem';
import axios from "./axios";

function LandingPage() {
    return (
        <div className="landing-page">
            <Navbar />
            <Hero />
            <RowItem title="Top Rated" fetchUrl={requests.fetchTopRated}
            isLargeRowItem/>
            {/*
            <RowItem title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            */}
            <RowItem title="Trending" fetchUrl={requests.fetchTrending}/>
            <RowItem title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <RowItem title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <RowItem title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
            <RowItem title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        </div>
    )
}

export default LandingPage
