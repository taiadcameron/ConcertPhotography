/* eslint-disable react/no-unescaped-entities */
import Button from "../shared/button";
import { motion } from "framer-motion";
import img2 from "../../assets/img1.jpg";
import { useScroll, useTransform } from "framer-motion";

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], ["0%", "-100%"]);
  return (
    <div className="h-fit w-full flex flex-col gap-8 mb-8  pt-28  ">
      <div>
        <h1 className="leading-none">
          <span className="text-butterscotch text-3xl"> About</span> <br />
          Concert Photography
        </h1>
        <p className="text-base text-amethyst v">Featuring Summer</p>
      </div>
      <div className=" flex flex-col gap-4 md:flex-row justify-between ">
        <p className="basis-2/3 text-base">
          In the pulsing heart of London's music scene, 'Concert Photography'
          follows Summer's relentless pursuit to turn fleeting moments into
          timeless art. This intimate documentary reveals the passion,
          challenges, and triumphs behind the lens, as one aspiring photographer
          strives to make her mark in the electrifying world of concert
          photography.
        </p>
        <div>
          <Button text="Watch Now!" />
        </div>
      </div>
      <motion.div
        className="lg:h-[800px] overflow-hidden relative"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          y: {
            duration: 0.4,
            delay: 0.8,
          },
          opacity: {
            delay: 0.7,
          },
        }}
      >
        <motion.div className=" inset-0" style={{ y }}>
          <motion.img
            src={img2}
            alt=""
            className="w-full h-full object-cover"
            whileHover={{ opacity: 0.5, transition: { duration: 0.3 } }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
