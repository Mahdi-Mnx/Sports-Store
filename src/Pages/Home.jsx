// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgArrowTopRight } from "react-icons/cg";
import { BsStarFill } from "react-icons/bs";
import { PiRepeat, PiVan, PiWallet } from "react-icons/pi";
import productData from "../Components/Data";
import { useState } from "react";
import { Link } from "react-router-dom";

const home = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [rowsToShow, setRowsToShow] = useState(3); // Start by showing 3 column
  const itemsPerRow = 2; // Number of rows
  const totalItemsToShow = rowsToShow * itemsPerRow; // Total items to show based on rows

  const handleLoadMore = () => {
    setRowsToShow(rowsToShow + 2); // Load 3 more rows when clicked
  };
  return (
    <>
      <motion.section
        className="container max-w-screen-xl py-3 px-6 flex gap-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="w-5/6 border border-white rounded-3xl background-sports h-full bg-cover bg-center p-4 px-5 m-0 flex flex-col justify-between">
          <div className="text-white">
            <p className="text-[35px] font-bold">NASA-INSPIRED FOOTBALL </p>
            <p className="text-[35px] font-bold">SHOES DESIGNED</p>
            <button className="bg-primary p-2 text-white rounded-xl px-6 font-bold mt-3 hover:bg-primary/90">
              SOON <CgArrowTopRight className=" inline-block text-2xl" />
            </button>
          </div>
          <div className="pt-80 text-white">
            <p className="font-bold text-2xl mb-1">Top Trend Shoes 2025</p>
            <p className="text-sm text-gray-300">
              To give you a futuristic football experience
            </p>
            <p className="text-sm text-gray-300">
              For premium and stylish jurseys.
            </p>
          </div>
        </div>
        <div className="w-3/6  flex flex-col gap-4">
          <div className="background-div border border-white background-nike h-5/6 bg-cover bg-center rounded-3xl p-6 flex flex-col justify-between items-start">
            <div className="text-white">
              <p className="text-3xl font-bold">Our New</p>
              <p className="text-3xl font-bold">Collection</p>
            </div>
            <button className="w-10 h-10 rounded-full bg-orange transition hover:bg-orange/90 flex items-center justify-center text-[26px] text-black">
              <CgArrowTopRight />
            </button>
          </div>
          <div className="border border-whit small-info h-3/6 rounded-3xl flex flex-col p-4">
            <div className="flex justify-between text-white">
              <p className="text-lg">Rating</p>
              <div className="flex gap-2">
                <p className=" text-[50px]">4.8</p>
                <BsStarFill className="text-orange mt-4" />
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
                <button className="w-8 h-8 rounded-full bg-orange  flex items-center justify-center text-[18px] text-black absolute top-0 left-6 ">
                  <CgArrowTopRight />
                </button>
              </div>
              <p className="text-[12px] text-white">
                One of the best shirt <br /> selling brand store
              </p>
            </div>
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
        <div className="w-full flex items-center justify-between px-2 py-10 bg-grayishBlue rounded">
          <div className="flex items-start gap-4">
            <span className="flex justify-center items-center w-20 h-20 rounded-full bg-white text-black text-[48px] border border-black">
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
            <span className="flex justify-center items-center w-20 h-20 rounded-full bg-white text-black text-[48px] border border-black">
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
            <span className="flex justify-center items-center w-20 h-20 rounded-full bg-white text-black text-[48px] border  border-black">
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

      <div className="container max-w-screen-xl p-4 px-6 flex items-center justify-between">
        <p className="text-3xl text-black font-bold">New Features</p>
        <button className="bg-primary text-white font-bold hover:bg-primary/90 px-5 py-2 rounded-2xl text-lg border border-white">
          VIEW ALL
        </button>
      </div>

      <motion.section
        className="container max-w-screen-xl px-6 py-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <AnimatePresence>
          <div className="grid grid-cols-3 gap-4 items-center">
            {productData.slice(0, totalItemsToShow).map((item, key) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.3 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col "
              >
                <div key={key} className="rounded-3xl flex flex-col ">
                  <Link to="/product/:id">
                    <img
                      className=" rounded-t-md"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="flex items-center justify-between gap-x-4 pt-2">
                      <div>
                        <span className="text-sm text-orange font-semibold">
                          {item.brand}
                        </span>
                        <p className="text-[18px] font-bold text-wrap ">
                          {item.name}
                        </p>
                        <p className="text-[18px] text-darkGrayishBlue">
                          High-Top Football Boot
                        </p>
                      </div>
                      <p className="text-[20px]">{item.price}</p>
                    </div>
                    <div className="flex items-start pt-5 pb-1">
                      <button className="bg-primary text-white transition py-1 px-3.5 rounded">
                        Add to cart
                      </button>
                      <p id={`added-${key}`} className="mt-2"></p>
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
        {totalItemsToShow < productData.length && (
          <div className="flex justify-center mt-4">
            <button
              onClick={handleLoadMore}
              className=" text-black hover:underline font-semibold mt-7"
            >
              Load More
            </button>
          </div>
        )}
      </motion.section>

      <motion.section
        className="container px-6 py-4 max-w-screen-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="w-full bg-grayishBlue p-4 px-16 flex items-center justify-between rounded-3xl border border-white">
          <img
            className="w-16 h-16"
            src="./public/images/adidas-logo.png"
            alt=""
          />
          <img
            className="w-18 h-12"
            src="./public/images/puma-logo.png"
            alt=""
          />
          <img
            className="w-20 h-20"
            src="./public/images/nike-logo.png"
            alt=""
          />
          <img className="w-10 h-10" src="./public/images/lv-logo.png" alt="" />
          <img
            className="w-24 h-24"
            src="./public/images/gucci-logo.png"
            alt=""
          />
        </div>
      </motion.section>

      <motion.section
        className="container max-w-screen-2xl py-4 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="bg-orange w-full rounded-3xl flex p-6 border border-white">
          <div className="w-1/2 flex flex-col items-start py-16 pl-20 text-black">
            <p className="font-bold text-[40px]">REACH OUT TO US</p>
            <p className="text-[20px]">
              Need assistance or have questions? <br />
              we're just a message away!
            </p>
            <button className="bg-paleOrange hover:bg-white/80 py-2 px-6 rounded-xl font-bold mt-6 text-lg">
              SEND AN EMAIL
            </button>
          </div>
          <img
            className="w-1/2 h-[312px] border border-white rounded-xl ml-20"
            src="./public/images/Sports-shirts.webp"
            alt=""
          />
        </div>
      </motion.section>

      <motion.section
        className="container max-w-screen-2xl py-4 px-6 flex gap-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="w-1/2 bg-slate-200 rounded-3xl h-[360px]"></div>
        <div className="w-1/2 bg-slate-200 rounded-3xl"></div>
      </motion.section>

      <motion.section
        className="container max-w-screen-2xl px-6 py-4 flex gap-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="bg-black w-2/3 h-[380px] rounded-3xl"></div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="h-1/2 bg-grayishBlue rounded-3xl"></div>
          <div className="h-1/2 bg-grayishBlue rounded-3xl"></div>
        </div>
      </motion.section>
    </>
  );
};

export default home;
