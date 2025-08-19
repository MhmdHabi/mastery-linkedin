export const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" },
  }),
};

export const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
export const fadeDown = {
  hidden: { opacity: 0, y: -80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Navbar
export const itemVariants = {
  hidden: { opacity: 0, y: -6 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i,
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  }),
};

// Drawer
export const drawerVariants = {
  hidden: { x: "100%", opacity: 0 },
  enter: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 28 },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { type: "tween", duration: 0.2 },
  },
};

// Drawer items
export const mobileItemVariants = {
  hidden: { opacity: 0, x: 20 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 + 0.05 * i,
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  }),
};
