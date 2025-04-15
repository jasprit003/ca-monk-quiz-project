import React from "react";

import { Overview, Score, ScoreOverview, Container } from "../components";

const Results = ({ score, allAnswers, onReset }) => {
  const percentage = Math.round((score / 10) * 100);

  return (
    <div className="flex flex-col gap-4 items-center mx-8">
      <Score score={percentage} />
      <ScoreOverview score={percentage} />
      <button
        className="text-blue-700 border border-blue-700 rounded-md px-4"
        style={{ border: "1px solid blue", color: "blue" }}
        onClick={onReset}
      >
        Go To Dashboard
      </button>
      <div className="flex flex-col gap-4 items-center">
        {allAnswers.map((answer, index) => (
          <Overview key={index} serial={index} answer={answer} />
        ))}
      </div>
    </div>
  );
};

export default Results;
