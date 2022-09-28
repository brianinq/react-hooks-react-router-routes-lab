import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, i) => {
        return (
          <div key={i}>
            <p>{movie.title}</p>
            <small>{movie.time}</small>
            <ul>
              {movie.genres.map((genre, y) => (
                <li key={y}>{genre}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Movies;
