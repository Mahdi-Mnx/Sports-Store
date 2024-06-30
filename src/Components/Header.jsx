import React, { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
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

  return (
    <>
      <header
        className={`bg-white z-20 fixed top-0 left-0 w-full transition-transform duration-300 ${
          isVisible ? "transform-none" : "-translate-y-full"
        }`}
      >
        <div>
          <div className="flex justify-around border-b-2 border-grayishBlue items-center h-[80px] max-w-screen-xl mx-auto">
            <div>
              <Link to="/" className="text-4xl">
                <img
                  className="w-32"
                  src="/public/images/logo11.png"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="header-col2">
              <ul className="flex gap-5">
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
                    to="/man"
                    className="nav-link text-darkGrayishBlue pb-[1.5rem]"
                  >
                    Man
                  </Link>
                </li>
                <li>
                  <Link
                    to="/women"
                    className="nav-link text-darkGrayishBlue pb-[1.5rem]"
                  >
                    Women
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
              </ul>
            </div>
            <div className="flex justify-between items-center gap-4 relative">
              <Link to="/cart">
                <ShoppingBag className="text-veryDarkBlue cursor-pointer" />
              </Link>
              <div>
                <img
                  className="profile"
                  src="/public/images/profile.jpg"
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
