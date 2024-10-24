import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/index";
import About from "./pages/about";
import Team from "./pages/Team";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
