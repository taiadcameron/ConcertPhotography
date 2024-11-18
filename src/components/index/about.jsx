import React from "react";
import { motion, useInView } from "framer-motion";
import aboutImg from "../../assets/imgs/aboutimg.jpeg";
import Button from "../shared/button";

function About() {
  //animations
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 50,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="w-full flex justify-center px-4">
      <motion.div
        ref={ref}
        className="w-fit"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className=" max-w-7xl grid grid-cols-1 grid-rows-1 md:grid-cols-3 mdgrid-rows-3">
          <motion.div
            className="col-span-4 md:col-span-2   mb-4"
            variants={itemVariants}
          >
            <h2 className="leading-none">
              <span className="text-butterscotch">
                Capturing the Beat: <br />
              </span>
              A Lens on Concert Photography
            </h2>
          </motion.div>
          <motion.div
            className="row-start-2 md:row-span-2 p-3 pl-0 md:row-start-2 border-t border-l md:border-l-0 "
            variants={itemVariants}
          >
            <img src={aboutImg} alt="artist on stage" />
          </motion.div>
          <motion.div
            className="border-b border-l row-start-4 col-span-4 md:col-span-2 md:row-span-1 md:row-start-2"
            variants={itemVariants}
          >
            <p className="text-base mb-4 p-2">
              Analog Nights dives into the thrilling world of concert
              photography. Follow three photographers capturing live music
              moments on film, from packed venues to backstage drama. This
              15-minute documentary celebrates the art of freezing musical
              performances in time, showcasing the passion and challenges behind
              each shot.
              <br />
              <br />
              Directed by Emma Reeves, it a tribute to music and photography,
              revealing how a single image can capture an entire shows essence.
            </p>
          </motion.div>
          <motion.div
            className="col-start-2 row-start-5 md:col-start-4 md:row-start-3 w-fit h-fit p-2 border-b border-l"
            variants={itemVariants}
          >
            <Button text="Learn More" to="/about" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
