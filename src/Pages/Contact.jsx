import { motion } from "framer-motion";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";

const Contact = () => {
  document.title = "Contact - GOG Store";
  return (
    <>
      <motion.section className="pt-20 pb-6 container max-w-screen-xl flex flex-col lg:flex-row px-4 md:px-10">
        <div className="h-auto lg:h-[630px] w-full lg:w-1/2 border-l-0 border-r-0 lg:border-r-2 border-b-2 border-gray-200 flex flex-col pt-10 items-start lg:mb-0 pb-5">
          <h1 className="text-[30px] lg:text-[40px] text-dark font-bold">
            Contact Us
          </h1>
          <p className="mt-2 text-darkGray">
            Any question? We Would be <br /> happy to help you!
          </p>
          <button className="border-2 border-gray-200 flex items-center gap-4 py-3 px-4 pr-32 mt-16 rounded-md">
            <PhoneIcon className="text-[14px]" />
            <span className="font-bold text-[16px]">+252612673277</span>
          </button>
          <button className="bg-dark border-2 border-dark text-white flex items-center gap-4 py-3 px-4 pr-20 mt-6 ml-4 rounded-md shadow-lg shadow-gray-300 hover:bg-dark/90 transition-all">
            <MailIcon />
            <span className="font-bold text-[16px]">isdil6777@gmail.com</span>
          </button>
          <button className="border-2 border-gray-200 flex items-center gap-4 py-3 px-4 pr-20 mt-6 rounded-md">
            <MapPinIcon />
            <span className="font-bold text-[16px]">Hodon Bar-Ubax</span>
          </button>
          <div className="flex gap-5 mt-8 lg:mt-0 lg:absolute lg:bottom-28">
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

        <div className="w-full lg:w-1/2 border-r-0 border-b-2 border-gray-200 pt-11 pl-0 lg:pl-12 flex flex-col items-start">
          <div className="w-full flex flex-col gap-4 mb-10">
            <div className="w-full flex flex-col">
              <label
                htmlFor="first-name"
                className="font-bold text-[19px] text-dark"
              >
                First Name:
              </label>
              <input
                type="text"
                placeholder="Your first name"
                className="border-2 border-gray-100 px-1 pl-4 py-2 placeholder:text-gray-400 rounded-md placeholder:text-[16px] focus:outline-none mt-2"
              />
            </div>
            <div className="w-full flex flex-col">
              <label
                htmlFor="last-name"
                className="font-bold text-[19px] text-dark"
              >
                Last Name:
              </label>
              <input
                type="text"
                placeholder="Your last name"
                className="border-2 border-gray-100 px-1 pl-4 py-2 placeholder:text-gray-400 rounded-md placeholder:text-[16px] focus:outline-none mt-2"
              />
            </div>
            <div className="w-full flex flex-col">
              <label
                htmlFor="email"
                className="font-bold text-[19px] text-dark"
              >
                Email:
              </label>
              <input
                type="text"
                placeholder="youremail@email.com"
                className="w-full placeholder:text-[16px] focus:outline-none border-2 border-gray-100 mt-2 rounded-md px-4 py-2"
              />
            </div>
            <div className="w-full flex flex-col">
              <label
                htmlFor="phone-number"
                className="font-bold text-[19px] text-dark"
              >
                Phone Number:
              </label>
              <input
                type="text"
                placeholder="+252#########"
                className="w-full placeholder:text-[16px] focus:outline-none border-2 border-gray-100 mt-2 rounded-md px-4 py-2"
              />
            </div>
            <div className="w-full flex flex-col">
              <label
                htmlFor="message"
                className="font-bold text-[19px] text-dark"
              >
                Message:
              </label>
              <textarea
                placeholder="Type your message here..."
                className="w-full placeholder:text-[16px] focus:outline-none border-2 border-gray-100 mt-2 rounded-md px-4 py-2 h-32 resize-none"
              />
            </div>
          </div>

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
