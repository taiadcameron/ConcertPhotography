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
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Music Through The Lens | Concert Photography Documentary</title>
        <meta
          name="description"
          content="Explore the world of concert photography through our documentary. Witness the passion, challenges, and artistry behind capturing live music performances."
        />
        <meta
          name="keywords"
          content="concert photography, music documentary, live music, photographer, behind the scenes"
        />
        <meta
          property="og:title"
          content="Music Through The Lens | Concert Photography Documentary"
        />
        <meta
          property="og:description"
          content="Dive into the captivating world of concert photography. Our documentary showcases the art, passion, and challenges of capturing live music moments."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://music-through-the-lens.onrender.com"
        />
        <meta property="og:image" content="../assets/imgs/galimg (2).webp" />
        <link
          rel="preload"
          as="image"
          href="/src/assets/imgs/trailerimg.webp"
        />{" "}
        <link
          rel="canonical"
          href="https://music-through-the-lens.onrender.com"
        />
      </Helmet>{" "}
      <Nav />
      <main>
        <PopUp />
        <Hero />
        <About />
        <Team />
        {/* <ScrollingImages /> */}
        <Watch />
        <Contact />
      </main>{" "}
      <Footer />{" "}
    </>
  );
};

export default Index;
