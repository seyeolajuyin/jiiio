import React, { useEffect, useState } from "react";

import axois from "../axios";

import "../styles/Rows.css";

const base_image_url = "https://image.tmdb.org/t/p/original/";

function Rows({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axois.get(fetchUrl);
      // console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map(movie => (

          <img key ={movie.id} className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${base_image_url}${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
        ))}
      </div>
    </div>
  );
}

export default Rows;
