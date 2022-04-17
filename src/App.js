import "./App.css";
import requests from "./requests";
import Row from "./Row";
import Banner from "./Banner";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row title="Originals" fetchUrl={requests.fetchOriginals} isLargeRow />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Popular" fetchUrl={requests.fetchPopular} />
    </div>
  );
}

export default App;
