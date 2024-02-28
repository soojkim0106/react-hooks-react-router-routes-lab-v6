import { useEffect, useState } from "react";
import NavBar from "../components/NavBar.js";
import MovieCard from "../components/MovieCard.js";

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(0);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((r) => r.json())
      .then(setMovies)
      .catch((error) => setError(error.message));
  }, []);

  const mappedMovies = movies.map((movie) => (
    <span key={movie.id}>
      <MovieCard movie={movie} />
    </span>
  ));
  return (
    <>
      {error ? <p>{error}</p> : null}
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {mappedMovies}
      </main>
    </>
  );
}

export default Home;
