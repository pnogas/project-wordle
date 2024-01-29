import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);
  const [gameResult, setGameResult] = React.useState(undefined);
  function appendToResults(guess) {
    const newResults = [...results];
    newResults.push(guess);
    setResults(newResults);
  }

  return gameResult ? (
    <Banner
      didWin={gameResult === "win"}
      numberOfGuesses={results.length}
      answer={answer}
    />
  ) : (
    <>
      <GuessResults
        results={results}
        answer={answer}
        setGameResult={setGameResult}
      />
      <GuessInput appendToResults={appendToResults} gameResult={gameResult} />
    </>
  );
}

export default Game;
