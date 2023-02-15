import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
