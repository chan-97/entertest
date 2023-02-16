import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Question } from "pages";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Question />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
