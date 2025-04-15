import React from "react";
import { Header } from "./components";
import { Home, Quiz, Results } from "./pages";

import { useGetQuestions } from "./hooks/useGetQuestions";

const App = () => {
  const [score, setScore] = React.useState(0);
  const [isStarted, setIsStarted] = React.useState(false);
  const [isFinished, setIsFinished] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState([]);

  const { questions } = useGetQuestions();

  const handleStart = () => {
    setIsStarted(true);
    setIsFinished(false);
  };

  const handleFinish = () => {
    setIsFinished(true);
    setIsStarted(false);
  };

  const handleReset = () => {
    setIsFinished(false);
    setIsStarted(false);
    setScore(0);
    setCurrentIndex(0);
    setUserAnswers([]);
  };

  return (
    <>
      <Header />
      {!isStarted && !isFinished && <Home onStart={handleStart} />}
      {isStarted && (
        <Quiz
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          questions={questions}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
          setScore={setScore}
          onFinish={handleFinish}
          onReset={handleReset}
        />
      )}
      {isFinished && (
        <Results score={score} allAnswers={userAnswers} onReset={handleReset} />
      )}
    </>
  );
};

export default App;
