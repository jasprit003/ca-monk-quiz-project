import React from "react";

const ScoreOverview = ({ score }) => {
  let finalScore = "";
  if (score >= 90) {
    finalScore =
      "Excellent job! You've mastered these concepts with very few errors.";
  } else if (score >= 75) {
    finalScore =
      "While you correctly answered most questions, there are a few areas where improvement is needed. Review your responses below for more details.";
  } else if (score >= 50) {
    finalScore =
      "While you correctly formed several answers, there are a couple of areas where improvement is needed. Pay close attention to sentence structure and word placement to ensure clarity and correctness. Review your responses below for more details.";
  } else {
    finalScore =
      "You're making progress, but additional practice is recommended. Focus on the correct word order and review the questions you missed below.";
  }
  return (
    <div className="text-center" style={{ width: "760px" }}>
      {finalScore}
    </div>
  );
};

export default ScoreOverview;
