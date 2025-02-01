import React from "react";
import { useQuizStore } from "../store/quizStore";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ResultPage: React.FC = () => {
  const navigate = useNavigate();
  const { score, questions, restartQuiz, correctAnswered } = useQuizStore();

  // Calculate percentage
  const totalQuestions = questions.length;
  // Assuming 4 points per correct answer
  const percentage = Number(
    Math.round((correctAnswered / totalQuestions) * 100)
  );

  return (
    <div className="flex w-full justify-center items-center h-screen bg-gradient-to-b from-sky-500 via-cyan-500 to-green-500">
      {/* Outer Container with Animation */}
      <motion.div
        className="relative max-w-lg p-6 text-white text-center rounded-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Rotating Border Effect */}
        <div className="absolute inset-0 w-full h-full animate-spinSlow">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg w-[110%] h-[110%] m-auto"></div>
        </div>

        {/* Inner Content */}
        <div className="relative bg-gray-900 p-8 rounded-lg z-10">
          <h1 className="text-3xl font-bold">Quiz Results</h1>
          <p className="mt-4 text-lg">
            You scored{" "}
            <span className="font-bold text-green-400">
              {score}/{totalQuestions * 4}
            </span>{" "}
            🎉
          </p>
          <p className="mt-4 text-xl text-gray-300">
            You answered {correctAnswered} out of {totalQuestions} questions
            correctly.
          </p>
          <p className="text-lg text-gray-400 mt-2">
            That's {Number(percentage)}% correct!
          </p>

          {/* Button Section */}
          <div className="mt-6 flex justify-center gap-4">
            <motion.button
              onClick={() => {
                navigate("/quiz");
                restartQuiz();
              }}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Retry Quiz
            </motion.button>
            <motion.button
              onClick={() => navigate("/")}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Go to Home
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResultPage;
