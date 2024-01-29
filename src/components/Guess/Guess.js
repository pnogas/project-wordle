import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ word, answer }) {
  let styles = word ? checkGuess(word, answer) : undefined;
  if (styles) {
    styles = styles.map((item) => item["status"]);
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
