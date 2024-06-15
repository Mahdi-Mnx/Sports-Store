import React from "react";

const Footer = () => {
  return (
    <div className="container max-w-screen-xl py-3 px-6 ">
      <div className="w-full border border-black flex items-center rounded-3xl px-4 justify-between">
        <div className="flex items-stretch">
          <p className="text-[30px] text-black py-4 pl-4">Logo</p>
          <div className="h-auto border-l border-black mx-4 ml-12"></div>
        </div>
        <div className="flex gap-4 items-center ">
          <button className=" bg-white shadow hover:underline border-black border-[1px] px-6 py-2 rounded-xl text-black hover:bg-black/95 hover:text-white transition-colors">
            Privacy Policy
          </button>
          <button className="text-black hover:underline bg-[#98c1d9] rounded-xl px-6 py-2 hover:bg-[#98c1d9]/80">
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
