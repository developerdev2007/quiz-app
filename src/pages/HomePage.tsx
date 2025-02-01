import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuizStore } from "../store/quizStore";

const Home = () => {
  const navigate = useNavigate();
  const { restartQuiz } = useQuizStore();

  return (
    <div className="flex items-center w-full justify-center h-screen bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900">
      {/* Glowing Card */}
      <motion.div
        className="relative bg-gray-900 text-white sm:p-10 p-6 py-10  rounded-3xl shadow-lg max-w-lg w-full text-center border-4 border-transparent"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Neon Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-4 border-purple-500 animate-pulse blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.5, ease: "easeInOut" }}
        ></motion.div>

        <motion.h1
          className="text-3xl font-extrabold text-purple-400 drop-shadow-lg"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Welcome, Quiz Master!
        </motion.h1>

        <motion.p
          className="text-gray-300 mt-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Test your knowledge and have fun! 🎮
        </motion.p>

        {/* Scoring Info */}
        <motion.div
          className="mt-4 text-lg text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>
            Each correct answer is worth{" "}
            <span className="font-bold text-green-400">+4 points</span>.
          </p>
          <p>
            Each wrong answer will cost you{" "}
            <span className="font-bold text-red-500">-1 point</span>.
          </p>
        </motion.div>

        {/* Animated Glowing Button */}
        <motion.button
          onClick={() => {
            navigate("/quiz");
            restartQuiz();
          }}
          className="mt-6 relative px-8 py-3 text-lg font-semibold uppercase tracking-wider bg-blue-600 text-white rounded-full shadow-lg border-2 border-blue-400 transition-all hover:shadow-blue-500 hover:scale-105"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Start Quiz 🚀
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
