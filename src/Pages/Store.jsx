import { useState } from "react";
import productData from "../Components/Data";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Store = () => {
  const [rowsToShow, setRowsToShow] = useState(3); // Start by showing 3 column
  const itemsPerRow = 2; // Number of rows
  const totalItemsToShow = rowsToShow * itemsPerRow; // Total items to show based on rows

  const handleLoadMore = () => {
    setRowsToShow(rowsToShow + 2); // Load 3 more rows when clicked
  };

  return (
    <>
      <motion.section
        className="container max-w-screen-2xl pt-20 pb-6 flex items-center justify-center "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <ul className="flex justify-between w-60">
          <li className="p-2 bg-grayishBlue rounded-md hover:bg-grayishBlue/88 transition-colors translate-y-3 ease-in">
            Shoes
          </li>
          <li className="p-2 bg-grayishBlue rounded-md hover:bg-grayishBlue/88 transition-colors translate-y-3 ease-in">
            Pants
          </li>
          <li className="p-2 bg-grayishBlue rounded-md hover:bg-grayishBlue/88 transition-colors translate-y-3 ease-in">
            Shirts
          </li>
        </ul>
      </motion.section>

      <motion.section
        className="container max-w-screen-xl px-6 py-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <AnimatePresence>
          <div className="grid grid-cols-3 gap-4 items-center">
            {productData.slice(0, totalItemsToShow).map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.3 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col"
              >
                <div className="rounded-3xl flex flex-col">
                  <Link to={`/product/${item.id}`}>
                    <img
                      className="rounded-t-md"
                      src={item.images[0]}
                      alt={item.name}
                    />
                    <div className="flex items-center justify-between gap-x-4 pt-2">
                      <div>
                        <span className="text-sm text-orange font-semibold">
                          {item.brand}
                        </span>
                        <p className="text-[18px] font-bold text-wrap">
                          {item.name}
                        </p>
                        <p className="text-[18px] text-darkGrayishBlue">
                          High-Top Football Boot
                        </p>
                      </div>
                      <p className="text-[20px]">{item.price}</p>
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
        {totalItemsToShow < productData.length && (
          <div className="flex justify-center mt-4">
            <button
              onClick={handleLoadMore}
              className="text-black hover:underline font-semibold mt-7"
            >
              Load More
            </button>
          </div>
        )}
      </motion.section>
    </>
  );
};

export default Store;
