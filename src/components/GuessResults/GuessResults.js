import React from "react";

function GuessResults({ results }) {
  return (
    <div className="guess-results">
      {results.map((result, index) => {
        return (
          <p key={index} className="guess">
            {result}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
