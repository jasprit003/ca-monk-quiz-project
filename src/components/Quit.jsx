import React from "react";

const Quit = ({ setIsOpen, onReset }) => {
  function cancelHandler() {
    setIsOpen(false);
  }

  function handleQuit() {
    onReset();
    setIsOpen(false);
  }
  return (
    <div
      className="px-10 py-5 rounded-2xl flex flex-col place-items-center  gap-12"
      style={{ background: "var(--background-color)" }}
    >
      <div className="text-center" style={{ color: "var(--neutral-600)" }}>
        <p>Are you sure you want to quit?</p>
        <p>None of your answers will be saved.</p>
      </div>

      <div className="flex gap-4">
        <button
          className="text-sm px-8 py-2 min-w-[100px] text-center"
          style={{
            border: "1px solid var(--neutral-200)",
            borderRadius: "8px",
            color: "var(--neutral-500)",
          }}
          onClick={() => cancelHandler()}
        >
          Cancel
        </button>
        <button
          onClick={() => handleQuit()}
          className="text-sm px-8 py-2 min-w-[100px] text-center"
          style={{
            borderRadius: "8px",
            color: "var(--background-color)",
            backgroundColor: "rgb(234, 60, 71)",
          }}
        >
          Quit
        </button>
      </div>
    </div>
  );
};

export default Quit;
