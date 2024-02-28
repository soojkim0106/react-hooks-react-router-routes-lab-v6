import React from "react";

const ActorCard = ({ name, movies }) => {
  const mappedActorMovies = movies.map((movie) => (
    <li key={movie.name}>{movie}</li>
  ));

  return (
    <article>
      <h2>{name}</h2>
      {mappedActorMovies}
    </article>
  );
};

export default ActorCard;
