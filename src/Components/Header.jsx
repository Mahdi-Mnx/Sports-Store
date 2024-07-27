import React, { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../Components/CartContext";
import logo from "/images/logo11.png";
import profile from "/images/profile.jpg";
const Header = () => {
  const { cart } = useCart();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 35) {
      setIsVisible(false);
    } else if (window.scrollY < lastScrollY) {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <header>
        <div
          className={`bg-white z-50 fixed top-0 left-0 w-full h-[80px] transition-transform duration-300 ${
            isVisible ? "transform-none" : "-translate-y-full"
          }`}
        >
          <div className="flex justify-between px-8 border-b-2 border-grayishBlue items-center h-[80px] max-w-screen-xl mx-auto">
            <div>
              <Link to="/" className="text-4xl">
                <img className="w-32" src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="header-col2">
              <ul className="flex justify-between gap-3 w-[300px]">
                <li>
                  <Link
                    to="/"
                    className="nav-link text-darkGrayishBlue pb-[1.5rem]"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/store"
                    className="nav-link text-darkGrayishBlue pb-[1.5rem]"
                  >
                    Store
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="nav-link text-darkGrayishBlue pb-[1.5rem]"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="nav-link text-darkGrayishBlue pb-[1.5rem]"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product-purchased"
                    className="nav-link text-darkGrayishBlue pb-[1.5rem]"
                  >
                    History
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex justify-between items-center gap-4 relative">
              <div className="relative flex">
                <Link to="/cart" className="relative">
                  <ShoppingBag className="text-veryDarkBlue text-2xl cursor-pointer" />
                  {totalItems > 0 && (
                    <span className="absolute top-[-8px] right-[-8px] bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </div>
              <div>
                <img
                  className="w-8 h-8 rounded-full cursor-pointer"
                  src={profile}
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
