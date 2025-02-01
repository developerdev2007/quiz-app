import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchQuiz } from "../hooks/useFetchQuiz";
import QuizCard from "../features/QuizCard";
import Loader from "../components/Loader";
import { MoveLeft, MoveRight } from "lucide-react";
import { useQuizStore } from "../store/quizStore";
import { motion } from "framer-motion";
import ProgressBr from "../components/ProgressBr";

const QuizPage = () => {
  const {
    currentQuestionIndex: currentQuestion,
    nextQuestion,
    prevQuestion,
    selectAnswer,
    userAnswers,
    setQuestions,
  } = useQuizStore();

  const { data: quiz, isLoading } = useFetchQuiz();
  const navigate = useNavigate();

  useEffect(() => {
    if (quiz) setQuestions(quiz?.questions);
  }, [quiz, setQuestions]);

  useEffect(() => {
    // Auto-scroll to top when question changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentQuestion]);

  if (isLoading) return <Loader />;
  if (!quiz)
    return (
      <p className="text-center text-red-500">Sorry, can't find quiz 😞</p>
    );

  const handleShowResult = () => navigate("/results");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-500">
      {/* Main Container with fade-in effect */}
      <motion.div
        className="p-8 max-w-xl min-w-lg mx-auto bg-blue-900/50  backdrop-blur-2xl bg- rounded-xl shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Quiz Title */}
        <motion.h1
          className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-l from-blue-300 to-green-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {quiz.title}
        </motion.h1>
        <motion.p
          className="text-center text-lg font-light text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Topic: {quiz.topic}
        </motion.p>

        {/* Quiz Card */}
        <QuizCard
          question={quiz.questions[currentQuestion]}
          selectedAnswer={userAnswers[quiz.questions[currentQuestion]?.id]}
          onSelectAnswer={selectAnswer}
        />

        {/* Navigation Buttons with gradient background and scale animation */}
        <div className="mt-6 flex justify-between">
          {currentQuestion > 0 && (
            <motion.button
              onClick={prevQuestion}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 flex items-center gap-3 rounded-lg bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white transition"
            >
              <MoveLeft size={20} />
              Previous
            </motion.button>
          )}

          {currentQuestion < quiz.questions.length - 1 ? (
            <motion.button
              onClick={nextQuestion}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 flex items-center gap-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white transition"
            >
              Next
              <MoveRight size={20} />
            </motion.button>
          ) : (
            <motion.button
              onClick={handleShowResult}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 flex items-center gap-3 rounded-lg bg-gradient-to-r from-green-400 to-green-500 hover:from-green-300 hover:to-green-400 text-white transition"
            >
              See Results
              <MoveRight size={20} />
            </motion.button>
          )}
        </div>

        <ProgressBr />
      </motion.div>
    </div>
  );
};

export default QuizPage;
