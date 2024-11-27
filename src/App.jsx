import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";

const Index = lazy(() => import("@/pages/IndexPage"));
const About = lazy(() => import("@/pages/AboutPage"));
const Team = lazy(() => import("@/pages/TeamPage"));
const Contact = lazy(() => import("@/pages/ContactPage"));
const Gallery = lazy(() => import("@/pages/GalleryPage"));
const BTS = lazy(() => import("@/pages/BTSPage"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const Blog = lazy(() => import("@/pages/BlogPage"));

const Article1 = lazy(() => import("@/pages/BlogArticles/A1"));
import ScrollToTop from "./components/shared/scrollTop";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/Behind-The-Scenes" element={<BTS />} />
          <Route path="/Blog" element={<Blog />} />
          <Route
            path="/5-Essential-Concert-Photography-Tips-for-Aspiring-Music-Photographers"
            element={<Article1 />}
          />
          <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
