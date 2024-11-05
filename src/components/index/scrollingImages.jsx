import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import image1 from "../../assets/img1.jpg";
import image3 from "../../assets/img1.jpg";
import image2 from "../../assets/img2.jpg";
import image4 from "../../assets/img2.jpg";

// img array and angles
const images = [image1, image2, image3, image4];
const angles = [-5, 5, -5, 5];

const ImageComponent = ({ src, index, totalImages }) => {
  // tracks scrolling
  const { scrollYProgress } = useScroll();

  // animation start and end points
  const start = index / (totalImages + 2);
  const end = (index + 1) / (totalImages + 2);

  // Sets animations based on scroll
  const y = useTransform(scrollYProgress, [start, end], ["100%", "0%"]);
  const scale = useTransform(scrollYProgress, [start, end], [0.9, 1]);
  const rotate = useTransform(
    scrollYProgress,
    [start, end],
    [angles[index] * 2, angles[index]]
  );
  const opacity = useTransform(
    scrollYProgress,
    [start, Math.min(start + 0.1, end)],
    [0, 1]
  );

  return (
    // images
    <motion.div
      style={{ y, scale, rotate, opacity, zIndex: index }}
      className="absolute top-1/4 transform -translate-x-1/2 w-[80%] sm:w-2/3 max-w-lg aspect-[4/4] flex items-center justify-center origin-bottom"
    >
      <img
        src={src}
        alt={`Image ${index + 1}`}
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
      {/* Adds a link to gallery for last image */}
      {index === totalImages - 1 && (
        <Link
          to="/gallery"
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg transition-opacity duration-300 hover:bg-opacity-75"
        >
          <span className="text-white text-3xl font-normal">
            [Go To Gallery]
          </span>
        </Link>
      )}
    </motion.div>
  );
};

// validating types
ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  totalImages: PropTypes.number.isRequired,
};

const ScrollingImages = () => {
  return (
    // scrolling container
    <div className="h-[400vh] relative">
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
        {images.map((src, index) => (
          <ImageComponent
            key={src}
            src={src}
            index={index}
            totalImages={images.length}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollingImages;
