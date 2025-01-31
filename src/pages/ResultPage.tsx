import React from "react";

const ResultPage: React.FC = () => {
  return (
    <div className="flex w-full justify-center items-center h-screen bg-gradient-to-b from-sky-500 via-cyan-500 to-green-500">
      {/* Outer Container */}
      <div className="relative w-96 p-6 text-white text-center rounded-lg overflow-hidden">
        {/* Rotating Border Effect */}
        <div className="absolute inset-0 w-full h-full animate-spinSlow">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg w-[110%] h-[110%] m-auto"></div>
        </div>

        {/* Inner Content */}
        <div className="relative bg-gray-900 p-8 rounded-lg z-10">
          <h1 className="text-3xl font-bold">Quiz Results</h1>
          <p className="mt-4 text-lg">
            You scored <span className="font-bold text-green-400">8/10</span> 🎉
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
            Retry Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
