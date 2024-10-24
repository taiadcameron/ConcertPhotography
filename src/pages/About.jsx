import Nav from "../components/shared/nav";
import Footer from "../components/shared/footer";
import Hero from "../components/about/hero";
import Summer from "../components/about/summer";
import Extra from "../components/about/extra";
import Watch from "../components/shared/watch";

import Contact from "../components/shared/contact";

import Quote from "../components/about/quote";

import { ParallaxProvider } from "react-scroll-parallax";

const About = () => {
  return (
    <>
      <Nav />
      <main className="lg:mx-32 md:mx-12 mx-4">
        <ParallaxProvider>
          <Hero />
        </ParallaxProvider>
        <Quote />
        <Summer />
        <Extra />
        <Watch />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default About;
