import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/index.jsx";
import About from "./pages/about.jsx";
import Team from "./pages/Team.jsx";
import Contact from "./pages/contact.jsx";
import Gallery from "./pages/Gallery.jsx";
import BTS from "./pages/BTS.jsx";
import Blog from "./pages/Blog.jsx";
import ScrollToTop from "./components/shared/scrollTop.jsx";

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
