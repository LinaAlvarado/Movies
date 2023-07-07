import { useEffect, useState } from "react";
import { discoverMovies, rating, commingSoon } from "./request";
import Header from "./components/header/Header.jsx";
import Banner from "./components/Banner";
import MovieCard from "./components/MovieCard";

function App() {
  const [discoverList, setDiscoverList] = useState([]);
  const [ratingList, setRatingList] = useState([]);
  const [commingList, setCommingList] = useState([]);

  useEffect(() => {
    discoverMovies(setDiscoverList);
    rating(setRatingList);
    commingSoon(setCommingList);
  }, []);

  return (
    <>
      <Header></Header>
      <Banner />
      <h2>Discover movies</h2>
      {discoverList.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      <h2>Rating</h2>
      {ratingList.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      <h2>Comming soon</h2>
      {commingList.map((movie) => (
        <div key={movie.id}>
          <MovieCard key={movie.id} movie={movie} />
        </div>
      ))}
    </>
  );
}

export default App;
