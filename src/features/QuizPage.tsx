import { useState } from "react";
import { useFetchQuiz } from "../hooks/useFetchQuiz";
import QuizCard from "../features/QuizCard";

const QuizPage = () => {
  const { data: questions, isLoading } = useFetchQuiz();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  if (isLoading) return <p>Loading...</p>;

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <QuizCard question={questions[currentQuestion]} />
      <div className="mt-4 flex justify-between">
        <button
          onClick={handlePrev}
          disabled={currentQuestion === 0}
          className="px-4 py-2 bg-gray-400 rounded"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentQuestion === questions.length - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
