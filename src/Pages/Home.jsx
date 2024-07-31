import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgArrowTopRight } from "react-icons/cg";
import { BsStarFill } from "react-icons/bs";
import { PiRepeat, PiVan, PiWallet } from "react-icons/pi";
import productData from "../Data/Data";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "../Components/CartContext";
import toast, { Toaster } from "react-hot-toast";
import person from "/images/moha-jakaar.jpeg";
import adidas from "/images/adidas-logo.png";
import puma from "/images/puma-logo.png";
import nike from "/images/nike-logo.png";
import gucci from "/images/gucci-logo.png";
import lv from "/images/lv-logo.png";
import logo from "/images/logo1.png";
import main from "/images/main.png";
import video from "/video/logo.mp4";

const Home = () => {
  document.title = "Home - GOG Store";
  const [rowsToShow, setRowsToShow] = useState(3); // Start by showing 3 rows
  const itemsPerRow = 2; // Number of items per row
  const totalItemsToShow = rowsToShow * itemsPerRow; // Total items to show based on rows
  const { cart, dispatch } = useCart();

  const handleLoadMore = () => {
    setRowsToShow(rowsToShow + 2); // Load 2 more rows when clicked
  };

  const navigate = useNavigate();

  const handleClickStore = () => {
    navigate("/store");
  };

  const handleClickContact = () => {
    navigate("/contact");
  };

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      toast("Product already in cart", {
        icon: "🚫",
      });
      return;
    }
    dispatch({ type: "ADD_TO_CART", payload: item });
    toast.success("Added to cart successfully.");
  };

  const itemsToShow = productData.slice(0, totalItemsToShow); // Define itemsToShow

  return (
    <>
      <motion.section
        className="container max-w-screen-xl py-3 px-6 flex flex-col lg:flex-row gap-4 pt-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="w-full lg:w-5/6 border border-white rounded-xl background-sports h-[300px] md:h-[500px] bg-cover bg-center p-4 px-5 m-0 flex flex-col justify-between">
          <div className="text-white">
            <p className="text-[25px] lg:text-[35px] font-bold">
              NASA-INSPIRED FOOTBALL SHOES DESIGNED
            </p>
            <button className="bg-primary p-2 text-white rounded-xl px-6 font-bold mt-3 hover:bg-primary/90">
              SOON <CgArrowTopRight className=" inline-block text-2xl" />
            </button>
          </div>
          <div className=" text-white">
            <p className="font-bold text-xl lg:text-2xl mb-1">
              Top Trend Shoes 2025
            </p>
            <p className="text-sm text-gray-300">
              To give you a futuristic football experience
            </p>
            <p className="text-sm text-gray-300">
              For premium and stylish jerseys.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-3/6 flex flex-col gap-4">
          <div className="background-div border border-white background-nike h-[300px] md:h-64 lg:h-5/6 bg-cover bg-center rounded-xl p-6 flex flex-col justify-between items-start">
            <div className="text-white">
              <p className="text-2xl lg:text-3xl font-bold">Our New</p>
              <p className="text-2xl lg:text-3xl font-bold">Collection</p>
            </div>
            <button className="w-10 h-10 rounded-full bg-primary transition hover:bg-primary/90 flex items-center justify-center text-[26px] text-black">
              <CgArrowTopRight />
            </button>
          </div>
          <div className="border border-white small-info bg-cover bg-center h-[180px] md:h-64 lg:h-5/6 rounded-xl flex flex-col p-4">
            <div className="flex justify-between text-white">
              <p className="text-lg">Rating</p>
              <div className="flex gap-2">
                <p className="text-[30px] lg:text-[50px]">4.8</p>
                <BsStarFill className="text-orange mt-4" />
              </div>
            </div>
            <hr className="mt-12 m-1" />
            <div className="flex items-start justify-between mt-4">
              <div className="relative">
                <img
                  src={person}
                  alt=""
                  className="w-8 h-8 rounded-full object-contain relative"
                />
                <button className="w-8 h-8 rounded-full border-white border-[1.5px] bg-primary flex items-center justify-center text-[18px] text-black absolute top-0 left-6">
                  <CgArrowTopRight className="" />
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
        <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6 py-10 bg-darkGray rounded-xl">
          <div className="flex items-start gap-4 mb-4 lg:mb-0">
            <span className="flex justify-center items-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white text-black text-[36px] lg:text-[48px] border border-black">
              <PiVan />
            </span>
            <div className="flex flex-col text-black mt-1">
              <p className="font-bold text-[17px] lg:text-[19px] mb-1">
                Worldwide Shipping
              </p>
              <p className="text-[12px] lg:text-[14px] leading-4 ">
                Experience global delivery <br /> right to your doorstep.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-4 lg:mb-0">
            <span className="flex justify-center items-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white text-black text-[36px] lg:text-[48px] border border-black">
              <PiWallet />
            </span>
            <div className="flex flex-col text-black mt-1">
              <p className="font-bold text-[17px] lg:text-[19px] mb-1">
                Secure Payment
              </p>
              <p className="text-[12px] lg:text-[14px] leading-4 ">
                Rest assured, your payment <br /> is always safe and secure.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="flex justify-center items-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white text-black text-[36px] lg:text-[48px] border border-black">
              <PiRepeat />
            </span>
            <div className="flex flex-col text-black mt-1">
              <p className="font-bold text-[17px] lg:text-[19px] mb-1">
                30 Days Free Returns
              </p>
              <p className="text-[12px] lg:text-[14px] leading-4 ">
                Enjoy 30 days of easy, hassle- <br /> free returns.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="container max-w-screen-xl p-4 px-6 flex flex-col lg:flex-row items-center justify-between">
        <p className="text-2xl lg:text-3xl text-black font-bold">
          New Features
        </p>
        <button
          className="bg-primary text-white font-bold hover:bg-primary/90 px-5 py-2 rounded-lg text-lg border border-white mt-4 lg:mt-0"
          onClick={handleClickStore}
        >
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
            {itemsToShow.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.3 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col"
              >
                <div className="rounded-3xl flex flex-col">
                  <Link to={`/product/${item.id}`}>
                    <img
                      className="rounded-t-md"
                      src={item.images[0]}
                      alt={item.name}
                    />
                    <div className="flex items-center justify-between gap-x-4 pt-2">
                      <div>
                        <span className="text-sm text-orange font-semibold">
                          {item.brand}
                        </span>
                        <p className="text-[16px] lg:text-[18px] font-bold text-wrap">
                          {item.name}
                        </p>
                        <p className="text-[16px] lg:text-[18px] text-darkGrayishBlue">
                          {item.type}
                        </p>
                      </div>
                      <p className="text-[18px]">${item.price}</p>
                    </div>
                  </Link>
                  <div className="flex items-start pt-5 pb-1">
                    <button
                      onClick={() => addToCart({ ...item, quantity: 1 })}
                      className="bg-primary text-white transition py-1 px-3.5 rounded-lg"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
        <div className="flex justify-center py-4">
          <button
            onClick={handleLoadMore}
            className="bg-primary text-white font-bold hover:bg-primary/90 px-5 py-2 rounded-lg text-lg border border-white"
          >
            Load More
          </button>
        </div>
      </motion.section>

      <motion.section
        className="container px-6 py-4 max-w-screen-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="w-full bg-dark p-4 px-1 lg:px-16 flex flex-col lg:flex-row items-center justify-between rounded-xl border border-white">
          <img
            className="w-16 h-16 lg:w-20 lg:h-20 mb-4 lg:mb-0"
            src={adidas}
            alt="adidas"
          />
          <img
            className="w-18 h-12 lg:w-20 lg:h-16 mb-4 lg:mb-0"
            src={puma}
            alt="puma"
          />
          <img
            className="w-20 h-20 lg:w-24 lg:h-24 mb-4 lg:mb-0"
            src={nike}
            alt="nike"
          />
          <img
            className="w-10 h-10 lg:w-12 lg:h-12 mb-4 lg:mb-0"
            src={lv}
            alt="lv"
          />
          <img className="w-24 h-24 lg:w-28 lg:h-28" src={gucci} alt="gucci" />
        </div>
      </motion.section>

      <motion.section
        className="container max-w-screen-2xl px-6 py-4 flex flex-col lg:flex-row gap-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="relative w-full lg:w-2/3 h-[240px] lg:h-[380px] overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            src={video}
            loop
            muted
            autoPlay
          ></video>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <div className="h-24 lg:h-1/2 background-football-kits bg-cover bg-center border-2 border-gray-300 rounded-xl flex flex-col items-end pr-3 pt-4">
            <button className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-primary transition hover:bg-primary/90 flex items-center justify-center text-[20px] lg:text-[26px] text-black">
              <CgArrowTopRight />
            </button>
          </div>
          <div className="h-[160px] lg:h-1/2 background-ronaldo-messi justify-between bg-cover bg-top border-2 border-gray-300 rounded-xl flex items-start py-2 px-4">
            <div>
              <img className="w-10 h-6 lg:w-16 lg:h-10" src={logo} alt="logo" />
              <button
                className="bg-white hover:bg-white/90 rounded-md py-1 px-2 mt-2 text-sm"
                onClick={handleClickStore}
              >
                view more
              </button>
            </div>
            <p className="text-xs lg:text-sm text-white mt-2">
              Experience Sports <br /> Excellence Today!
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="container max-w-screen-2xl py-4 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="bg-dark w-full rounded-lg flex flex-col lg:flex-row p-6 border border-white">
          <div className="w-full lg:w-1/2 flex flex-col items-start py-8 lg:py-16 pl-10 lg:pl-20 text-white">
            <p className="font-bold text-[30px] lg:text-[40px]">
              REACH OUT TO US
            </p>
            <p className="text-[16px] lg:text-[20px]">
              Need assistance or have questions? <br />
              we're just a message away!
            </p>
            <button
              className="bg-white text-dark hover:bg-white/80 py-2 px-6 rounded-xl font-bold mt-6 text-lg"
              onClick={handleClickContact}
            >
              SEND AN EMAIL
            </button>
          </div>
          <img
            className="w-full lg:w-1/2 h-[200px] lg:h-[312px] border border-white rounded-xl mt-4 lg:mt-0 lg:ml-20"
            src={main}
            alt="main"
          />
        </div>
      </motion.section>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Home;
