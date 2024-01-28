import React from "react";

function GuessResults({ results }) {
  return (
    <div class="guess-results">
      {results.map((result) => {
        return <p class="guess">{result}</p>;
      })}
    </div>
  );
}

export default GuessResults;
