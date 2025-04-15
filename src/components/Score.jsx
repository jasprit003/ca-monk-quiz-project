import React from "react";

const Score = ({ score }) => {
  return (
    <div>
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
          stroke="#75cc84"
          strokeWidth="12"
          strokeDasharray={2 * Math.PI * 54}
          strokeDashoffset={2 * Math.PI * 54 * (1 - score / 100)}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-sm font-bold fill-[#4D8C57]"
        >
          {score}%
        </text>
        <text
          x="50%"
          y="65%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-sm fill-[#4D8C57]"
        >
          Overall Score
        </text>
      </svg>
    </div>
  );
};

export default Score;
