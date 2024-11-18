import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Team", href: "/team" },
  { title: "BTS", href: "/behind-the-scenes" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact", href: "/contact" },
  { title: "Donations", href: "/" },
  { title: "Blog", href: "/blog" },
];

//animations

//nav menu starts at y0 then animates to full screen, exit goes back to 0
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

//makes nav bar come down from top when page loaded
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

//comp for each nav link
// eslint-disable-next-line react/prop-types
const NavLink = ({ title, href, toggleMenu }) => {
  const navigate = useNavigate();

  //nav link goes to set href
  const handleClick = (event) => {
    event.preventDefault();
    toggleMenu();
    setTimeout(() => navigate(href));
  };

  return (
    <motion.div
      variants={NavLinkVar}
      className="overflow-hidden"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a
        href={href}
        className="text-4xl md:text-6xl uppercase font-semibold"
        onClick={handleClick}
      >
        {title}
      </a>
    </motion.div>
  );
};

//nav bar and menu
const Nav = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <header>
      <motion.nav
        className="navbar fixed flex justify-between items-center z-10 w-full px-5 md:px-12 border-b border-b-zinc-500 bg-night py-2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="h-fit"
        >
          <Menu
            color="white"
            size={32}
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </motion.div>
        <div className="flex items-center gap-4">
          {" "}
          <p className="text-lg cursor-pointer">Watch Now</p>
          <a href="/">
            <img src={logo} alt="logo" className="h-16" />
          </a>
        </div>
      </motion.nav>
      {"Nav menu"}
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
              <motion.div
                className="text-night cursor-pointer"
                onClick={toggleMenu}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 0, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <X size={32} />
                </motion.div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 0, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="text-night"
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
