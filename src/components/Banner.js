import React, { useState, useEffect } from "react";

import axois from "../axios";
import requests from "../requests";

import "../styles/Banner.css";

const base_image_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axois.get(requests.fetchNetflixOriginal);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);

  // console.log(movie)

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("${base_image_url}${movie.backdrop_path}")`
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_overview">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadebuttom"></div>
    </header>
  );
}

export default Banner;
