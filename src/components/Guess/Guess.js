import React from "react";

const emptyArray = ["", "", "", "", ""];

function Guess({ guessNumber, word }) {
  chars = word === "" ? emptyArray : Array.from(word);

  return (
    <p className="guess">
      {chars.map((c, index) => (
        <span key={guessNumber + index} className="cell">
          {c}
        </span>
      ))}
    </p>
  );
}

export default Guess;
