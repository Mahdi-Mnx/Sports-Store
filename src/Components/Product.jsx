import React from 'react'

const Product = () => {
  return (
    <div className="bg-white w-1/3 rounded-3xl flex flex-col p-4 ">
            <img
              className="w-full h-72"
              src="/public/images/adidas-shoes-11.png"
              alt=""
            />
            <div className="flex items-center justify-between pt-2">
              <p className="text-xl font-bold">Nike Dri-FIT ADV Club</p>
              <p className="text-xl font-bold">$27.99</p>
            </div>
            <div className="flex items-start pt-5 pb-1">
              <button className=" border-2 border-primary hover:bg-primary transition py-2 px-5 rounded-2xl">
                Add to cart
              </button>
            </div>
          </div>
  )
}

export default Product