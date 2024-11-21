import Picturegal from "../components/gallery/picturegal";
import Nav from "../components/shared/nav";
import Footer from "../components/shared/footer";
import { Helmet } from "react-helmet-async";

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Concert Photography Gallery | Music Through The Lens</title>
        <meta
          name="description"
          content="Explore our stunning gallery of concert photographs. Witness the energy and emotion of live music performances captured through our lenses."
        />
        <meta
          name="keywords"
          content="concert photography, music gallery, live performance photos, music photographer portfolio"
        />
        <meta
          property="og:title"
          content="Concert Photography Gallery | Music Through The Lens"
        />
        <meta
          property="og:description"
          content="Immerse yourself in the world of live music through our captivating concert photography gallery."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://music-through-the-lens.onrender.com/gallery"
        />
        <meta property="og:image" content="../assets/imgs/galimg (2).jpeg" />

        <link
          rel="canonical"
          href="https://music-through-the-lens.onrender.com/gallery"
        />
      </Helmet>{" "}
      <Nav />
      <main className=" bg-white-smoke ">
        <Picturegal />
      </main>{" "}
      <Footer />{" "}
    </>
  );
};

export default Gallery;
