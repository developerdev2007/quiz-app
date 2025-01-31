import { useState } from "react";
import { useFetchQuiz } from "../hooks/useFetchQuiz";
import QuizCard from "../features/QuizCard";
import Loader from "../components/Loader";
import { MoveLeft, MoveRight } from "lucide-react";

const QuizPage = () => {
  const { data: quiz, isLoading } = useFetchQuiz();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: number;
  }>({});

  if (isLoading) return <Loader />;
  if (!quiz) return <p className="">Sorry can't find quiz</p>;
  console.log({ quiz });
  const handleAnswerSelect = (questionId: number, optionId: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="p-6 max-w-md md:min-w-md lg:min-w-lg md:min-h-96  mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-3xl  text-slate-700 font-sans mb-auto font-semibold text-center  ">
        {quiz.title}
      </h1>
      <p className="text-center text-lg font-light text-gray-500 leading-10 ">
        Topic : {"  "}
        {quiz.topic}
      </p>
      <QuizCard
        question={quiz.questions[currentQuestion]}
        selectedAnswer={selectedAnswers[quiz?.questions[currentQuestion]?.id]}
        onSelectAnswer={handleAnswerSelect}
      />
      <div className="mt-4 gap-0.5 flex justify-between">
        {currentQuestion !== 0 && (
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className=" px-4 py-2 flex flex-row gap-3 items-center justify-around bg-gray-500 text-white rounded"
          >
            <MoveLeft
              className="hover:-translate-x-1  text-white text-xl"
              size={20}
            />
            Previous
          </button>
        )}
        {currentQuestion !== quiz.questions.length - 1 && (
          <button
            onClick={handleNext}
            disabled={currentQuestion === quiz.questions.length - 1}
            className="px-4 py-2 flex  flex-row gap-3 items-center justify-around bg-blue-500 text-white rounded"
          >
            Next{" "}
            <MoveRight
              className="hover:translate-x-1  text-white text-xl"
              size={20}
            />
          </button>
        )}
      </div>

      <div className="text-center text-gray-600 text-lg ">
        {currentQuestion + 1}/{quiz.questions.length}
      </div>
    </div>
  );
};

export default QuizPage;
