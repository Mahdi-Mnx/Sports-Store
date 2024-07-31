import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PurchasedProducts = () => {
  document.title = "Purchased Products";
  const location = useLocation();
  const [purchasedData, setPurchasedData] = useState({
    purchasedItems: [],
    customerInfo: {},
  });

  useEffect(() => {
    // Load purchased items from localStorage if available
    const data =
      location.state || JSON.parse(localStorage.getItem("purchasedProducts"));
    if (data) {
      setPurchasedData(data);
    }
  }, [location.state]);

  return (
    <div className="container max-w-screen-xl mx-auto px-6 py-4 pt-20">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Purchased Products
      </h1>
      {purchasedData.purchasedItems.length === 0 ? (
        <p className="text-center text-gray-600">No items purchased.</p>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            Customer Information
          </h2>
          <div className="mb-6">
            <p className="text-lg">
              <span className="font-semibold">Name:</span>{" "}
              {purchasedData.customerInfo.name}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Email:</span>{" "}
              {purchasedData.customerInfo.email}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Address:</span>{" "}
              {purchasedData.customerInfo.address}
            </p>
            <p className="text-lg">
              <span className="font-semibold">City:</span>{" "}
              {purchasedData.customerInfo.city}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Postal Code:</span>{" "}
              {purchasedData.customerInfo.postalCode}
            </p>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            Order Summary
          </h2>
          <ul>
            {purchasedData.purchasedItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col md:flex-row justify-between items-center mb-6 p-4 bg-gray-50 rounded-lg shadow-sm"
              >
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1 ml-0 md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                  <h2 className="text-lg font-semibold text-gray-700">
                    {item.name}
                  </h2>
                  <p className="text-gray-600">
                    Price: ${item.price.toFixed(2)}
                  </p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-gray-600 font-bold">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <button className="py-1 px-3 bg-green-500 text-white rounded-md mt-4 md:mt-0">
                  Completed
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PurchasedProducts;
