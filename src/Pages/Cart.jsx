import React, { useState } from "react";
import { useCart } from "../Components/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";

const CartPage = () => {
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

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const increaseQuantity = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

  const calculateTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const purchasedData = { purchasedItems: cart, customerInfo: formData };
    // Save purchased items to localStorage
    localStorage.setItem("purchasedProducts", JSON.stringify(purchasedData));
    // Navigate to the PurchasedProducts page
    navigate("/product-purchased", { state: purchasedData });
    // Clear the cart
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="container mx-auto py-4 pt-20">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/">Continue shopping</Link>.
        </p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
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
                  <div className="flex items-center">
                    <button
                      aria-label="Decrease item count"
                      className="text-primary font-bold text-xl cursor-pointer hover:bg-primary/10 rounded-md p-1"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      <FaMinus />
                    </button>
                    <span className="mx-2 font-bold text-xl">
                      {item.quantity}
                    </span>
                    <button
                      aria-label="Increase item count"
                      className="text-primary font-bold text-xl cursor-pointer hover:bg-primary/10 rounded-md p-1"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={clearCart}
              className="bg-red-500 text-white py-2 px-4 rounded"
            >
              Clear Cart
            </button>
            <div className="text-right mt-4">
              <h2 className="text-xl font-bold">
                Total Price: ${calculateTotalPrice()}
              </h2>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Checkout</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Payment Method
                </label>
                <div className="mt-1">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Visa"
                      checked={formData.paymentMethod === "Visa"}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    <span className="ml-2">Visa</span>
                  </label>
                  <label className="inline-flex items-center ml-4">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Mastercard"
                      checked={formData.paymentMethod === "Mastercard"}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    <span className="ml-2">Mastercard</span>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
