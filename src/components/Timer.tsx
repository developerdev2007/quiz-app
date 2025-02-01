import { useEffect, useState } from "react";
import { useQuizStore } from "../store/quizStore";
import { useSound } from "../hooks/useSound";

import wrongSound from "/sounds/wrong.mp3";
import { TimerIcon } from "lucide-react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const { nextQuestion, currentQuestionIndex } = useQuizStore(); // Track question changes
  const playWrong = useSound(wrongSound);

  useEffect(() => {
    setTimeLeft(30); // Reset timer on new question

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          playWrong();
          setTimeout(() => {
            nextQuestion();
          }, 500);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval when unmounting
  }, [currentQuestionIndex, nextQuestion]); // Restart timer when the question changes

  return (
    <div className="text-lg font-semibold text-white/80 flex flex-row gap-2 my-2">
      <TimerIcon /> Time Left: {timeLeft}s
    </div>
  );
};

export default Timer;
