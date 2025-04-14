import React from "react";

const Results = ({ score, allAnswers, onReset }) => {
  const percentage = Math.round((score / 10) * 100);

  const getFeedbackMessage = () => {
    if (percentage >= 90) {
      return "Excellent job! You've mastered these concepts with very few errors.";
    } else if (percentage >= 75) {
      return "While you correctly answered most questions, there are a few areas where improvement is needed. Review your responses below for more details.";
    } else if (percentage >= 50) {
      return "While you correctly formed several answers, there are a couple of areas where improvement is needed. Pay close attention to sentence structure and word placement to ensure clarity and correctness. Review your responses below for more details.";
    } else {
      return "You're making progress, but additional practice is recommended. Focus on the correct word order and review the questions you missed below.";
    }
  };

  return (
    <div className="flex flex-col items-center gap-12 mt-24">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="#E6E6E6"
          strokeWidth="12"
        />
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="#4D8C57"
          strokeWidth="12"
          strokeDasharray={2 * Math.PI * 54}
          strokeDashoffset={2 * Math.PI * 54 * (1 - percentage / 100)}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
        />
        {/* Centered Score Text */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-[34px] font-bold fill-[#4D8C57]"
        >
          {percentage}%
        </text>
        <text
          x="50%"
          y="65%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-[12px] fill-[#4D8C57]"
        >
          Overall Score
        </text>
      </svg>
      <p
        className="text-small text-center"
        style={{ width: "550px", color: "var(--neutral-600)" }}
      >
        {getFeedbackMessage(score)}
      </p>
      <button
        style={{
          border: " 1px solid rgba(69, 63, 225, 1) ",
          borderRadius: "4px",
          padding: "4px 16px",
          color: "rgba(69, 63, 225, 1) ",
        }}
        onClick={onReset}
      >
        Go to Dashboard
      </button>
      <div className="flex flex-col gap-3">
        {allAnswers.map((answer) => (
          <div
            className="shadow-md"
            style={{
              width: "720px",
              height: "160px",
              border: "1px solid var(--neutral-200)",
              borderRadius: "16px",
            }}
          >
            <p
              className=""
              style={{
                background: "rgb(255, 255, 255)",
                padding: "8px 16px",
                width: "100%",
                height: "50%",
                border: "1px solid var(--neutral-200)",
                borderRadius: "16px",
              }}
            >
              Correct Anwser:{" "}
              {answer.userSelection?.map((item, index) => (
                <span
                  className=""
                  style={{
                    padding: "4px 8px",
                    marginLeft: "4px",
                    border: "1px solid var(--neutral-200)",
                    borderRadius: "8px",
                  }}
                  key={index}
                >
                  {item}
                </span>
              ))}
            </p>
            <p
              className=""
              style={{
                background: "rgba(246, 249, 249, 1)",
                padding: "8px 16px",
                height: "50%",
                border: "1px solid var(--neutral-200)",
                borderRadius: "16px",
              }}
            >
              Your Answers:{" "}
              {answer.correctAnswers?.map((item, index) => (
                <span
                  className=""
                  style={{
                    padding: "4px 8px",
                    marginLeft: "4px",
                    border: "1px solid var(--neutral-200)",
                    borderRadius: "8px",
                  }}
                  key={index}
                >
                  {item}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
