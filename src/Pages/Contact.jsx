import { motion } from "framer-motion";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoPaperPlane, IoPaperPlaneOutline } from "react-icons/io5";
const Contact = () => {
  return (
    <>
      <motion.section className="pt-20 pb-6 container max-w-screen-2xl flex">
        <div className="h-[630px] w-1/2  border-l-0 border-b-2 border-gray-200 flex flex-col ml-10 pt-10 items-start">
          <h1 className="text-[40px] text-dark font-bold">Contact Us</h1>
          <p className="mt-2 text-darkGray">
            Any question? We Would be <br /> happy to help you!
          </p>
          <button className="border-2 border-gray-200 flex items-center gap-4 py-3 px-4 pr-32 mt-16 rounded-md">
            <PhoneIcon className="text-[14px]" />
            <span className="font-bold text-[16px]">+252612673277</span>
          </button>
          <button className="  bg-dark border-2 border-dark text-white flex items-center gap-4 py-3 px-4 pr-20 mt-6 ml-4  rounded-md shadow-lg shadow-gray-300 hover:bg-dark/90 transition-all ">
            <MailIcon />
            <span className="font-bold text-[16px]">isdil6777@gmail.com</span>
          </button>
          <button className="  border-2 border-gray-200 flex items-center gap-4 py-3 px-4 pr-20 mt-6 rounded-md">
            <MapPinIcon />
            <span className="font-bold text-[16px]">Hodon Bar-Ubax</span>
          </button>

          <div className="flex gap-5 absolute bottom-28">
            <span className="w-8 h-8 rounded-full bg-dark text-white text-[14px] flex items-center justify-center shadow-gray-900 shadow-2xl cursor-pointer">
              <FaFacebookF />
            </span>
            <span className="w-8 h-8 rounded-full bg-dark text-white text-[14px] flex items-center justify-center cursor-pointer">
              <FaTwitter />
            </span>
            <span className="w-8 h-8 rounded-full bg-dark text-white text-[14px] flex items-center justify-center cursor-pointer">
              <FaInstagram />
            </span>
          </div>
        </div>
        <div className="w-1/2 border-r-0 border-l-2  border-b-2 border-gray-200 mr-10 pt-11 pl-12 flex flex-col items-start">
          <div className="w-full flex justify-between font-bold text-[19px] text-dark  ">
            <label htmlFor="First-name">First Name:</label>
            <label htmlFor="First-name" className="mr-[140px]">
              Last Name:
            </label>
          </div>
          <div className="flex mt-2 w-full justify-between">
            <input
              type="text"
              placeholder="Your first name"
              className="border-2 border-gray-100 px-1 pl-4 py-2 placeholder:text-gray-400 rounded-md placeholder:text-[16px] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Your last name"
              className="border-2 border-gray-100 px-1 pl-4 py-2 placeholder:text-gray-400 rounded-md placeholder:text-[16px] focus:outline-none"
            />
          </div>
          <p className="text-[19px] text-dark font-bold mt-6">Email:</p>
          <input
            type="text"
            placeholder="youremail@email.com"
            className="w-full placeholder:text-[16px] focus:outline-none border-2 border-gray-100 mt-2 rounded-md px-4 py-2"
          />
          <p className="text-[19px] text-dark font-bold mt-6">Phone Number:</p>
          <input
            type="text"
            placeholder="+252#########"
            className="w-full placeholder:text-[16px] focus:outline-none border-2 border-gray-100 mt-2 rounded-md px-4 py-2"
          />
          <p className="text-[19px] text-dark font-bold mt-6">Message:</p>
          <input
            type="text"
            placeholder="Type your messag here..."
            className="w-full placeholder:text-[16px] focus:outline-none pb-[80px] border-2 border-gray-100 mt-2 rounded-md px-4 py-2 bg-cadaan"
          />

          <button className="w-full bg-dark py-3 flex gap-3 items-center justify-center text-[19px] text-white mt-6 rounded-md">
            <span>Send Message</span>
            <IoPaperPlaneOutline className="mt-1" />
          </button>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
