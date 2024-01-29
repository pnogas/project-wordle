import React from "react";

import { range } from "../../utils";

function Guess({ word }) {
  return (
    <p className="guess">
      {range(5).map((index) => {
        return (
          <span key={index} className="cell">
            {word ? word[index] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
