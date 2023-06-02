import { useEffect, useState } from "react";
import { discoverMovies, rating, commingSoon } from "./request";
import Banner from "./components/Banner";

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
      <Banner />
      <h2>Discover movies</h2>
      {discoverList.map((movie) => (
        <div key={movie.id}>
          <p>{movie.title}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
          <p>{movie.vote_average}</p>
        </div>
      ))}
      <h2>Rating</h2>
      {ratingList.map((movie) => (
        <div key={movie.id}>
          <p>{movie.title}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
          <p>{movie.vote_average}</p>
        </div>
        
      ))}
      <h2>Comming soon</h2>
      {commingList.map((movie) => (
        <div key={movie.id}>
          <p>{movie.title}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
          <p>{movie.vote_average}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
            height="10px"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ))}
    </>
  );
}

export default App;
