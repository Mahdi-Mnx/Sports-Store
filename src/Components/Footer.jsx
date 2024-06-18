import React from "react";

const Footer = () => {
  return (
    <div className="container max-w-screen-xl py-3 px-6 z-20">
      <div className="w-full border border-black flex items-center rounded-3xl px-4 justify-between">
        <div className="flex items-stretch py-3">
        <img className="w-16 h-10" src="/public/images/logo11.png" alt="" />
          <div className="h-auto border-l border-black mx-4 ml-12"></div>
        </div>
        <div className="flex gap-4 items-center ">
          <button className=" bg-white shadow hover:underline border-black border-[1px] px-6 py-2 rounded-xl text-black hover:bg-black/95 hover:text-white transition-colors">
            Privacy Policy
          </button>
          <button className="text-black hover:underline bg-primary rounded-xl px-6 py-2 hover:bg-primary/80">
            Help & Support
          </button>
          <button className=" border hover:underline text-white bg-secondery rounded-xl px-6 py-2 hover:bg-secondery/80">
            Terms & Condition
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
