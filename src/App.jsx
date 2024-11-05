import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "@/pages/IndexPage";
import About from "@/pages/AboutPage";
import Team from "@/pages/TeamPage";
import Contact from "@/pages/ContactPage";
import Gallery from "@/pages/GalleryPage";
import BTS from "@/pages/BTSPage";
import Blog from "@/pages/BlogPage";
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
