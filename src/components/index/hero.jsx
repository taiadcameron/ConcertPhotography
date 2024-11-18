import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import heroImg from "../../assets/imgs/trailerimg.jpeg";
import triangle from "../../assets/triangle.svg";

function Hero() {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

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

  const underlineVariants = {
    hidden: { width: "0%" },
    visible: { width: "100%" },
  };

  return (
    <motion.div
      className="selection:text-butterscotch h-screen w-full flex pt-12 md:pt-28 lg:px-32 md:px-12 flex-col md:flex-row px-4"
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
        <motion.h1 className="leading-none">
          Music Through <br /> The Lens
        </motion.h1>
      </motion.div>
      <motion.div className="w-full flex flex-col justify-center gap-2">
        <motion.div
          className="border-white-smoke border-2 p-4 relative"
          variants={itemVariants}
        >
          <img
            src={heroImg}
            alt="Artist on stage performing"
            className="w-full h-auto"
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div className="bg-black bg-opacity-50 px-6 py-3 cursor-pointer">
              <span className="text-white text-lg font-semibold">
                Watch Trailer
              </span>
              <motion.div
                className="h-0.5 bg-white mt-1"
                variants={underlineVariants}
                initial="hidden"
                animate={isHovered ? "visible" : "hidden"}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
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
