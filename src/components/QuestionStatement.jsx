import React from "react";

const QuestionStatement = ({ question, options, bg, padding }) => {
  return (
    <div
      style={{
        color: "var(--neutral-700)",
        lineHeight: " 2.5",
        backgroundColor: bg,
        padding: padding,
        borderBottomRight: "16px",
      }}
    >
      {question.split("_____________").map((element, index) => (
        <React.Fragment key={index}>
          <span>{element}</span>
          {index <= 3 && (
            <span
              className="text-center"
              style={{
                borderBottom: "2px solid var(--neutral-500)",
                display: "inline-block",
                minWidth: "80px",
              }}
            >
              {options[index] !== "" && !undefined ? (
                <span className="inline-block text-sm text-center border border-neutral-200 rounded-md px-3">
                  {options[index]}{" "}
                </span>
              ) : (
                ""
              )}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default QuestionStatement;
