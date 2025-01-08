import { motion } from "framer-motion";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { useCart } from "../Components/CartContext";
import toast, { Toaster } from "react-hot-toast";
import useSWR from "swr";
import { fetchProductById } from "../api/product/page";

const Product = () => {
  const { id } = useParams();
  const { data: product, error } = useSWR(`product-${id}`, () => fetchProductById(id));
  const [imageIndex, setImageIndex] = useState(0);
  const [itemCount, setItemCount] = useState(1);
  const { cart, dispatch } = useCart();

  const handleMinus = () => {
    setItemCount((prevCount) => Math.max(prevCount - 1, 1));
  };

  const handleAdd = () => {
    setItemCount((prevCount) => prevCount + 1);
  };

  const handleAddToCart = () => {
    const existingItem = cart.find((cartItem) => cartItem.id === product.id);

    if (existingItem) {
      toast("Product is already in cart", {
        icon: "🚫",
      });
      return;
    }
    if (itemCount > 0) {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...product, quantity: itemCount },
      });
      toast.success("Added to cart successfully.");
    }
  };

  if (error) {
    return <div>Failed to load product</div>;
  }

  if (!product) {
    return (
      <div className="h-screen flex justify-center items-center text-white font-bold">
        <img
          className="w-[300px] h-[300px] object-cover rounded-3xl"
          src="/public/images/not.gif"
          alt="Loading"
        />
      </div>
    );
  }

  return (
    <>
      <motion.section
        className="container max-w-full h-auto py-4 px-6 pt-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, y: -50 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row justify-around items-center gap-8">
          <div className="w-full md:w-1/2 h-auto">
            <div className="flex flex-col gap-y-3 h-auto mx-auto">
              <div className="big-one pt-8">
                <img
                  className="big-one-img w-full h-auto object-cover rounded-lg"
                  src={product.images[imageIndex]?.url}
                  alt="Product"
                />
              </div>
              <div className="small-sec flex justify-center gap-2 mt-4">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    className={`small-div cursor-pointer border-2 ${
                      imageIndex === index
                        ? "border-primary"
                        : "border-gray-300"
                    } rounded-lg overflow-hidden`}
                    onClick={() => setImageIndex(index)}
                  >
                    <img
                      className="small-img w-16 h-16 object-cover"
                      src={img?.url}
                      alt={`Thumbnail ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-auto">
            <div className="w-full md:w-[80%]">
              <h4 className="text-xl text-primary font-medium">
                {product.brand}
              </h4>
              <h1 className="text-4xl md:text-5xl text-black font-bold leading-tight">
                {product.name}
              </h1>
              <p className="text-lg md:text-[17px] leading-7 text-darkGrayishBlue mt-4">
                {product.description}
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="price">
                  <h3 className="text-3xl font-bold">${product.price}</h3>
                  <h4 className="text-darkGrayishBlue leading-5 line-through">
                    $291.98
                  </h4>
                </div>
                <div className="bg-primary/10 rounded-md">
                  <h5 className="text-[16px] font-bold text-primary py-0.5 px-2.5">
                    50%
                  </h5>
                </div>
              </div>
              <div className="flex items-center mt-6 gap-4">
                <div className="bg-lightGrayishBlue px-4 flex items-center gap-4 py-1 rounded-md">
                  <button
                    aria-label="Decrease item count"
                    className="text-primary font-bold text-xl cursor-pointer hover:bg-primary/10 rounded-md p-1"
                    onClick={handleMinus}
                  >
                    <FaMinus />
                  </button>
                  <span className="font-bold text-3xl">{itemCount}</span>
                  <button
                    aria-label="Increase item count"
                    className="text-primary font-bold text-xl cursor-pointer hover:bg-primary/10 rounded-md p-1"
                    onClick={handleAdd}
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <button
                  className="bg-primary text-white py-2 hover:bg-primary/90 w-full md:w-72 rounded-lg"
                  onClick={handleAddToCart}
                >
                  <FaBagShopping className="inline-block mr-2" /> Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </motion.section>
    </>
  );
};

export default Product;