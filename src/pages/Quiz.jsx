import React from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

import { useCountdown } from "../hooks/useCountdown";

import { Container, Progress, Modal, Quit } from "../components";

const Quiz = ({
  questions,
  currentIndex,
  setCurrentIndex,
  userAnswers,
  setUserAnswers,
  setScore,
  onReset,
  onFinish,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [answers, setAnswers] = React.useState([]);
  const [selectedAnswers, setSelectedAnswers] = React.useState(
    Array(4).fill("")
  );

  const timeLeft = useCountdown(30, currentIndex);

  const currentQuestion = questions?.[currentIndex];

  const timer = `0:${timeLeft < 10 ? "0" + timeLeft : timeLeft}`;

  React.useEffect(() => {
    if (timeLeft === 0) {
      nextQuestion();
    }
  }, [timeLeft]);

  function nextQuestion() {
    if (currentQuestion) {
      const questionAnswers = {
        questionId: currentQuestion.id,
        questionText: currentQuestion.question,
        userSelection: [...selectedAnswers],
        correctAnswers: currentQuestion.correctAnswer || [],
        isCorrect: arraysEqual(
          selectedAnswers,
          currentQuestion.correctAnswer || []
        ),
      };

      setUserAnswers((prev) => [...prev, questionAnswers]);
    }

    setAnswers([]);
    setSelectedAnswers(Array(4).fill(""));

    setCurrentIndex((prev) => {
      if (prev < 9) {
        return prev + 1;
      } else {
        const finalScore = userAnswers.filter(
          (answer) => answer.isCorrect
        ).length;
        setScore(finalScore);
        onFinish();
        return prev;
      }
    });
  }

  const arraysEqual = (a, b) => {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };

  const handleOptionClick = (option) => {
    const emptyIndex = selectedAnswers.findIndex((answer) => answer === "");

    if (emptyIndex !== -1) {
      const newSelectedAnswers = [...selectedAnswers];
      newSelectedAnswers[emptyIndex] = option;
      setSelectedAnswers(newSelectedAnswers);

      setAnswers((prev) => [...prev, option]);
    }
  };

  const handleRemoveAnswer = (index) => {
    const option = selectedAnswers[index];

    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[index] = "";
    setSelectedAnswers(newSelectedAnswers);

    setAnswers((prev) => prev.filter((item) => item !== option));
  };

  const allBlanksFilled = selectedAnswers.every((answer) => answer !== "");

  return (
    <Container>
      {isOpen && (
        <Modal>
          <Quit setIsOpen={setIsOpen} onReset={onReset} />
        </Modal>
      )}
      <motion.div
        key={`quiz-container-${currentIndex}`}
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-[975px] rounded-[28px] shadow-2xl p-10"
        style={{ backgroundColor: "var(--background-color)" }}
      >
        <div className="flex justify-between items-baseline">
          <motion.span
            key={`timer-${currentIndex}`}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-xl font-semibold"
            style={{ color: "var(--neutral-600)" }}
          >
            {timer}
          </motion.span>
          <button
            className="px-5 py-2 cursor-pointer"
            style={{
              border: " 2px solid var(--neutral-200)",
              borderRadius: "8px",
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            Quit
          </button>
        </div>
        <Progress currentIndex={currentIndex} />
        <motion.div
          key={`question-content-${currentIndex}`}
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p
            className="text-l text-center font-semibold mt-2"
            style={{ color: "var(--neutral-600" }}
          >
            Select the missing words in the correct order
          </p>
          <article
            className="my-8 text-xl text-left px-11 gap-3 leading-12"
            style={{ color: "var(--neutral-800)" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`question-text-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {currentQuestion?.question
                  .split("_____________")
                  .map((sentence, index) => (
                    <span key={index}>
                      {sentence}
                      {index < 4 && (
                        <motion.span
                          onClick={() =>
                            selectedAnswers[index] && handleRemoveAnswer(index)
                          }
                          initial={{ borderBottomWidth: 0 }}
                          animate={{ borderBottomWidth: 2 }}
                          transition={{ delay: index * 0.15, duration: 0.3 }}
                          style={{
                            borderBottom: "2px solid var(--neutral-600)",
                            display: "inline-block",
                            width: "100px",
                            padding: "0 4px",
                            cursor: selectedAnswers[index]
                              ? "pointer"
                              : "default",
                            backgroundColor: selectedAnswers[index]
                              ? "var(--neutral-100)"
                              : "transparent",
                            textAlign: "center",
                          }}
                        >
                          {selectedAnswers[index] !== "" &&
                            selectedAnswers[index] !== undefined && (
                              <motion.span
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.2 }}
                                className="text-sm text-center px-2.5 py-2"
                                style={{
                                  border: "1px solid var(--neutral-200)",
                                  borderRadius: "8px",
                                }}
                              >
                                {selectedAnswers[index]}
                              </motion.span>
                            )}
                        </motion.span>
                      )}
                    </span>
                  ))}
              </motion.div>
            </AnimatePresence>
          </article>

          {/* options */}
          <motion.div
            key={`options-container-${currentIndex}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex justify-evenly p-8"
            style={{
              border: "2px dashed var(--neutral-200)",
              borderRadius: "4px",
              minHeight: "60px",
            }}
          >
            <AnimatePresence>
              {currentQuestion?.options?.map((option, idx) =>
                answers.includes(option) ? null : (
                  <motion.button
                    key={option}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                    className="px-3 py-1 text-xl"
                    style={{
                      color: "var(--neutral-700)",
                      border: "1px solid var(--neutral-300)",
                      borderRadius: "8px",
                    }}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </motion.button>
                )
              )}
            </AnimatePresence>
          </motion.div>

          <div className="flex justify-end items-center">
            <motion.button
              key={`next-button-${currentIndex}-${allBlanksFilled}`}
              whileHover={allBlanksFilled ? { scale: 1.05 } : {}}
              whileTap={allBlanksFilled ? { scale: 0.95 } : {}}
              className="p-6 my-6 ml-auto"
              style={{
                backgroundColor: allBlanksFilled
                  ? "rgba(69, 63, 225, 1)"
                  : null,
                color: allBlanksFilled
                  ? "var(--background-color)"
                  : "var(--neutral-200)",
                border: `1px solid ${
                  allBlanksFilled
                    ? "var(--primary-color)"
                    : "var(--neutral-200)"
                }`,
                borderRadius: "8px",
                cursor: allBlanksFilled ? "pointer" : "not-allowed",
              }}
              onClick={allBlanksFilled ? nextQuestion : null}
            >
              <ArrowRight size={24} />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Quiz;
