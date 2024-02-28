import React from "react";

const DirectorCard = ({ name, movies }) => {
  const mappedMovies = movies.map((movie) => <li key={movie.id}>{movie}</li>);

  return (
    <article>
      <h2>{name}</h2>
      {mappedMovies}
    </article>
  );
};

export default DirectorCard;
