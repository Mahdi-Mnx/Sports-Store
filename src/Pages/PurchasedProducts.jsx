import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PurchasedProducts = () => {
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
    <div className="container max-w-screen-xl px-6 py-4 pt-20">
      <h1 className="text-2xl font-bold mb-4">Purchased Products</h1>
      {purchasedData.purchasedItems.length === 0 ? (
        <p>No items purchased.</p>
      ) : (
        <div>
          <h2 className="text-xl font-bold">Customer Information</h2>
          <p>Name: {purchasedData.customerInfo.name}</p>
          <p>Email: {purchasedData.customerInfo.email}</p>
          <p>Address: {purchasedData.customerInfo.address}</p>
          <p>City: {purchasedData.customerInfo.city}</p>
          <p>Postal Code: {purchasedData.customerInfo.postalCode}</p>
          <h2 className="text-xl font-bold mt-4">Order Summary</h2>
          <ul>
            {purchasedData.purchasedItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-4"
              >
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PurchasedProducts;
