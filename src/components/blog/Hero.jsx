import { motion } from "framer-motion";
import img1 from "../../assets/img1.jpg";
import BlogBtn from "./button";

export function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.5, duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-44 md:flex-row justify-between mb-32">
        <motion.div
          className="flex flex-col min-w-72 justify-end basis-2/3 gap-2"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
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
        </motion.div>
        <motion.div
          className="flex flex-col gap-4"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img src={img1} alt="" className="h-[400px]" />
          <div className="flex gap-4">
            <div className="w-full">
              <img src={img1} alt="" className="" />
            </div>
            <div className="w-full">
              <img src={img1} alt="" className="" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 w-full justify-between mb-24">
        <a href="Article1">
          <motion.div
            className="flex flex-col border-2 border-night max-w-96 p-2 gap-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="border-2 border-night p-2">
              <img src={img1} alt="" />
            </div>
            <div className="border-2 border-night p-2">
              <h6 className="text-night font-bold">Lorem ipsum dolor </h6>
              <p className="text-night text-sm border-1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, aperiam quisquam nam voluptate o
              </p>
            </div>
          </motion.div>
        </a>

        <motion.div
          className="flex flex-col border-2 border-night max-w-96 p-2 gap-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="border-2 border-night p-2">
            <img src={img1} alt="" />
          </div>
          <div className="border-2 border-night p-2">
            <h6 className="text-night font-bold">Lorem ipsum dolor </h6>
            <p className="text-night text-sm border-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, aperiam quisquam nam voluptate o
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col border-2 border-night max-w-96 p-2 gap-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="border-2 border-night p-2">
            <img src={img1} alt="" />
          </div>
          <div className="border-2 border-night p-2">
            <h6 className="text-night font-bold">Lorem ipsum dolor </h6>
            <p className="text-night text-sm border-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, aperiam quisquam nam voluptate o
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
