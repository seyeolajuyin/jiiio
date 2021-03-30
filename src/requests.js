const APIKEY = "26c4a93c7d7a1a5bbed27cc4a0863e60";

const request = {
  fetchTrending: `/trending/all/day?api_key=${APIKEY}`,
  fetchNetflixOriginal: `/discover/tv?api_key=${APIKEY}&page=1&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`,
  fetchRomanceMoves: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749`,
  fecthDocumentaries: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`
};

export default request;
