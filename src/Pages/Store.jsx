import { motion } from "framer-motion";
import { useState } from "react";
import img1 from "../../public/images/9-pro1.png"
import img2 from "../../public/images/9-pro-2.png"
import img3 from "../../public/images/9-pro-3.png"
import img4 from "../../public/images/9-pro-4.png"

const Store = () => {

  const [image, setImages] = useState(1);

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
          </div>
        </motion.section>
    </>
  )
};

export default Store;
