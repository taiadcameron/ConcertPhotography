import { motion, useTransform, useScroll } from "framer-motion";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";

export function Hero() {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 1.5]);
  return (
    <div className="flex flex-col lg:flex-row  pt-32 pb-14   h-screen justify-between">
      <div>
        <h1 className="leading-none mb-4">
          The <span className="text-butterscotch">Team</span>
        </h1>
        <p className="lg:w-2/3 text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quod
          soluta architecto? Minus perspiciatis distinctio ipsam molestiae.
          Velit officia voluptatum illo quibusdam? Laudantium modi totam aliquid
          mollitia blanditiis incidunt iure.
        </p>
      </div>
      <div className="flex items-end mt-8 overflow-hidden lg:overflow-visible object-center">
        <motion.div
          style={{ scale }}
          className="  lg:right-0 lg:origin-bottom-right  "
        >
          <div>
            <img src={img1} alt="" className=" " />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
