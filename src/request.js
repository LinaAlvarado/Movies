const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTQ2MzAyN2Q5NzRmNTdkNjAwNmMwNmIyNzNlNzk5ZiIsInN1YiI6IjY0NzYyNDA0OTI0Y2U2MDBkY2IzM2E1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6Ym2pNi-F111ZTFAN2Xxtz6pH1MCVvTy3fEqKRBKw_g",
  },
};

const discoverMovies = () => {
  fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

const popularMovies = () => {
  fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

const rating = () => {
  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

const commingSoon = () => {
  fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

const details = () => {
  fetch("https://api.themoviedb.org/3/movie/movie_id?language=en-US", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

const images = () => {
  fetch("https://api.themoviedb.org/3/movie/movie_id/images", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

const search = () => {
  fetch(
    "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

export  {discoverMovies, popularMovies, rating, commingSoon, details, images, search}