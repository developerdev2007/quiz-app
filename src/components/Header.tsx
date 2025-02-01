import { motion } from "framer-motion";
import { Github, LucideLinkedin } from "lucide-react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="relative backdrop-blur-3xl text-white py-4 sm:px-10 xs:px-6 px-2 mb-1 ">
      <motion.div
        className="flex flex-row items-center justify-between gap-2"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="md:text-5xl sm:text-3xl text-2xl  sm:font-extrabold font-semibold"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Link to={"/"}>Quiz Master</Link>
        </motion.h1>
        <motion.p className=":tmd:text-lg text-base hidden sm:flex  ">
          Test your knowledge with fun!
        </motion.p>
        <motion.div
          className=" flex flex-row sm:gap-10 gap-4"
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="https://github.com/developerdev2007/quiz-app.git"
            target="_blank"
          >
            <motion.p
              title="Go To Code"
              className="flex flex-row items-center gap-0.5"
            >
              <Github size={24} />
              Code
            </motion.p>
          </a>
          <a
            href="https://www.linkedin.com/in/dev-gupta-1330642b8/"
            target="_blank"
          >
            <motion.p
              title="Go To Linkedin Profile"
              className="flex flex-row items-center gap-0.5"
            >
              <LucideLinkedin size={24} />
            </motion.p>
          </a>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
