import { create } from "zustand";
import { Question } from "../types/quizType";

// Define the Quiz State
interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: Record<number, number>; // Stores { questionId: selectedOptionId }
  score: number;
  isQuizCompleted: boolean;
  correctAnswered: number;

  // Actions
  setQuestions: (questions: Question[]) => void;
  setCorrectAnswered: () => void;
  selectAnswer: (
    questionId: number,
    optionId: number,
    isCorrect: boolean
  ) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  restartQuiz: () => void;
}

// Create Zustand Store
export const useQuizStore = create<QuizState>((set) => ({
  questions: [],
  currentQuestionIndex: 0,
  userAnswers: {},
  score: 0,
  isQuizCompleted: false,
  correctAnswered: 0,
  setQuestions: (questions) => set({ questions }),
  setCorrectAnswered: () =>
    set((state) => ({
      correctAnswered: state.correctAnswered + 1,
    })),
  selectAnswer: (questionId, optionId, isCorrect) =>
    set((state) => ({
      userAnswers: { ...state.userAnswers, [questionId]: optionId },
      score: isCorrect ? state.score + 4 : state.score - 1, // Update score
    })),

  nextQuestion: () =>
    set((state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        console.log("Moving to next question:", state.currentQuestionIndex + 1);
        return { currentQuestionIndex: state.currentQuestionIndex + 1 };
      }
      return {};
    }),

  prevQuestion: () =>
    set((state) =>
      state.currentQuestionIndex > 0
        ? { currentQuestionIndex: state.currentQuestionIndex - 1 }
        : {}
    ),

  restartQuiz: () =>
    set({
      currentQuestionIndex: 0,
      userAnswers: {},
      score: 0,
      isQuizCompleted: false,
    }),
}));
