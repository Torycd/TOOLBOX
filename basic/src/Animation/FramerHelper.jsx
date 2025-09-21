import { motion, AnimatePresence } from "framer-motion";

function FramerHelper({ children }) {
  const modalVariants = {
    hidden: { scale: 0.8 }, // start smaller
    visible: {
      scale: 1, // grow to full size
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
    exit: { scale: 0.8, transition: { duration: 0.2 } }, // shrink back
  };
  return (
    <AnimatePresence>
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className=""
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default FramerHelper;
