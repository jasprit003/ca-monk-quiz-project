import { useEffect, useRef, useState } from "react";

export const useCountdown = (start = 30, triggerKey = null) => {
  const [timeLeft, setTimeLeft] = useState(start);
  const intervalRef = useRef(null);

  useEffect(() => {
    setTimeLeft(start);
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [triggerKey, start]);

  return timeLeft;
};
