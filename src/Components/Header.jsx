import { useState, useEffect } from "react";
import { ShoppingBag, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../Components/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/images/logo11.png";

const Header = () => {
  const { cart } = useCart();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 35) {
        setIsVisible(false);
      } else if (window.scrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const userInfo = localStorage.getItem("user");
  const user = userInfo ? JSON.parse(userInfo) : null;
  const admin = user ? user.role === "admin" : false;

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      <header>
        <div
          className={`bg-white z-50 fixed top-0 left-0 w-full h-[80px] transition-transform duration-300 ${
            isVisible ? "transform-none" : "-translate-y-full"
          }`}
        >
          <div className="flex justify-between px-4 md:px-8 border-b-2 border-grayishBlue items-center h-[80px] max-w-full mx-auto">
            <div>
              <Link to="/" className="text-2xl md:text-4xl">
                <img className="w-24 md:w-32" src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="hidden md:flex header-col2">
              <ul className="flex justify-between gap-2 md:gap-3 w-[200px] md:w-[300px]">
                <li>
                  <Link
                    to="/"
                    className="nav-link text-darkGrayishBlue pb-[1.5rem]"
                  >
                    Home
                  </Link>
                </li>
                {admin ? (
                  <>
                    <li>
                      <Link
                        to="/admin"
                        className="nav-link text-darkGrayishBlue pb-[1.5rem]"
                      >
                        Dashboard
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
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
                          to="/product-purchased"
                          className="nav-link text-darkGrayishBlue pb-[1.5rem]"
                          onClick={() => setMenuOpen(false)}
                        >
                          History
                        </Link>
                      </li>
                  </>
                )}
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
                    to="/about"
                    className="nav-link text-darkGrayishBlue pb-[1.5rem]"
                  >
                    About
                  </Link>
                </li>
               
              </ul>
            </div>
            <div className="flex justify-between items-center gap-2 md:gap-4 relative">
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
              {user ? (
                <div className="flex flex-col items-center">
                  <h1 className="text-veryDarkBlue text-md cursor-pointer">{user.username}</h1>
                  <h2 className="text-veryDarkBlue text-sm cursor-pointer">{user.email}</h2>
                </div>
              ) : (
                <Link to="/auth/login">
                  <h1 className="text-veryDarkBlue text-2xl cursor-pointer">Login</h1>
                </Link>
              )}
              {user ?  (
                <button onClick={handleLogout}>
                logout
                </button>
              ): ""}
              <div className="md:hidden">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-veryDarkBlue text-2xl"
                >
                  <Menu />
                </button>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden bg-white border-t-2 border-grayishBlue"
              >
                <ul className="flex flex-col items-center gap-1 p-4 w-full">
                  <li className="w-full border-b border-gray-300">
                    <Link
                      to="/"
                      className="nav-link text-darkGrayishBlue block text-center py-2"
                      onClick={() => setMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  {admin ? (
                    <>
                      <li className="w-full border-b border-gray-300">
                        <Link
                          to="/admin"
                          className="nav-link text-darkGrayishBlue block text-center py-2"
                          onClick={() => setMenuOpen(false)}
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li className="w-full">
                        <Link
                          to="/product-purchased"
                          className="nav-link text-darkGrayishBlue block text-center py-2"
                          onClick={() => setMenuOpen(false)}
                        >
                          History
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="w-full border-b border-gray-300">
                        <Link
                          to="/store"
                          className="nav-link text-darkGrayishBlue block text-center py-2"
                          onClick={() => setMenuOpen(false)}
                        >
                          Store
                        </Link>
                      </li>
                      <li className="w-full border-b border-gray-300">
                        <Link
                          to="/contact"
                          className="nav-link text-darkGrayishBlue block text-center py-2"
                          onClick={() => setMenuOpen(false)}
                        >
                          Contact
                        </Link>
                      </li>
                    </>
                  )}
                  <li className="w-full">
                    <Link
                      to="/about"
                      className="nav-link text-darkGrayishBlue block text-center py-2"
                      onClick={() => setMenuOpen(false)}
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Header;
