import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import productData from "../Data/Data";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import productType from "../Data/productType";
import { Size } from "../Data/productSize";

const Store = () => {
  const [rowsToShow, setRowsToShow] = useState(3); // Start by showing 3 columns
  const [open, setOpen] = useState(false);
  const [openSize, setSizeOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 35]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const itemsPerRow = 1; // Number of items per row
  const totalItemsToShow = rowsToShow * itemsPerRow; // Total items to show based on rows

  const handleLoadMore = () => {
    setRowsToShow(rowsToShow + 3); // Load 3 more rows when clicked
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleToggleSize = () => {
    setSizeOpen((prevOpen) => !prevOpen);
  };

  const handlePriceChange = (event) => {
    setPriceRange([0, event.target.value]); // Set the price range
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? productData
      : productData.filter((product) =>
          product.categories.includes(selectedCategory)
        );

  return (
    <div className=" container max-w-screen-xl pb-4 py-24 items-center">
      <div className="flex justify-around gap-5 px-6">
        <div className="w-[20%] mt-4">
          <div className="bg-primary/20 h-auto rounded-lg p-2">
            {/* category */}
            <div>
              <h3 className="text-xl text-black font-bold">Category</h3>
              <div className="p-4 bg-white rounded-md my-2">
                <ul className="gap-4">
                  <li
                    className="text-lg font-medium transition-colors text-gray-500 hover:text-black cursor-pointer"
                    onClick={() => handleCategoryClick("All")}
                  >
                    All
                  </li>
                  <li
                    className="text-lg font-medium transition-colors text-gray-500 hover:text-black cursor-pointer"
                    onClick={() => handleCategoryClick("Men")}
                  >
                    Men
                  </li>
                  <li
                    className="text-lg font-medium transition-colors text-gray-500 hover:text-black cursor-pointer"
                    onClick={() => handleCategoryClick("Women")}
                  >
                    Women
                  </li>
                  <li
                    className="text-lg font-medium transition-colors text-gray-500 hover:text-black cursor-pointer"
                    onClick={() => handleCategoryClick("Shoes")}
                  >
                    Shoes
                  </li>
                  <li
                    className="text-lg font-medium transition-colors text-gray-500 hover:text-black cursor-pointer"
                    onClick={() => handleCategoryClick("T-Shirt Sport")}
                  >
                    T-Shirt Sport
                  </li>
                  <li
                    className="text-lg font-medium transition-colors text-gray-500 hover:text-black cursor-pointer"
                    onClick={() => handleCategoryClick("Equipment")}
                  >
                    Equipment
                  </li>
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
                      {productType.map((item, key) => (
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
                              {item.type}
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
                  min="0"
                  max="200"
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

        {/* products side  */}
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
                {filteredProducts.slice(0, totalItemsToShow).map((item) => (
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
                            {item.price}
                          </p>
                        </div>
                        <div className="flex items-start pt-5 pb-1">
                          <button className="bg-primary text-white transition py-1 px-3.5 rounded-lg">
                            Add to cart
                          </button>
                          <p id={`added-${item.id}`} className="mt-2"></p>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
            {totalItemsToShow < filteredProducts.length && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleLoadMore}
                  className="text-red-500 py-2 hover:underline font-semibold mt-7"
                >
                  Load More
                </button>
              </div>
            )}
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Store;
