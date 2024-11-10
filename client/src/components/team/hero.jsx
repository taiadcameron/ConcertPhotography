import { motion, useTransform, useScroll } from "framer-motion";
import img1 from "../../assets/img1.jpg";

export function Hero() {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 1.5]);
  const y = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col lg:flex-row pt-32 pb-14 h-screen justify-between"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div>
        <motion.h1
          className="leading-none mb-4 "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          The <motion.span className="text-butterscotch">Team</motion.span>
        </motion.h1>
        <motion.p
          className="lg:w-2/3 text-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quod
          soluta architecto? Minus perspiciatis distinctio ipsam molestiae.
          Velit officia voluptatum illo quibusdam? Laudantium modi totam aliquid
          mollitia blanditiis incidunt iure.
        </motion.p>
      </motion.div>
      <motion.div
        className="flex items-end mt-8 overflow-hidden lg:overflow-visible object-center"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.div
          style={{ scale, y }}
          className="lg:right-0 lg:origin-bottom-right"
        >
          <motion.img src={img1} alt="" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
