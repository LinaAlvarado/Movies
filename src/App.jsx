import { useEffect, useState } from "react";
import { discoverMovies,  rating,
  commingSoon, } from "./request";

function App() {
  const [discoverList, setDiscoverList] = useState([]);
  const [ratingList, setRatingList] = useState([]);
  const [commingList, setCommingList] = useState([]);

  useEffect(() => {
    discoverMovies(setDiscoverList)
    rating(setRatingList)
    commingSoon(setCommingList)
  }, []);

  return (
    <>
      <h2>Discover movies</h2>
      {discoverList.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
      <h2>Rating</h2>
      {ratingList.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
      <h2>Comming soon</h2>
      {commingList.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </>
  );
}

export default App;
