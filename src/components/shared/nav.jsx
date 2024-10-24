import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Team", href: "/team" },
  { title: "BTS", href: "/" },
  { title: "Trailer", href: "/" },
  { title: "Donations", href: "/" },
];

const menuVar = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const containerVar = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const NavLinkVar = {
  initial: {
    y: "30vh",
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

// eslint-disable-next-line react/prop-types
const NavLink = ({ title, href, toggleMenu }) => {
  return (
    <motion.div
      variants={NavLinkVar}
      className="overflow-hidden"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={href}
        className="text-6xl uppercase font-semibold"
        onClick={toggleMenu}
      >
        {title}
      </Link>
    </motion.div>
  );
};

const Nav = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <header>
      <motion.nav
        className="navbar fixed flex justify-between z-10 w-full px-12 border-b border-b-zinc-500 bg-night"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="py-4 flex justify-between items-center w-full">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Menu
              color="white"
              size={32}
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          </motion.div>
          <div>
            <img src={logo} alt="logo" className="h-16" />
          </div>
          <motion.div
            className="navbar-right flex items-center w-fit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="text-lg cursor-pointer">Watch Now</p>
          </motion.div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVar}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-butterscotch text-night p-10 z-20"
          >
            <div className="flex justify-between">
              <motion.p
                className="text-night cursor-pointer"
                onClick={toggleMenu}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={32} />
              </motion.p>
              <motion.p
                className="text-xl text-night"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Concert Photography
              </motion.p>
            </div>
            <motion.div
              variants={containerVar}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col justify-center items-center h-full gap-7"
            >
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  title={link.title}
                  href={link.href}
                  toggleMenu={toggleMenu}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
