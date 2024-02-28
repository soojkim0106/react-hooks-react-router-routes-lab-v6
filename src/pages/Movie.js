import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movieInfo, setMovieInfo] = useState({});
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then((r) => r.json())
      .then((data) => setMovieInfo(data))
      .catch((error) => console.error(error));
  }, [movieId]);

  if (!movieInfo.title) {
    return <h1>Loading...</h1>;
  }

  const genres = movieInfo.genres.map((genre) => (
    <span key={genre}>{genre}</span>
  ));

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movieInfo.title}</h1>
        <p>Time: {movieInfo.time} Minutes</p>
        <span>Genres:</span>
        {genres}
      </main>
    </>
  );
}

export default Movie;
