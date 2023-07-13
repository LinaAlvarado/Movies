import { useEffect, useState } from "react";
import { discoverMovies, rating, commingSoon } from "./request";
import Header from "./components/header/Header.jsx";
import Banner from "./components/banner/Banner.jsx";
import MovieCard from "./components/movieCard/MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./components/Carousel";
import "./global.css";
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
      <Carousel>
        {discoverList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Carousel>

      <h2>Rating</h2>
      <Carousel>
        {ratingList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Carousel>

      <h2>Comming soon</h2>
      <Carousel>
        {commingList.map((movie) => (
          <div key={movie.id}>
            <MovieCard key={movie.id} movie={movie} />
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default App;
