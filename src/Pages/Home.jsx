// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
const home = () => {
  return (
    <>
      <motion.section
        className="container max-w-screen-xl py-3 px-6 flex gap-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="w-3/6  flex flex-col gap-6">
          <div className="background-div border border-white background-nike h-5/6 bg-cover bg-center rounded-3xl"></div>
          <div className="border border-white bg-secondery h-3/6 rounded-3xl"></div>
        </div>
        <div className="w-5/6 border border-white rounded-3xl background-sports h-full bg-cover bg-center p-4 px-5 m-0 flex flex-col justify-between">
          <div>
            <p className="text-[36px] font-bold">TOP TREND SHIRTS</p>
            <p className="text-[36px] font-bold">ELEVATE YOUR LOOK</p>
            <button className="bg-primary p-2 text-black rounded-2xl px-6 font-bold mt-3">
              SHOP NOW
            </button>
          </div>
          <div className="pt-80">
            <p className="font-bold text-2xl mb-1">Top Trend Shirts:</p>
            <p className="text-sm text-gray-300">
              Elevate Your Look" is your go-to destination
            </p>
            <p className="text-sm text-gray-300">
              For premium and stylish jurseys.
            </p>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default home;
