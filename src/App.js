import React from "react";

import "./styles.css";

import Rows from "../src/components/Rows";

import request from "./requests";

import Banner from "../src/components/Banner";

function App() {
  return (
    <div className="App">
      <Banner />
      <Rows
        title="Netflix Originals"
        fetchUrl={request.fetchNetflixOriginal}
        isLargeRow
      />
      <Rows title="Trending Now" fetchUrl={request.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Rows title="Action" fetchUrl={request.fetchActionMovies} />
      <Rows title="Comedies" fetchUrl={request.fetchComedyMovies} />
      <Rows title="Romance" fetchUrl={request.fetchRomanceMoves} />
      <Rows title="Horror" fetchUrl={request.fetchHorrorMovies} />
    </div>
  );
}

export default App;
