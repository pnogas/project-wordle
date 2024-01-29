import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
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
    if (guess === answer) {
      setGameResult("win");
    } else if (newResults.length === NUM_OF_GUESSES_ALLOWED) {
      setGameResult("lose");
    }
    setResults(newResults);
  }

  return (
    <>
      <GuessResults results={results} answer={answer} />
      <GuessInput appendToResults={appendToResults} gameResult={gameResult} />
      {gameResult && (
        <Banner
          didWin={gameResult === "win"}
          numberOfGuesses={results.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
