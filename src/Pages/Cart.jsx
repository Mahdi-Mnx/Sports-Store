import React from "react";
import { useCart } from "../Components/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Delete } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const CartPage = () => {
  document.title = "Cart - GOG Store";
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
    toast("Product removed!", {
      icon: "👍",
    });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    toast("Cart is Empty Now! Continue shopping", {
      icon: "🎈",
    });
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

  return (
    <div className="container mx-auto py-4 pt-20 px-6 max-w-full">
      <h1 className="text-2xl font-bold py-5 text-center">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center">
          Your cart is empty.{" "}
          <Link
            className="bg-black py-0.5 px-3 text-white rounded-md"
            to="/store"
          >
            Continue shopping
          </Link>
        </p>
      ) : (
        <div>
          <ul className="px-2">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex flex-col md:flex-row justify-between items-center mb-4"
              >
                <div className="flex items-center w-full md:w-1/3">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="pl-5">
                    <h2 className="text-sm font-semibold">{item.name}</h2>
                    <p className="text-sm">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center mt-2 md:mt-0 w-full md:w-1/3">
                  <div className="flex items-center">
                    <button
                      aria-label="Decrease item count"
                      className="text-white bg-black font-bold text-xs cursor-pointer rounded-md p-1"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      <FaMinus />
                    </button>
                    <span className="mx-2 font-bold text-xl">
                      {item.quantity}
                    </span>
                    <button
                      aria-label="Increase item count"
                      className="text-white bg-black font-bold text-xs cursor-pointer rounded-md p-1"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <Delete />
                  </button>
                </div>
                <div className="text-sm font-bold mt-2 md:mt-0 w-full md:w-1/3 text-right">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col md:flex-row justify-between items-center mt-4">
            <button
              onClick={clearCart}
              className="bg-red-500 text-white py-2 px-4 rounded mb-2 md:mb-0"
            >
              Empty cart
            </button>
            <div className="text-right mt-4 md:mt-0">
              <h2 className="text-xl font-bold">
                Total Price: ${calculateTotalPrice()}
              </h2>
            </div>
          </div>
          <div className="mt-4 mb-60 flex justify-end">
            <button
              onClick={() => navigate("/checkout")}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default CartPage;
