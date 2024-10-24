import img2 from "../../assets/img2.jpg";
import triangle from "../../assets/triangle.svg";

function Hero() {
  return (
    <div className="h-fit w-full flex mb-56 pt-28 lg:px-32 md:px-12 flex-col md:flex-row px-4 ">
      <div className=" w-full  pt-12 mb-8">
        <p className="mb-4 text-base text-zinc-500">
          Freeze the moment.
          <span className="text-amethyst"> Feel the music.</span>
        </p>
        <h1 className="leading-none ">Concert Photography</h1>
      </div>
      <div className=" w-full flex flex-col justify-center gap-2">
        <div className="border-white-smoke border-2  p-4">
          <img src={img2} alt="" />
        </div>
        <div>
          <p className="w-full flex justify-end text-sm text-zinc-500  ">
            Scroll Down
          </p>
          <div className="flex gap-1 w-full justify-end">
            <img src={triangle} alt="" className="w-4 h-4" />
            <img src={triangle} alt="" className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
