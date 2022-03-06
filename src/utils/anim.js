const childAnim = {
  initial: {
    clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
    y: 100,
  },
  show: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const parentAnim = {
  initial: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 1.5,
      staggerChildren: 1,
      delay: 0.5,
    },
  },
};

const rocketAnim = {
  initial: {
    translateX: '-200%',
    opacity: 0,
  },
  show: {
    translateX: 0,
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1,
    },
  },
};

const popupAnim = {
  hidden: {
    opacity: 0,
    height: 0,
  },
  show: {
    opacity: 1,
    height: '8rem',
    transition: {
      duration: 0.5,
    },
  },
  showModal: {
    opacity: 1,
    height: '100%',
    transition: {
      duration: 0.5,
    },
  },
};

export { childAnim, parentAnim, rocketAnim, popupAnim };
