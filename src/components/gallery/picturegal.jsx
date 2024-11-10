import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../assets/img1.jpg";
import { X, ArrowRight, ArrowLeft } from "lucide-react";

const images = [
  { src: img1, title: "Concert Night" },
  { src: img1, title: "Backstage Moments" },
  { src: img1, title: "Crowd Enthusiasm" },
  { src: img1, title: "Crowd Enthusiasm" },
  { src: img1, title: "Crowd Enthusiasm" },
  { src: img1, title: "Crowd Enthusiasm" },
  { src: img1, title: "Crowd Enthusiasm" },
  { src: img1, title: "Crowd Enthusiasm" },
  { src: img1, title: "Crowd Enthusiasm" },
  { src: img1, title: "Crowd Enthusiasm" },
  { src: img1, title: "Crowd Enthusiasm" },
  { src: img1, title: "Crowd Enthusiasm" },
  { src: img1, title: "Crowd Enthusiasm" },
  { src: img1, title: "Crowd Enthusiasm" },
  { src: img1, title: "Crowd Enthusiasm" },
  { src: img1, title: "Crowd Enthusiasm" },
  { src: img1, title: "Crowd Enthusiasm" },
  { src: img1, title: "Crowd Enthusiasm" },
  { src: img1, title: "Crowd Enthusiasm" },
  { src: img1, title: "Crowd Enthusiasm" },
  { src: img1, title: "Crowd Enthusiasm" },
  { src: img1, title: "Crowd Enthusiasm" },
  { src: img1, title: "Crowd Enthusiasm" },
  { src: img1, title: "Crowd Enthusiasm" },
  { src: img1, title: "Crowd Enthusiasm" },
];

const Picturegal = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const closeImage = (e) => {
    e.stopPropagation();
    setSelectedImage();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="pt-40 pb-20 lg:mx-32 md:mx-12 mx-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-night outside border-night w-fit  mb-8 text-shaddow"
      >
        Gallery
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            layoutId={index}
            onClick={() => setSelectedImage({ ...image, index })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer border-night border-2 p-2"
            variants={itemVariants}
          >
            <motion.img
              src={image.src}
              alt={image.title}
              className="w-full h-auto"
            />
            <motion.p className="mt-2 text-sm font-semibold text-zinc-700">
              {image.title}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ backgroundColor: "rgba(0,0,0,0)" }}
            animate={{ backgroundColor: "rgba(0,0,0,.8)" }}
            exit={{ backgroundColor: "rgba(0,0,0,0)" }}
            onClick={() => setSelectedImage()}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <motion.div
              layoutId={selectedImage.index}
              className="bg-white p-4 max-w-3xl max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {" "}
              <motion.div className="flex justify-between pb-2">
                <motion.p className=" text-lg font-semibold text-night">
                  {selectedImage.title}
                </motion.p>
                <motion.button onClick={closeImage} className="text-black ">
                  <X size={24} />
                </motion.button>
              </motion.div>
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto"
              />
              <div className="flex justify-between  pt-2">
                <ArrowLeft />
                <ArrowRight />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Picturegal;
