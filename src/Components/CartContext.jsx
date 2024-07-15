// CartContext.js
import React, { createContext, useReducer, useContext, useEffect } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex > -1) {
        const updatedCart = [...state];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity:
            updatedCart[existingItemIndex].quantity +
            (action.payload.quantity || 1),
        };
        return updatedCart;
      } else {
        return [
          ...state,
          { ...action.payload, quantity: action.payload.quantity || 1 },
        ];
      }
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);
    case "CLEAR_CART":
      return [];
    case "INCREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case "DECREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
