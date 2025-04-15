import React from "react";
import QuestionStatement from "./QuestionStatement";

const Overview = ({ answer, serial }) => {
  return (
    <div
      className="flex flex-col rounded-3xl shadow-md"
      style={{
        width: "700px",
        backgroundColor: "var(--background-color)",
      }}
    >
      <div className="" style={{ padding: "16px" }}>
        <div className="flex justify-between items-center">
          <p
            className="text-sm text-medium px-3 py-1"
            style={{
              color: "var(--neutral-600)",
              backgroundColor: "rgba(240, 240, 240, 1)",
              borderRadius: "8px",
            }}
          >
            prompt
          </p>
          <p>
            {serial + 1}
            <span
              style={{
                color: "var(--neutral-500)",
              }}
            >
              /10
            </span>
          </p>
        </div>
        <QuestionStatement
          question={answer.questionText}
          options={answer.correctAnswers}
        />
      </div>
      {/* Other half */}

      <div>
        <div
          className=""
          style={{
            padding: "16px",
          }}
        >
          <div className="flex gap-3">
            <p className="text-sm shadow-neutral-600">Your response</p>
            <span
              className="text-sm px-3 font-medium rounded-2xl"
              style={{
                background: answer.isCorrect ? "#e2eee2" : "#fcebec",
                color: answer.isCorrect
                  ? "rgba(49, 127, 57, 1)"
                  : "rgba(158, 41, 48, 1)",
              }}
            >
              {answer.isCorrect ? "Correct" : "Incorrect"}
            </span>
          </div>
        </div>
        <QuestionStatement
          question={answer.questionText}
          options={answer.correctAnswers}
          bg={"#eef7f1"}
          padding={"16px"}
        />
      </div>
    </div>
  );
};

export default Overview;
