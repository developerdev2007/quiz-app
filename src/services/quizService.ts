// import axios from "axios";
import quizData from "../assets/quizData/quizData.json";
import { Questions } from "../types/quizType";
//*** All this urls are not working that is why i am using local data */
// const API_URL = "https://api.jsonserve.com/Uw5CrX";
// const API_URL = "https://corsproxy.io/?https://api.jsonserve.com/Uw5CrX";
// const API_URL =
//   "https://cors-anywhere.herokuapp.com/https://api.jsonserve.com/Uw5CrX";

export const getQuizData = async (): Promise<Questions> => {
  // const { data } = await axios.get(API_URL, {
  //   headers: {},
  // });

  const data = {
    id: quizData.id,
    title: quizData.title,
    duration: quizData.duration,
    topic: quizData.topic,
    negative_marks: Number(quizData.negative_marks),
    correct_answer_marks: Number(quizData.correct_answer_marks),
    questions: quizData.questions.map((d) => ({
      id: d.id,
      description: d.description,
      topic: d.topic,
      options: d.options.map((o) => ({
        id: o.id,
        description: o.description,
        question_id: o.question_id,
        is_correct: o.is_correct,
      })),
    })),
  };
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000); // Simulate a delay
  });

  // Extract only relevant quiz data
  // return {
  //   title: data.title,
  //   description: data.description,
  //   duration: data.duration,
  //   questions: data.questions.map((q) => ({
  //     id: q.id,
  //     question: q.description,
  //     options: q.options.map((opt) => ({
  //       id: opt.id,
  //       text: opt.description,
  //       isCorrect: opt.is_correct,
  //     })),
  //   })),
  // };
};
