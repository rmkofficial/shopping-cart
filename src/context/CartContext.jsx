import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };
  const emptyCart = () => {
    setCart([]);
  };
  const value = { cart, setCart, emptyCart, removeItem };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
