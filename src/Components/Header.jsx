import React from "react";
import { HiMiniShoppingBag } from "react-icons/hi2";
const Header = () => {
  return (
    <div className="container max-w-screen-xl p-4 ">
      <div className="w-full border border-white flex items-center rounded-2xl p-4 px-8 justify-between">
        <div className="flex items-center">
          <p className="text-[30px] text-primary">Logo</p>
          <div className="ml-16">
            <ul className="flex gap-4 text-white">
              <li>Shop</li>
              <li>Best Seller</li>
              <li>New Shirts</li>
              <li>Offer</li>
              <li>About</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <button className=" bg-primary px-3.5 hover:bg-primary/85  py-3 rounded-full items-center justify-center flex text-[20px] mt-2">
            <HiMiniShoppingBag className="text-black" />
          </button>
          <button className="text-black bg-white rounded-xl hover:bg-white/95 py-2.5 px-6">Login</button>
          <button className="text-white border border-white py-2.5 hover:bg-secondery/85 bg-secondery rounded-xl px-6">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
