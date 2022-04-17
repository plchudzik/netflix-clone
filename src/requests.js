const API_KEY = "c293fdc5ded3c2dc73b9517281a0c305";

const requests = {
  // fetchPLC: `/movie/550?api_key=${API_KEY}`,
  fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
  fetchOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
