import React from "react";

const Footer = () => {
  return (
    <div className="container max-w-screen-xl p-4 ">
      <div className="w-full border border-white flex items-center rounded-3xl p-4 justify-between">
        <div className="flex items-center pl-4">
          <p className="text-[30px] text-white">Logo</p>
        </div>
        <div className="flex gap-4 items-center ">
          <button className=" bg-white px-6 py-2 rounded-xl text-black">
            Privacy Policy
          </button>
          <button className="text-black bg-primary rounded-xl px-6 py-2 hover:bg-primary/80">
            Help & Support
          </button>
          <button className="text-white border border-white bg-secondery rounded-xl px-6 py-2">
            Terms & Condition
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
