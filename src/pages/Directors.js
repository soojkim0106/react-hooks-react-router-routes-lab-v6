import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import DirectorCard from "../components/DirectorCard";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors").then((r) => {
      if (!r.ok) {
        throw new Error("The json server is not running");
      }
      return r
        .json()
        .then(setDirectors)
        .catch((error) => console.log(error));
    });
  }, []);

  const mappedDirectors = directors.map((director) => (
    <DirectorCard
      key={director.id}
      name={director.name}
      movies={director.movies}
    />
  ));

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {mappedDirectors}
      </main>
    </>
  );
}

export default Directors;
