import { motion } from "framer-motion";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import productData from "../Data/Data";
import { useCart } from "../Components/CartContext";
import toast, { Toaster } from "react-hot-toast";

const Product = () => {
  const { id } = useParams();
  const product = productData.find((p) => p.id === parseInt(id));
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
      toast("Product already in cart", {
        icon: "🚫",
      });
      return;
    }
    if (itemCount > 0) {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...product, quantity: itemCount },
      });
      toast.success("added curt successfuly.");
    }
  };

  if (!product) {
    return (
      <div className="h-screen flex justify-center items-center text-white font-bold">
        <img
          className="w-[300px] h-[300px] object-cover rounded-3xl"
          src="/public/images/not.gif"
          alt="jacar"
        />
      </div>
    );
  }

  return (
    <>
      <motion.section
        className="container max-w-screen-xl h-auto py-4 px-6 pt-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, y: -50 }}
        viewport={{ once: true }}
      >
        <div className="h-screen max-w-screen-xl flex justify-around items-center">
          <div className="w-[45%] h-auto">
            <div className="flex flex-col gap-y-3 h-[600px] mx-auto">
              <div className="big-one pt-8">
                <img
                  className="big-one-img"
                  src={product.images[imageIndex]}
                  alt="Product"
                />
              </div>
              <div className="small-sec flex">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    className={`small-div ${
                      imageIndex === index && "active-img"
                    }`}
                    onClick={() => setImageIndex(index)}
                  >
                    <img
                      className="small-img"
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[50%] h-auto">
            <div className="w-[80%]">
              <h4 className="text-xl text-primary font-medium mt-[-80px]">
                {product.brand}
              </h4>
              <h1 className="text-5xl text-black font-bold leading-[65px]">
                {product.name}
              </h1>
              <p className="text-[17px] leading-7 text-darkGrayishBlue mt-4">
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
              <div className="flex items-center mt-16 justify-between">
                <div className="bg-lightGrayishBlue px-4 flex items-center gap-10 py-1 rounded-md">
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
                  className="bg-primary text-white py-2 hover:bg-primary/90 w-72 rounded-lg"
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
