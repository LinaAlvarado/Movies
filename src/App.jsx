import { useEffect, useState } from "react";
import { discoverMovies } from "./request";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    discoverMovies()
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </>
  );
}

export default App;
