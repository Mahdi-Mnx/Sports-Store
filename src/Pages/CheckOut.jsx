import React, { useState } from "react";
import { useCart } from "../Components/CartContext";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const CheckoutPage = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "Visa",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast("Thanks For Your Order ", {
      icon: "🎉🎊",
    });
    const purchasedData = { purchasedItems: cart, customerInfo: formData };
    // Save purchased items to localStorage
    localStorage.setItem("purchasedProducts", JSON.stringify(purchasedData));

    // Clear the cart
    dispatch({ type: "CLEAR_CART" });

    // Delay navigation to show the toast notification
    setTimeout(() => {
      navigate("/product-purchased", { state: purchasedData });
    }, 2000);
  };

  return (
    <div className="container mx-auto py-4 pt-20 px-6">
      <Toaster />
      <h1 className="text-3xl font-bold py-5 text-center text-gray-800">
        Checkout
      </h1>

      <div className="max-w-lg mx-auto mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Order Summary</h2>
        <ul className="bg-white rounded-lg shadow-md p-4">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center mb-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h2 className="text-sm font-semibold">{item.name}</h2>
                  <p className="text-sm">${item.price.toFixed(2)}</p>
                  <p className="text-sm">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="text-sm font-bold">
                Total: ${(item.price * item.quantity).toFixed(2)}
              </div>
            </li>
          ))}
          <li className="flex justify-between items-center mt-4 border-t pt-4">
            <span className="text-lg font-bold">Total Price:</span>
            <span className="text-lg font-bold">
              $
              {cart
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </li>
        </ul>
      </div>

      <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">
          Billing Details
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="john.doe@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="123 Main St"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="New York"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Postal Code
              </label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="10001"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Payment Method
            </label>
            <div className="mt-2 flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Visa"
                  checked={formData.paymentMethod === "Visa"}
                  onChange={handleChange}
                  className="form-radio focus:ring-blue-500 focus:border-blue-500"
                />
                <span className="ml-2 text-gray-600">Visa</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Mastercard"
                  checked={formData.paymentMethod === "Mastercard"}
                  onChange={handleChange}
                  className="form-radio focus:ring-blue-500 focus:border-blue-500"
                />
                <span className="ml-2 text-gray-600">Mastercard</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 w-full transition duration-200"
          >
            Place Order
          </button>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default CheckoutPage;
