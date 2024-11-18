/* eslint-disable react/no-unescaped-entities */
import Hero from "../components/index/hero";
import Nav from "../components/shared/nav";
import About from "../components/index/about";
import Team from "../components/index/team";

import Watch from "../components/shared/watch";
import Contact from "../components/shared/contact";
import Footer from "../components/shared/footer";
import ScrollingImages from "../components/index/scrollingImages";
import PopUp from "../components/index/popup";
const Index = () => {
  return (
    <>
      <Nav />
      <main>
        <PopUp />
        <Hero />
        <About />
        <Team />
        <ScrollingImages />
        <Watch />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
