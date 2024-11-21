import React from "react";
import { motion, useInView } from "framer-motion";
import watchImg from "../../assets/imgs/watchImg.webp";
import Button from "../shared/button";

function Watch() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
        duration: 1,
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
        damping: 10,
        stiffness: 40,
        duration: 1.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="my-24 flex flex-col gap-8 mx-5 md:flex-row md:mx-32 flex-col-reverse"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        className="basis-2/3  flex flex-col gap-2"
        variants={itemVariants}
      >
        <motion.img
          src={watchImg}
          alt="singer on stage preforming"
          variants={itemVariants}
        />
      </motion.div>

      <motion.div
        className="flex flex-col justify-end basis-1/3 md:basis-1/2"
        variants={itemVariants}
      >
        <motion.h2 variants={itemVariants}>
          Where To <span className="text-butterscotch">Watch</span>{" "}
        </motion.h2>
        <motion.p
          className="border-t border-l p-2 text-base"
          variants={itemVariants}
        >
          Experience the raw energy and nostalgia of concert photography through
          the lens of analog film.
          <br />
          <br />
          Our short film takes you behind the scenes with passionate
          photographers as they document live music performances using nothing
          but 35mm cameras and their artistic vision.
        </motion.p>
        <motion.div className="border-l p-2" variants={itemVariants}>
          <Button text="Watch Now!" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Watch;
