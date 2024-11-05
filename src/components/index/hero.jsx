import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import img2 from "../../assets/img2.jpg";
import triangle from "../../assets/triangle.svg";

function Hero() {
  const controls = useAnimation();
  //animations
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      className="h-screen w-full flex  pt-28 lg:px-32 md:px-12 flex-col md:flex-row px-4"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div className="w-full pt-12 mb-8" variants={itemVariants}>
        <motion.p
          className="mb-4 text-base text-zinc-500"
          variants={itemVariants}
        >
          Freeze the moment.
          <motion.span className="text-amethyst" variants={itemVariants}>
            {" "}
            Feel the music.
          </motion.span>
        </motion.p>
        <motion.h1 className="leading-none">Concert Photography</motion.h1>
      </motion.div>
      <motion.div
        className="w-full flex flex-col justify-center gap-2"
        variants={itemVariants}
      >
        <motion.div
          className="border-white-smoke border-2 p-4"
          variants={itemVariants}
        >
          <img src={img2} alt="" className="w-full h-auto" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <motion.p
            className="w-full flex justify-end text-sm text-zinc-500"
            variants={itemVariants}
          >
            Scroll Down
          </motion.p>
          <motion.div
            className="flex gap-1 w-full justify-end "
            variants={itemVariants}
          >
            <motion.img
              src={triangle}
              alt=""
              className=""
              animate={{ y: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={triangle}
              alt=""
              className=""
              animate={{ y: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
                delay: 0.2,
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
