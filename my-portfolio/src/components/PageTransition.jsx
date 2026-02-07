import { motion } from "framer-motion";

const PageTransition = () => {
  return (
    <>
    

      {/* Wipe In */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.77, 0, 0.175, 1],
        }}
        style={{ transformOrigin: "top" }}
        className="fixed top-0 left-0 w-full h-screen bg-black z-[9999]"
        
      />
      {/* <motion.div className="absolute inset-0 flex items-center justify-center text-white text-4xl">
  Loading…
</motion.div> */}

      {/* Wipe Out (optional depth) */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{
          delay: 0.1,
          duration: 1,
          ease: [0.77, 0, 0.175, 1],
        }}
        style={{ transformOrigin: "top" }}
        className="fixed top-0 left-0 w-full h-screen bg-violet-600 z-[9998]"
      />
    </>
  );
};

export default PageTransition;
