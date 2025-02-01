import AppRoutes from "./routes/AppRoutes";
import { motion } from "framer-motion";

const App = () => {
  return (
    <motion.div
      className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="w-full rounded-lg ">
        <AppRoutes />
      </div>
    </motion.div>
  );
};

export default App;
