import { motion } from "framer-motion";
import { useState } from "react";
import img1 from "../../public/images/9-pro1.png"
import img2 from "../../public/images/9-pro-2.png"
import img3 from "../../public/images/9-pro-3.png"
import img4 from "../../public/images/9-pro-4.png"
import { FaPlus, FaMinus   } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

const Store = () => {

  const [image, setImages] = useState(1);
  const [item, setItem] = useState(0);
  let url = image;

  if(image === 1){
    url = img1;
  }else if (image === 2) {
    url = img2;
  }else if(image === 3){
    url = img3;
  }else if(image === 4) {
    url = img4;
  }

  const handleMinus = () => {
    let count = item - 1;

    if(count <= 0){
      count = 0;
    }
    setItem(count)
  }
  const handleAdd = () => {
    let count = item + 1;
    setItem(count)
  }

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
                  <img className="big-one-img" src={url} alt="" />
                </div>
              <div className="small-sec">
                <div className={`small-div ${image === 1 && "active-img"}`}>
                  <img className="small-img" onClick={() => setImages(1)} src="/public/images/9-pro1.png" alt="" />
                </div>

                <div className={`small-div ${image === 2 && "active-img"}`}>
                  <img className="small-img" onClick={() => setImages(2)} src="/public/images/9-pro-2.png" alt="" />
                </div>

                <div className={`small-div ${image === 3 && "active-img"}`}>
                  <img className="small-img" onClick={() => setImages(3)} src="/public/images/9-pro-3.png" alt="" />
                </div>

                <div className={`small-div ${image === 4 && "active-img"}`}>
                  <img className="small-img" onClick={() => setImages(4)}  src="/public/images/9-pro-4.png" alt="" />
                </div>
              </div>
           </div>
          </div>
          <div className="w-[50%] h-auto">
            <div className="w-[80%]">
            <h4 className="text-xl text-orange font-medium mt-[-80px]">Nike</h4>
            <h1 className="text-5xl text-black font-bold leading-[65px] mt-">Nike Mercurial Superfly 9 Pro</h1>
            <p className="text-[17px] leading-7 text-darkGrayishBlue mt-4">Instantly tilt the pitch in the bold design of the Superfly 9 Pro FG. It's loaded with a Zoom Air unit, so you can dominate in the waning minutes of a match—when it matters most. Fast is in the Air.</p>
            <div className="flex items-center gap-4 mt-6">
              <div className="price ">
              <h3 className="text-3xl font-bold">$145.99</h3>
              <h4 className="text-darkGrayishBlue leading-5 line-through">$291.98</h4>
              </div>
              <div className=" bg-paleOrange rounded-md">
                <h5 className="text-[16px] font-bold text-orange py-0.5 px-2.5">50%</h5>
              </div>
            </div>
            <div className="flex items-center mt-16 justify-between">
                <div className=" bg-lightGrayishBlue px-4 flex items-center gap-10 py-1 rounded-md">
                  <span className="text-orange font-bold text-xl cursor-pointer hover:bg-paleOrange rounded-md p-1"><FaMinus onClick={handleMinus}/></span>
                  <span className="font-bold text-3xl">{item}</span>
                  <span className="text-orange font-bold text-xl cursor-pointer hover:bg-paleOrange rounded-md p-1"><FaPlus onClick={handleAdd}/></span>
                </div>
                <button className=" bg-orange text-white py-2 hover:bg-orange/90 w-72 rounded-lg"><FaBagShopping className=" inline-block mr-2" /> Add to cart</button>
              </div>
            </div>
          </div>
          </div>
        </motion.section>
    </>
  )
};

export default Store;
