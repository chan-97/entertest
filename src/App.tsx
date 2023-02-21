import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Content, Result } from "pages";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/result/:totalA" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
