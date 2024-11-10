import { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";

function TeamScroll() {
  const { scrollY } = useScroll();
  const [currentIndex, setCurrentIndex] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const teamMembers = [
    {
      job: "Director",
      name: "Anna",
      image: img1,
      text: "Anna is our visionary director, bringing stories to life with her unique perspective and creative flair.",
    },
    {
      job: "Producer",
      name: "Kate",
      image: img2,
      text: "Kate, our talented producer, ensures every project runs smoothly from concept to completion.",
    },
    {
      job: "Editor",
      name: "Emma",
      image: img1,
      text: "Emma's keen eye for detail makes her an exceptional editor, crafting seamless narratives from raw footage.",
    },
    {
      job: "Sound Designer",
      name: "Alex",
      image: img2,
      text: "Alex, our sound design wizard, creates immersive audio landscapes that elevate every production.",
    },
  ];

  // Define trigger points
  const triggerPoints = [700, 1050, 1350, 1700, 2000];

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (
      latest < triggerPoints[0] ||
      latest >= triggerPoints[triggerPoints.length - 1]
    ) {
      setCurrentIndex(undefined);
      setIsVisible(false);
      setProgress(0);
    } else {
      setIsVisible(true);
      let newIndex = triggerPoints.findIndex(
        (point, i) => latest >= point && latest < triggerPoints[i + 1]
      );
      // Ensure the index is within bounds
      newIndex = Math.min(newIndex, teamMembers.length - 1);
      setCurrentIndex(newIndex);

      // Calculate progress
      const sectionStart = triggerPoints[0];
      const sectionEnd = triggerPoints[triggerPoints.length - 1];
      const currentProgress =
        (latest - sectionStart) / (sectionEnd - sectionStart);
      setProgress(Math.min(Math.max(currentProgress, 0), 1));
    }
  });

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    enter: { y: 50, opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 },
  };

  return (
    <div className="md:h-[1700px] h-[1950px] w-full">
      {/* Loading Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-butterscotch z-50"
        style={{ scaleX: progress, transformOrigin: "0%" }}
      />

      <motion.div
        className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full"
        variants={contentVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div className="flex flex-col px-4 md:px-0 md:flex-row gap-12 justify-center">
          <div className="flex flex-col">
            <AnimatePresence mode="wait">
              {currentIndex !== undefined && (
                <>
                  <motion.h2
                    key={`job-${currentIndex}`}
                    variants={itemVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="w-36 z-10"
                  >
                    {teamMembers[currentIndex].job}
                  </motion.h2>
                  <motion.h4
                    key={`name-${currentIndex}`}
                    variants={itemVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-amethyst text-3xl"
                  >
                    {teamMembers[currentIndex].name}
                  </motion.h4>
                </>
              )}
            </AnimatePresence>
          </div>
          <AnimatePresence mode="wait">
            {currentIndex !== undefined && (
              <motion.div
                key={`image-${currentIndex}`}
                variants={itemVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ delay: 0.2, duration: 0.4 }}
                className="basis-1/4"
              >
                <img
                  src={teamMembers[currentIndex].image}
                  alt=""
                  className="w-full h-auto"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {currentIndex !== undefined && (
              <motion.div
                key={`text-${currentIndex}`}
                variants={itemVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ delay: 0.3, duration: 0.4 }}
                className="basis-1/4 flex items-end"
              >
                <p>{teamMembers[currentIndex].text}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default TeamScroll;
