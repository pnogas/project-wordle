import React from "react";

import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ results }) {
  const display = range(0, NUM_OF_GUESSES_ALLOWED).map((i) =>
    results[i] === undefined ? "" : results[i]
  );

  return (
    <div className="guess-results">
      {display.map((result, index) => {
        return <Guess key={index} guessNumber={index} word={result} />;
      })}
    </div>
  );
}

export default GuessResults;
