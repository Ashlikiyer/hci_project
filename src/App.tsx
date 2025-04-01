import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./page/Homepage";
import About from "./page/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
