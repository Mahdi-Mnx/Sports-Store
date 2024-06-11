import React from "react";
import { PiBag } from "react-icons/pi";

const Header = () => {
  return (
    <div className="container max-w-screen-2xl p-4">
      <div className="w-full border border-white flex items-center rounded-3xl  px-8 justify-between">
        <div className="flex items-stretch">
          <p className="text-[30px] text-primary flex items-center py-4">
            Logo
          </p>
          <div className="h-auto border-l border-white mx-4 ml-12"></div>
          <div className="ml-4 flex items-center">
            <ul className="flex gap-4 text-white items-center">
              <li className="cursor-pointer">Shop</li>
              <li className="cursor-pointer">Best Seller</li>
              <li className="cursor-pointer">New Shirts</li>
              <li className="cursor-pointer">Offer</li>
              <li className="cursor-pointer">About</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4 pr-6 items-center">
          <button className="bg-primary px-2 py-2 rounded-2xl text-[25px] hover:bg-primary/70">
            <PiBag />
          </button>
          <button className="text-black bg-white rounded-xl px-5 py-2 hover:bg-white/80">
            Login
          </button>
          <button className="text-white border border-white bg-secondery rounded-xl px-5 py-2 hover:bg-secondery/70">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
