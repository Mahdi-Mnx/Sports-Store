import { motion } from "framer-motion";
import { useState } from "react";
import img1 from "../../public/images/9-pro1.png";
import img2 from "../../public/images/9-pro-2.png";
import img3 from "../../public/images/9-pro-3.png";
import img4 from "../../public/images/9-pro-4.png";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
const images = [img1, img2, img3, img4];

const Store = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  const handleMinus = () => {
    setItemCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  const handleAdd = () => {
    setItemCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <motion.section
        className="container max-w-screen-xl h-auto py-3 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="h-screen flex justify-around items-center">
          <div className="w-[45%] h-auto">
            <div className="flex flex-col gap-y-3 h-[600px] mx-auto">
              <div className="big-one">
                <img
                  className="big-one-img"
                  src={images[imageIndex]}
                  alt="Product"
                />
              </div>
              <div className="small-sec">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`small-div ${
                      imageIndex === index && "active-img"
                    }`}
                  >
                    <img
                      className="small-img"
                      onClick={() => setImageIndex(index)}
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
                Nike
              </h4>
              <h1 className="text-5xl text-black font-bold leading-[65px]">
                Nike Mercurial Superfly 9 Pro
              </h1>
              <p className="text-[17px] leading-7 text-darkGrayishBlue mt-4">
                Instantly tilt the pitch in the bold design of the Superfly 9
                Pro FG. It is loaded with a Zoom Air unit, so you can dominate
                in the waning minutes of a match—when it matters most. Fast is
                in the Air.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="price ">
                  <h3 className="text-3xl font-bold">$145.99</h3>
                  <h4 className="text-darkGrayishBlue leading-5 line-through">
                    $291.98
                  </h4>
                </div>
                <div className=" bg-primary/10 rounded-md">
                  <h5 className="text-[16px] font-bold text-primary py-0.5 px-2.5">
                    50%
                  </h5>
                </div>
              </div>
              <div className="flex items-center mt-16 justify-between">
                <div className=" bg-lightGrayishBlue px-4 flex items-center gap-10 py-1 rounded-md">
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
                <button className=" bg-primary text-white py-2 hover:bg-primary/90 w-72 rounded-lg">
                  <FaBagShopping className="inline-block mr-2" /> Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Store;
