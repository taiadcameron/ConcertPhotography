import Picturegal from "../components/gallery/picturegal";
import Nav from "../components/shared/nav";
import Footer from "../components/shared/footer";

const Gallery = () => {
  return (
    <>
      <Nav />
      <main className=" bg-white-smoke ">
        <Picturegal />
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
