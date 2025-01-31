import { FC } from "react";
import { Option, Question } from "../types/quizType";

const QuizCard: FC<{
  question: Question;
  selectedAnswer: number;
  onSelectAnswer: (questionId: number, optionId: number) => void;
}> = ({ question, selectedAnswer, onSelectAnswer }) => (
  <div>
    <h2 className="text-lg font-semibold">{question.description}</h2>
    <div className="mt-4">
      {question.options.map((opt: Option) => (
        <button
          key={opt.id}
          onClick={() => onSelectAnswer(question.id, opt.id)}
          className={`block w-full mt-2 p-2 rounded 
            ${
              selectedAnswer === opt.id
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }
          `}
        >
          {opt.description}
        </button>
      ))}
    </div>
  </div>
);

export default QuizCard;
