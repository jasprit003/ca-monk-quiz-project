import React from "react";

const Progress = ({ currentIndex }) => {
  const options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return (
    <div className="h-8 flex gap-3 mt-3">
      {options.map((option, index) => (
        <span
          key={index}
          className="h-1 w-20 rounded-3xl"
          style={
            index < currentIndex
              ? { backgroundColor: " rgba(242, 165, 49, 1)" }
              : { backgroundColor: "var(--neutral-200)" }
          }
        ></span>
      ))}
    </div>
  );
};

export default Progress;
