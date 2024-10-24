/* eslint-disable react/no-unescaped-entities */
import Hero from "../components/index/hero";
import Nav from "../components/shared/nav";
import About from "../components/index/about";
import Button from "../components/shared/button";
import Watch from "../components/shared/watch";
import Contact from "../components/shared/contact";
import Footer from "../components/shared/footer";
import img2 from "../assets/img2.jpg";
import ScrollingImages from "../components/index/scrollingImages";

const Index = () => {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <div className=" my-24 mb-44  flex flex-col  gap-8 mx-5 md:flex-row md:mx-32  items-center">
          <div className="  basis-2/3 flex flex-col gap-2">
            <div>
              <div className="text-white-smoke text-6xl ">"</div>
              <p className="text-base text-zinc-500">James Hans</p>
              <p className="text-sm text-amethyst">Co-Director</p>
            </div>
            <p className="font-semibold leading-snug">
              Experience the raw energy and nostalgia of concert photography
              through the lens of analog film. Our short film takes you behind
              the scenes with passionate photographers as they document live
              music performances using nothing but 35mm cameras and their
              artistic vision.
            </p>
            <div>
              <Button text="View The Team" onClick={console.log("hi")} />
            </div>
          </div>

          <div className="basis-1/3">
            <img src={img2} alt="" />
          </div>
        </div>
        <ScrollingImages />
        <Watch />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
