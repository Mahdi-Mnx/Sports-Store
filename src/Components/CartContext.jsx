// CartContext.js
import React, { createContext, useReducer, useContext, useEffect } from "react";
const CartContext = createContext();

const cartReducer = (state, action) => {
  const { type, payload } = action;

  const reducers = {
    ADD_TO_CART: () => {
      const existingItemIndex = state.findIndex((item) => item.id === payload.id);
      if (existingItemIndex > -1) {
        return state;
      }
      return [...state, { ...payload, quantity: payload.quantity || 1 }];
    },
    REMOVE_FROM_CART: () => state.filter((item) => item.id !== payload),
    CLEAR_CART: () => [],
    INCREASE_QUANTITY: () =>
      state.map((item) =>
        item.id === payload ? { ...item, quantity: item.quantity + 1 } : item
      ),
    DECREASE_QUANTITY: () =>
      state.map((item) =>
        item.id === payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    DEFAULT: () => state,
  };

  return (reducers[type] || reducers.DEFAULT)();
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
