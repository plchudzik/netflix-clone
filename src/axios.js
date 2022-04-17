import axios from "axios";

const instance = axios.create({ baseURL: "https://api.themoviedb.org/3" });
// https://api.themoviedb.org/3/movie/550?api_key=c293fdc5ded3c2dc73b9517281a0c305

export default instance;
