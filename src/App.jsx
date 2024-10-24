import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/index";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
