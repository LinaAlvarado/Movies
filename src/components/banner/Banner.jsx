import { useEffect, useState } from "react";
import { details } from "../../request";
import "./banner.css";

const Banner = () => {
  const [bannerMovie, setBannerMovie] = useState();
  useEffect(() => {
    details(640146, setBannerMovie);
  }, []);
  return (
    <section className="container-banner">
      <img
        className="fondo"
        src={`https://image.tmdb.org/t/p/w500${bannerMovie?.backdrop_path}`}
        alt="banner-pelicula"
      />
      <div className="container-banner-info">
        <h2>{bannerMovie?.title}</h2>
        <p>{bannerMovie?.overview}</p>
        <div className="container-banner-text">
          <div>
            <p>{bannerMovie?.vote_average}</p>
            <img src="/src/assets/star.svg" alt="star" />
          </div>
          <p>{bannerMovie?.runtime} min</p>
        </div>
        <button>See details</button>
      </div>
    </section>
  );
};

export default Banner;
