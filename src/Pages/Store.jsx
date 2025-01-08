import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Size } from "../Data/productSize";
import { useCart } from "../Components/CartContext";
import toast, { Toaster } from "react-hot-toast";
import useSWR from "swr";
import { fetchProducts } from "../api/product/page";

const Store = () => {
  document.title = "Store - Buy anything";
  const { cart, dispatch } = useCart();
  const [open, setOpen] = useState(false);
  const [openSize, setSizeOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([10, 500]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProductTypes, setSelectedProductTypes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  // const navigate = useNavigate();
    const { data: products, error, isLoading } = useSWR("fetchProducts", fetchProducts);
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

  const handleColorChange = (color) => {
    if (color === "All Colors") {
      setSelectedColors([]);
    } else {
      setSelectedColors((prevSelected) =>
        prevSelected.includes(color)
          ? prevSelected.filter((c) => c !== color)
          : [...prevSelected, color]
      );
    }
  };

  const uniqueProductTypes = products
  ? [...new Set(products.flatMap((product) => product.categories))]
  : [];

const uniqueColors = products
  ? [...new Set(products.flatMap((product) => product.colors))]
  : [];
  const filteredProducts = products
    ? products.filter(
        (product) =>
          (selectedCategory === "All" ||
            product.categories.includes(selectedCategory)) &&
          product.price >= priceRange[0] &&
          product.price <= priceRange[1] &&
          (selectedProductTypes.length === 0 ||
            selectedProductTypes.some((type) =>
              product.categories.includes(type)
            )) &&
          (selectedColors.length === 0 ||
            selectedColors.some((color) => product.colors.includes(color)))
      )
  : [];
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load products</div>;
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      toast("Product is already in cart", {
        icon: "🚫",
      });
      return;
    }
    dispatch({ type: "ADD_TO_CART", payload: { ...item, quantity: 1 } });
    toast.success("Added to cart successfully.");
  };

  return (
    <div className="container max-w-full pb-4 py-24 items-center">
      <div className="flex flex-col lg:flex-row justify-around gap-5 px-6">
        <div className="w-full lg:w-[20%] mt-4">
          <div className="bg-primary/20 h-auto rounded-lg p-2">
            {/* category */}
            <div>
              <h3 className="text-xl text-veryDarkBlue font-bold">Category</h3>
              <div className="p-4 bg-white rounded-md my-2">
                <ul className="gap-4">
                  {["All", "Men", "Women", "Shirts", "Shoes", "Socks"].map(
                    (category) => (
                      <li
                        key={category}
                        className={`text-lg font-medium transition-colors cursor-pointer ${
                          selectedCategory === category
                            ? "text-veryDarkBlue font-bold"
                            : "text-darkGrayishBlue hover:text-veryDarkBlue"
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

            {/* Color */}
            <div className="mb-4">
              <h5 className="text-lg font-bold mb-2">Color</h5>
              <div className="bg-white rounded-md py-2 px-3">
                <ul className="grid grid-cols-4 gap-3">
                  <li
                    key="all"
                    className={`relative w-5 h-5 rounded-full cursor-pointer border ${
                      selectedColors.length === 0
                        ? "border-veryDarkBlue"
                        : "border-grayishBlue"
                    }`}
                    style={{ backgroundColor: "white" }}
                    onClick={() => handleColorChange("All Colors")}
                  >
                    <span
                      className="absolute w-[18px] h-[1px] bg-red-500 rotate-45"
                      style={{
                        top: "50%",
                        right: "0",
                        transform: "rotate(-45deg) translateY(-50%)",
                      }}
                    ></span>
                    <span
                      className="absolute w-[18px] h-[1px] bg-red-500 rotate-45"
                      style={{
                        top: "50%",
                        left: "0",
                        transform: "rotate(45deg) translateY(-50%)",
                      }}
                    ></span>
                  </li>
                  {uniqueColors.map((color) => (
                    <li
                      key={color}
                      className={`w-5 h-5 rounded-full cursor-pointer border ${
                        selectedColors.includes(color)
                          ? "border-veryDarkBlue"
                          : "border-grayishBlue"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorChange(color)}
                    ></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* products side */}
        <div className="w-full lg:w-[85%] p-4 flex justify-around">
          <motion.section
            className="md:px-4 px-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <AnimatePresence>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map((item) => (
                 <motion.div
                 key={item._id}
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.3 }}
                 transition={{ duration: 0.5 }}
                 className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
               >
                 <Link to={`/product/${item._id}`} className="flex flex-col flex-1">
                   <img
                     className="rounded-t-xl w-full h-64 object-cover"
                     src={item.images[0]?.url}
                     alt={item.name}
                     onError={(e) => {
                       e.target.src = 'path/to/fallback/image.png';
                     }}
                   />
                   <div className="p-4 flex flex-col flex-1">
                     <span className="text-sm text-orange-500 font-semibold">
                       {item.brand}
                     </span>
                     <p className="text-lg font-bold text-gray-800 mt-2">{item.name}</p>
                     <p className="text-sm text-gray-600">{item.type}</p>
                     <div className="flex items-center justify-between mt-4">
                       <p className="text-lg font-bold text-gray-900">${item.price.toFixed(2)}</p>
                     </div>
                   </div>
                 </Link>
                 <div className="p-4">
                   <button
                     onClick={() => addToCart({ ...item, quantity: 1 })}
                     className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors duration-300"
                   >
                     Add to cart
                   </button>
                 </div>
               </motion.div>
                ))}
              </div>
            </AnimatePresence>
          </motion.section>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Store;
