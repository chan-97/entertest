import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Question, Result } from "pages";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/question" element={<Question />} />
        <Route path="/result/:resultId" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
