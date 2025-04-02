import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./page/Homepage";
import About from "./page/About";
import Portfolio from "./page/Portfolio";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
