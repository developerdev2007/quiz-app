import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import QuizPage from "../pages/QuizPage";
import ResultPage from "../pages/ResultPage";
const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/results" element={<ResultPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
