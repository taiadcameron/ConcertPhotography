import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import img1 from "../../assets/imgs/galimg (5).jpeg";
import img2 from "../../assets/imgs/galimg (11).jpeg";
import img3 from "../../assets/imgs/galimg (6).jpeg";

export function Hero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const API_URL = process.env.API_URL || "http://localhost:3000";

  const NewsletterSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/createNLEmail`, { name, email })
      .then((response) => {
        console.log(response.data);
        setName("");
        setEmail("");
        // Note: closePopup() is removed as it's not defined in this component
      })
      .catch((err) => console.log(err));
  };

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
    <div className="flex flex-col pt-24">
      <div className="flex flex-col gap-12 md:gap-44 md:flex-row justify-between mb-32">
        <motion.div
          className="flex flex-col justify-end basis-2/3 gap-2"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h1 className="text-night leading-snug text-shaddow">Blog</h1>
          <p className="text-night text-base">
            Get exclusive Behind The Scenes content and updated screening
            locations and timings.{" "}
          </p>
          <div>
            <form onSubmit={NewsletterSubmit} className="flex flex-col gap-2">
              <input
                type="text"
                name="newsletter-Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="px-4 py-2 border-2 border-night focus:border-amethyst focus:outline-none transition-colors duration-200"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="px-4 py-2 border-2 border-night focus:border-amethyst focus:outline-none transition-colors duration-200"
                required
              />
              <button
                type="submit"
                className="bg-night text-white px-6 py-2 hover:bg-amethyst transition-colors duration-200"
              >
                Sign Up
              </button>
            </form>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col gap-4 basis-3/4"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src={img1}
            alt="Singer with arms up on stage"
            className=" object-cover"
          />
          <div className="flex gap-4">
            <div className="w-full ">
              <img src={img2} alt="drummer on stage" className="" />
            </div>
            <div className="w-full">
              <img src={img3} alt="singer on stage" className="" />
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
              <img src={img2} alt="" />
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
        <a href="Article1">
          <motion.div
            className="flex flex-col border-2 border-night max-w-96 p-2 gap-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="border-2 border-night p-2">
              <img src={img3} alt="CHANGE" />
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
          </motion.div>{" "}
        </a>
      </div>
    </div>
  );
}

export default Hero;
