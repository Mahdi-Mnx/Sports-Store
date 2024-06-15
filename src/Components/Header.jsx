import { PiBag } from "react-icons/pi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container max-w-screen-2xl py-3 px-6">
      <div className="w-full border bg-gradient-to-br from-[#293241] to-[#1b263b] flex items-center rounded-3xl  px-8 justify-between">
        <div className="flex items-stretch">
          <p className="text-[30px] text-white flex items-center py-4">
            Logo
          </p>
          <div className="h-auto border-l border-ebebeb mx-4 ml-12"></div>
          <div className="ml-4 flex items-center">
            <ul className="flex gap-4 text-ebebeb items-center">
              <li className="cursor-pointer hover:underline"><Link to="/store">Our Store</Link></li>
              <li className="cursor-pointer hover:underline">Best Seller</li>
              <li className="cursor-pointer hover:underline">New Shirts</li>
              <li className="cursor-pointer hover:underline">Offer</li>
              <li className="cursor-pointer hover:underline">About</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4 pr-6 items-center">
          <button className="bg-white px-2 py-2 rounded-2xl text-[25px] hover:bg-white/90 text-black">
            <PiBag />
          </button>
          <button className="bg-[#98c1d9] text-black hover:underline rounded-xl px-5 py-2 hover:bg-[#98c1d9]/90">
            Login
          </button>
          <button className="text-white border bg-transparent hover:underline hover:text-black transition-colors rounded-xl px-5 py-2 hover:bg-white">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
