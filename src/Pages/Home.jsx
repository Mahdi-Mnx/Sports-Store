// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
const home = () => {
  return (
    <>
      <motion.section
        className="container max-w-screen-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        hello jacar
      </motion.section>
    </>
  );
};

export default home;
