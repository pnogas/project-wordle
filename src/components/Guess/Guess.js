import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guess({ word, answer, guessNumber, setGameResult }) {
  let styles = word ? checkGuess(word, answer) : undefined;
  if (styles) {
    styles = styles.map((item) => item["status"]);
    if (styles.filter((x) => x == "correct").length == 5) {
      setGameResult("win");
    } else if (guessNumber === NUM_OF_GUESSES_ALLOWED - 1) {
      setGameResult("lose");
    }
  }

  return (
    <p className="guess">
      {range(5).map((index) => {
        const clz = styles ? `cell ${styles[index]}` : "cell";
        return (
          <span key={index} className={clz}>
            {word ? word[index] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
