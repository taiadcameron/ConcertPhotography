import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/index";
import About from "./pages/about";
import Team from "./pages/Team";
import Contact from "./pages/contact";
import Gallery from "./pages/Gallery";
import BTS from "./pages/BTS";
import Blog from "./pages/Blog";
import ScrollToTop from "./components/shared/scrollTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/Behind-The-Scenes" element={<BTS />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
