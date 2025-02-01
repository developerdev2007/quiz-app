import { FC } from "react";
import { Option, Question } from "../types/quizType";
import { useQuizStore } from "../store/quizStore";
import { useSound } from "../hooks/useSound";
import { motion } from "framer-motion";

import correct from "/sounds/correct.mp3";
import wrong from "/sounds/wrong.mp3";
import Timer from "../components/Timer";

const QuizCard: FC<{
  question: Question;
  selectedAnswer: number;
  onSelectAnswer: (
    questionId: number,
    optionId: number,
    isCorrect: boolean
  ) => void;
}> = ({ question, selectedAnswer, onSelectAnswer }) => {
  const {
    currentQuestionIndex: questionNo,
    nextQuestion,
    setCorrectAnswered,
  } = useQuizStore();
  const playCorrect = useSound(correct);
  const playWrong = useSound(wrong);

  function handleClick(opt: Option) {
    onSelectAnswer(question.id, opt.id, opt.is_correct);

    if (opt.is_correct) {
      playCorrect();
      setCorrectAnswered();
    } else {
      playWrong();
    }
    setTimeout(() => {
      nextQuestion();
    }, 500);
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }} // Initial state: slightly up and transparent
      animate={{ opacity: 1, x: 0 }} // Animated state: fully visible and normal position
      transition={{ duration: 1 }} // Smooth transition for 0.5 seconds
      className="p-6 rounded-lg relative"
    >
      <Timer />
      {/* Question Text with animation */}
      <motion.h2
        className="text-lg font-semibold"
        initial={{ opacity: 0, y: -100 }} // Initial state: from left
        animate={{ opacity: 1, y: 0 }} // Animated state: back to normal position
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Question {questionNo + 1}: {question.description}
      </motion.h2>

      <div className="mt-4">
        {question.options.map((opt: Option) => (
          <motion.button
            key={opt.id}
            onClick={() => handleClick(opt)}
            className={`block w-full mt-2 p-2 rounded transition-all ${
              selectedAnswer === opt.id && opt.is_correct
                ? "bg-green-500 text-white"
                : selectedAnswer === opt.id && !opt.is_correct
                ? "bg-red-500 text-white"
                : "bg-violet-400"
            }`}
            initial={{ opacity: 0, scale: 0.9 }} // Initial state: smaller and transparent
            animate={{ opacity: 1, scale: 1 }} // Animated state: normal size and fully visible
            transition={{ duration: 0.3, delay: 0.2 }}
            whileHover={{
              scale: 1.1, // Slightly enlarge button on hover
              // rotate: 3, // Add a slight rotation effect for fun
              // backgroundColor: "#4299e1", // Change background color on hover
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // Add subtle shadow effect
            }}
            whileTap={{
              scale: 0.95, // Slightly shrink button when clicked
              // rotate: -2, // Slight counter rotation when tapped
              // backgroundColor: "#3182ce", // Change to a darker shade on tap
              boxShadow: "none", // Remove shadow on tap for a more compressed feel
            }}
          >
            {opt.description}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuizCard;
