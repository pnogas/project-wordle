import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);
  function appendToResults(guess) {
    const newResults = [...results];
    newResults.push(guess);
    setResults(newResults);
  }

  return (
    <>
      <GuessResults results={results} />
      <GuessInput appendToResults={appendToResults} />
    </>
  );
}

export default Game;
