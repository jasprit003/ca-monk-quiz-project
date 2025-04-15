import React from "react";

import { quizData } from "../../data";

export const useGetQuestions = () => {
  const [questions, setQuestions] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      try {
        setQuestions(quizData.data.questions);
      } catch (err) {
        console.error("Error loading questions:", err);
        setError(err);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return { questions, error };
};
