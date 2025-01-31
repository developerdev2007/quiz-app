import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center p-10 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Quiz App</h1>
      <button
        onClick={() => navigate("/quiz")}
        className="bg-blue-500 text-white px-6 py-2 rounded"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Home;
