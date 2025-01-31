import { useQuery } from "@tanstack/react-query";
import { getQuizData } from "../services/quizService";

export const useFetchQuiz = () =>
  useQuery({ queryKey: ["quiz"], queryFn: getQuizData });
