import { motion } from "framer-motion";
import { useQuizStore } from "../store/quizStore";

const ProgressBr = () => {
  const { questions, currentQuestionIndex: currentQuestion } = useQuizStore();

  return (
    // {/* Progress Indicator with a cool gradient text effect */ }
    <motion.div
      className="text-center text-lg mt-4 text-white"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {currentQuestion + 1}/{questions.length}
    </motion.div>
  );
};

export default ProgressBr;
