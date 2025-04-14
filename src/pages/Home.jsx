import React from "react";
import { ClipboardText } from "@phosphor-icons/react";

import { Container } from "../components";

const Home = ({ onStart }) => {
  const details = [
    { id: 1, label: "Time Per Question", underLabel: "30 sec" },
    { id: 2, label: "Total Questions", underLabel: "10" },
    { id: 3, label: "Coins", underLabel: "🪙 0" },
  ];
  return (
    <Container>
      <div className="lg:w-[505px] h-[472px] flex flex-col gap-3 items-center">
        <button className="">
          <ClipboardText
            className=""
            style={{ color: "var(--neutral-500)" }}
            size={52}
          />
        </button>
        <h3 className="text-4xl font-medium">Sentence Construction</h3>
        <p
          className="text-20px text-center"
          style={{ color: "var(--neutral-500)" }}
        >
          Select the correct words to complete the sentence by arranging the
          provided options in the right order.
        </p>

        <ul className="w-full px-4 mt-8 flex justify-between items-center">
          {details.map((detail) => (
            <React.Fragment key={detail.id}>
              <li className="flex flex-col items-center flex-1 mx-2">
                <p className="mb-4">{detail.label}</p>
                <span
                  className="text-center"
                  style={{ color: "var(--neutral-500)" }}
                >
                  {detail.underLabel}
                </span>
              </li>
            </React.Fragment>
          ))}
        </ul>

        {/* Buttons */}

        <div className="flex gap-4 w-full max-w-sm mt-8">
          <button className="w-1/2 py-2 border border-indigo-400 text-indigo-500 rounded-md hover:bg-indigo-50">
            Back
          </button>
          <button
            onClick={onStart}
            className="w-1/2 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Start
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Home;
