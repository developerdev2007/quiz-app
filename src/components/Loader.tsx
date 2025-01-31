// Loader.tsx
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <div className="w-24 h-24  border-t-8 border-blue-500 border-double rounded-full  animate-spin"></div>
      <p className="animate-pulse mt-10 text-2xl font-bold text-blue-500 ">
        Loading...
      </p>
    </div>
  );
};

export default Loader;
