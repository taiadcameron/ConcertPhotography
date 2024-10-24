import img2 from "../../assets/img2.jpg";
import Button from "../shared/button";

function Watch() {
  return (
    <div className=" my-24 flex flex-col  gap-8 mx-5 md:flex-row md:mx-32  ">
      <div className="  basis-2/3 md:basis-1/2 flex flex-col gap-2">
        <h2>Where To Watch</h2>
        <img src={img2} alt="" />
      </div>

      <div className="flex flex-col justify-end basis-1/3 md:basis-1/2">
        <p className="border-t border-l p-2 text-base">
          Experience the raw energy and nostalgia of concert photography through
          the lens of analog film.
          <br />
          <br />
          Our short film takes you behind the scenes with passionate
          photographers as they document live music performances using nothing
          but 35mm cameras and their artistic vision.
        </p>
        <div className="border-l p-2">
          <Button text="Learn More" />
        </div>
      </div>
    </div>
  );
}
export default Watch;
