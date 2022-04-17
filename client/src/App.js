import React from "react";
import request from "./utils/request";
import "./App.css";
import Row from "./component/Row";
import Banner from "./component/Banner";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Banner />
      <Row title="Netflix originals" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Trending Now" thumbnail fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" thumbnail fetchUrl={request.fetchTopRated} />
      <Row
        title="Action Movies"
        thumbnail
        fetchUrl={request.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        thumbnail
        fetchUrl={request.fetchComedyMovies}
      />
      <Row
        title="Romance Movies"
        thumbnail
        fetchUrl={request.fetchRomanceMovies}
      />
      <Row
        title="Documentaries"
        thumbnail
        fetchUrl={request.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
