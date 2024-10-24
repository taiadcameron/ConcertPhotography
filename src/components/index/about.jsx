import img2 from "../../assets/img2.jpg";
import Button from "../shared/button";

function About() {
  return (
    <div className=" mx-4  md:ml-32 ">
      <div className="grid grid-cols-1 grid-rows-1  md:grid-cols-4 md:grid-rows-3  ">
        <div className="col-span-4 md:col-span-2 mb-4 ">
          <h2 className="leading-none">
            <span className="text-butterscotch ">
              Capturing the Beat: <br />
            </span>
            A Lens on Concert Photography
          </h2>
        </div>
        <div className="row-start-2   md:row-span-2 p-3 pl-0 md:row-start-2  border-t border-l md:border-l-0">
          <img src={img2} alt="" />
        </div>
        <div className="border-b border-l  row-start-4 col-span-4 md:col-span-2 md:row-span-1  md:row-start-2">
          <p className="text-base mb-4  p-2">
            Analog Nights dives into the thrilling world of concert photography.
            Follow three photographers capturing live music moments on film,
            from packed venues to backstage drama. This 15-minute documentary
            celebrates the art of freezing musical performances in time,
            showcasing the passion and challenges behind each shot.
            <br />
            <br />
            Directed by Emma Reeves, it a tribute to music and photography,
            revealing how a single image can capture an entire shows essence.
          </p>
        </div>
        <div className="col-start-2 row-start-5 md:col-start-4 md:row-start-3 w-fit h-fit  p-2 border-b border-l">
          <Button text="Learn More" />
        </div>
      </div>
    </div>
  );
}
export default About;
