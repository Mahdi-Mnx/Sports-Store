import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import productData from "../Data/Data";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Size } from "../Data/productSize";
import { useCart } from "../Components/CartContext";

const Store = () => {
  const { dispatch } = useCart();
  const [open, setOpen] = useState(false);
  const [openSize, setSizeOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([10, 500]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProductTypes, setSelectedProductTypes] = useState([]);
  const [addedProductId, setAddedProductId] = useState(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleToggleSize = () => {
    setSizeOpen((prevOpen) => !prevOpen);
  };

  const handlePriceChange = (event) => {
    setPriceRange([10, parseFloat(event.target.value)]);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleProductTypeChange = (type) => {
    setSelectedProductTypes((prevSelected) =>
      prevSelected.includes(type)
        ? prevSelected.filter((t) => t !== type)
        : [...prevSelected, type]
    );
  };

  const uniqueProductTypes = [
    ...new Set(productData.flatMap((product) => product.categories)),
  ];

  const filteredProducts = productData.filter(
    (product) =>
      (selectedCategory === "All" ||
        product.categories.includes(selectedCategory)) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      (selectedProductTypes.length === 0 ||
        selectedProductTypes.some((type) => product.categories.includes(type)))
  );

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: { ...item, quantity: 1 } });
    setAddedProductId(item.id);

    setTimeout(() => {
      setAddedProductId(null);
    }, 900);
  };

  return (
    <div className="container max-w-screen-xl pb-4 py-24 items-center">
      <div className="flex justify-around gap-5 px-6">
        <div className="w-[20%] mt-4">
          <div className="bg-primary/20 h-auto rounded-lg p-2">
            {/* category */}
            <div>
              <h3 className="text-xl text-black font-bold">Category</h3>
              <div className="p-4 bg-white rounded-md my-2">
                <ul className="gap-4">
                  {["All", "Men", "Women", "Shirts", "Shoes", "Socks"].map(
                    (category) => (
                      <li
                        key={category}
                        className={`text-lg font-medium transition-colors cursor-pointer ${
                          selectedCategory === category
                            ? "text-black font-bold"
                            : "text-gray-500 hover:text-black"
                        }`}
                        onClick={() => handleCategoryClick(category)}
                      >
                        {category}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Size type dropdown */}
            <div className="my-4">
              <div
                className={`bg-white py-1 px-3 ${
                  openSize ? "rounded-t-md" : "rounded-md"
                } shadow flex justify-between items-center`}
              >
                <h5
                  onClick={handleToggleSize}
                  className="text-lg font-bold cursor-pointer"
                >
                  Size
                </h5>
                {openSize ? (
                  <ChevronUp
                    className="cursor-pointer"
                    onClick={handleToggleSize}
                  />
                ) : (
                  <ChevronDown
                    className="cursor-pointer"
                    onClick={handleToggleSize}
                  />
                )}
              </div>
              <AnimatePresence>
                {openSize && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-white py-1 px-3 rounded-b-md shadow"
                  >
                    <ul>
                      {Size.map((item, key) => (
                        <li key={key}>
                          <span className="items-center">
                            <input
                              className="w-[15px] h-[15px]"
                              type="checkbox"
                              id={item.id}
                            />
                            <label
                              htmlFor={item.id}
                              className="text-sm cursor-pointer ml-2 inline-block"
                            >
                              {item.Size}
                            </label>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* product type dropdown */}
            <div className="mb-4">
              <div
                className={`bg-white py-1 px-3 ${
                  open ? "rounded-t-md" : "rounded-md"
                } shadow flex justify-between items-center`}
              >
                <h5
                  onClick={handleToggle}
                  className="text-lg font-bold cursor-pointer"
                >
                  Product Type
                </h5>
                {open ? (
                  <ChevronUp
                    className="cursor-pointer"
                    onClick={handleToggle}
                  />
                ) : (
                  <ChevronDown
                    className="cursor-pointer"
                    onClick={handleToggle}
                  />
                )}
              </div>
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-white py-1 px-3 rounded-b-md shadow"
                  >
                    <ul>
                      {uniqueProductTypes.map((item, key) => (
                        <li key={key}>
                          <span className="items-center">
                            <input
                              className="w-[15px] h-[15px]"
                              type="checkbox"
                              id={item}
                              checked={selectedProductTypes.includes(item)}
                              onChange={() => handleProductTypeChange(item)}
                            />
                            <label
                              htmlFor={item}
                              className="text-sm cursor-pointer ml-2 inline-block"
                            >
                              {item}
                            </label>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Price Range */}
            <div className="mb-4">
              <h5 className="text-lg font-bold mb-2">Price Range</h5>
              <div className="bg-white rounded-md py-2 px-3">
                <label
                  htmlFor="priceRange"
                  className="text-sm font-medium text-gray-700"
                >
                  Price Range:{" "}
                  <span className="font-bold">${priceRange[1]}</span>
                </label>
                <input
                  type="range"
                  id="priceRange"
                  min="10"
                  max="500"
                  value={priceRange[1]}
                  onChange={handlePriceChange}
                  className="w-full mt-2"
                />
              </div>
            </div>

            {/* Color  */}
            <div className="mb-4">
              <h5 className="text-lg font-bold mb-2">Color</h5>
              <div className="bg-white rounded-md py-2 px-3">
                <ul className="grid grid-cols-4 gap-3">
                  <li className="w-5 h-5 rounded-full bg-green-500"></li>
                  <li className="w-5 h-5 rounded-full bg-blue-500"></li>
                  <li className="w-5 h-5 rounded-full bg-gray-500"></li>
                  <li className="w-5 h-5 rounded-full bg-purple-500"></li>
                  <li className="w-5 h-5 rounded-full bg-pink-500"></li>
                  <li className="w-5 h-5 rounded-full bg-teal-500"></li>
                  <li className="w-5 h-5 rounded-full bg-orange"></li>
                  <li className="w-5 h-5 rounded-full bg-indigo-500"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* products side */}
        <div className="w-[85%] p-4 flex justify-around">
          <motion.section
            className="px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <AnimatePresence>
              <div className="grid grid-cols-3 gap-4">
                {filteredProducts.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.3 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div>
                      <Link to={`/product/${item.id}`}>
                        <img
                          className="rounded-t-md"
                          src={item.images[0]}
                          alt={item.name}
                        />
                        <div className="flex justify-between gap-x-4 pt-2">
                          <div>
                            <span className="text-sm text-orange font-semibold">
                              {item.brand}
                            </span>
                            <p className="text-[14px] font-bold text-wrap">
                              {item.name}
                            </p>
                            <p className="text-[12px] text-darkGrayishBlue">
                              High-Top Football Boot
                            </p>
                          </div>
                          <p className="text-[14px] font-bold pr-1">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                      </Link>
                      <div className="flex items-start pt-5 pb-1">
                        <button
                          className="bg-primary text-white transition py-1 px-3.5 rounded-lg"
                          onClick={() => addToCart({ ...item, quantity: 1 })}
                        >
                          Add to cart
                        </button>
                        <AnimatePresence>
                          {addedProductId === item.id && (
                            <motion.span
                              className="ml-[10px] text-secondery font-bold mt-[5px]"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              transition={{ duration: 0.25 }}
                            >
                              Added to cart!
                            </motion.span>
                          )}
                        </AnimatePresence>
                        <p id={`added-${item.id}`} className="mt-2"></p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Store;
