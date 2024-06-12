import React from "react";

const Footer = () => {
  return (
    <div className="container max-w-screen-xl py-3 px-6 ">
      <div className="w-full border border-white flex items-center rounded-3xl px-4 justify-between">
        <div className="flex items-stretch">
          <p className="text-[30px] text-white py-4 pl-4">Logo</p>
          <div className="h-auto border-l border-white mx-4 ml-12"></div>
        </div>
        <div className="flex gap-4 items-center ">
          <button className=" bg-white px-6 py-2 rounded-xl text-black hover:bg-white/80">
            Privacy Policy
          </button>
          <button className="text-black bg-primary rounded-xl px-6 py-2 hover:bg-primary/80">
            Help & Support
          </button>
          <button className="text-white border border-white bg-secondery rounded-xl px-6 py-2 hover:bg-secondery/80">
            Terms & Condition
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
