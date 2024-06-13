// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { CgArrowTopRight } from "react-icons/cg";
import { BsStarFill } from "react-icons/bs";
import { PiRepeat, PiVan, PiWallet } from "react-icons/pi";
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
          <div className="background-div border border-white background-nike h-5/6 bg-cover bg-center rounded-3xl p-6 flex flex-col justify-between items-start">
            <div>
              <p className="text-3xl font-bold">Our New</p>
              <p className="text-3xl font-bold">Collection</p>
            </div>
            <button className="w-10 h-10 rounded-full bg-primary hover:bg-primary/80 flex items-center justify-center text-[26px] text-black">
              <CgArrowTopRight />
            </button>
          </div>
          <div className="border border-white bg-secondery h-3/6 rounded-3xl flex flex-col p-4">
            <div className="flex justify-between">
              <p className="text-lg">Rating</p>
              <div className="flex gap-2">
                <p className=" text-[50px]">4.8</p>
                <BsStarFill className="text-yellow-400 mt-4" />
              </div>
            </div>
            <hr className="mt-12 m-1" />
            <div className="flex items-start justify-between mt-4">
              <div className="relative">
                <img
                  src="./public/images/moha-jakaar.jpeg"
                  alt=""
                  className="w-8 h-8 rounded-full object-contain relative"
                />
                <button className="w-8 h-8 rounded-full bg-primary  flex items-center justify-center text-[18px] text-black absolute top-0 left-6 ">
                  <CgArrowTopRight />
                </button>
              </div>
              <p className="text-[12px]">
                One of the best shirt <br /> selling brand store
              </p>
            </div>
          </div>
        </div>
        <div className="w-5/6 border border-white rounded-3xl background-sports h-full bg-cover bg-center p-4 px-5 m-0 flex flex-col justify-between">
          <div>
            <p className="text-[36px] font-bold">TOP TREND SHIRTS</p>
            <p className="text-[36px] font-bold">ELEVATE YOUR LOOK</p>
            <button className="bg-primary p-2 text-black rounded-2xl px-6 font-bold mt-3 hover:bg-primary/80">
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

      <motion.section
        className="container max-w-screen-xl py-3 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="w-full flex items-center justify-between px-7 py-10 bg-primary border border-white rounded-3xl">
          <div className="flex items-start gap-4">
            <span className="flex justify-center items-center w-20 h-20 rounded-full bg-white text-black text-[48px]">
              <PiVan />
            </span>
            <div className="flex flex-col text-black mt-1">
              <p className="font-bold text-[19px] mb-1">Worldwide Shipping</p>
              <p className="text-[14px] leading-4 ">
                Experience global delivary <br /> right to your doorstep.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="flex justify-center items-center w-20 h-20 rounded-full bg-white text-black text-[48px]">
              <PiWallet />
            </span>
            <div className="flex flex-col text-black mt-1">
              <p className="font-bold text-[19px] mb-1">Secure Payment</p>
              <p className="text-[14px] leading-4 ">
                Rest assured, your payment <br /> is always safe and secure.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="flex justify-center items-center w-20 h-20 rounded-full bg-white text-black text-[48px]">
              <PiRepeat />
            </span>
            <div className="flex flex-col text-black mt-1">
              <p className="font-bold text-[19px] mb-1">30 Days Free Returns</p>
              <p className="text-[14px] leading-4 ">
                Enjoy 30 days of easy, hassle- <br /> free returns.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default home;
