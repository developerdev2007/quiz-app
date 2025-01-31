export interface Option {
  id: number;
  description: string;
  question_id: number;
  is_correct: boolean;
}
export interface Question {
  id: number;
  description: string;
  topic: string;
  options: Option[];
}
export interface Questions {
  questions: Question[];
  id: number;
  title: string;
  duration: number;
  topic: string;
  negative_marks: number;
  correct_answer_marks: number;
}
