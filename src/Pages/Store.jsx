import { motion } from "framer-motion";


const Store = () => {

  return (
    <>
    <motion.section
          className="container max-w-screen-xl py-3 px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="p-5">
          <div className="flex gap-4">
            <div className="w-6/12 shadow border-black border-[1px] rounded-lg p-4 text-black">
            <div className=" mx-auto items-center flex justify-center">
              <img className="w-60 h-60" src="/public/images/brooklyn_prev_ui.png" alt="" />
            </div>
            <div className="flex gap-4 items-center justify-center mt-3">
              <img className="w-24 border-blue-500 border-[1.5px] shadow-md rounded-md" src="/public/images/academy-football-1.png" alt="yes" />
              <img className="w-24 shadow-md rounded-md" src="/public/images/academy-football-3_prev_ui.png" alt="yes" />
              <img className="w-24 shadow-md rounded-md" src="/public/images/academy-football-2_prev_ui.png" alt="yes" />
              <img className="w-24 shadow-md rounded-md" src="/public/images/adidas-shoes-11.png" alt="yes" />
            </div>
            </div>
            <div className="w-4/12 shadow rounded-lg p-4 text-black">hello</div>
            <div className="w-2/12 shadow rounded-lg p-4 text-black">hello</div>
          </div>
          </div>
        </motion.section>
    </>
  )
};

export default Store;
