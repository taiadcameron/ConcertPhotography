import img1 from "../../assets/img1.jpg";
import BlogBtn from "./button";

export function Hero() {
  return (
    <div className="py-24 flex flex-col gap-12">
      <div className="flex flex-col gap-4 md:flex-row justify-between">
        <div className="flex flex-col min-w-72 justify-center basis-1/3 gap-2 mb-4">
          <h1 className="text-night leading-snug text-shaddow">Blog</h1>
          <p className="text-night text-base">
            Sign Up Lorem ipsum, dolor sit amet consectetur{" "}
          </p>
          <div>
            <form className="mb-4">
              <div>
                <input
                  type="email"
                  id="newsletter-email"
                  name="newsletter-email"
                  placeholder="Your Email"
                  className="text-night w-full p-2 bg-transparent border border-night focus:outline-none focus:border-amethyst"
                />
              </div>
            </form>

            <BlogBtn text="Sign Up!" className="w-full" />
          </div>
        </div>
        <div className=" flex justify-center items-center basis-2/3 ">
          <img src={img1} alt="" className="h-96 " />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 w-full justify-between ">
        <div className="flex flex-col border-2 border-night max-w-96 p-2 gap-4  ">
          <div className="border-2 border-night p-2">
            <img src={img1} alt="" />
          </div>
          <div className="border-2 border-night p-2">
            <h6 className="text-night font-bold">Lorem ipsum dolor </h6>

            <p className="text-night text-sm border-1">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, aperiam quisquam nam voluptate o
            </p>
          </div>
        </div>
        <div className="flex flex-col border-2 border-night max-w-96 p-2 gap-4 ">
          <div className="border-2 border-night p-2">
            <img src={img1} alt="" />
          </div>
          <div className="border-2 border-night p-2">
            <h6 className="text-night font-bold">Lorem ipsum dolor </h6>

            <p className="text-night text-sm border-1">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, aperiam quisquam nam voluptate o
            </p>
          </div>
        </div>
        <div className="flex flex-col border-2 border-night max-w-96 p-2 gap-4 ">
          <div className="border-2 border-night p-2">
            <img src={img1} alt="" />
          </div>
          <div className="border-2 border-night p-2">
            <h6 className="text-night font-bold">Lorem ipsum dolor </h6>

            <p className="text-night text-sm border-1">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, aperiam quisquam nam voluptate o
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
