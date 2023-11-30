import { createContext, useState, useEffect, useContext } from "react";
import { CartContext } from "./CartContext";
import { data } from "../data";
import { nanoid } from "nanoid";

export const ProductContext = createContext();

export function ProductContextProvider({ children }) {
  const [products, setProducts] = useState(data);
  const { cart, setCart } = useContext(CartContext);

  const addItem = (item) => {
    const newItem = { ...item, id: nanoid() };
    setCart([...cart, newItem]);
  };
  useEffect(() => {
    console.log("ADD ITEM", cart);
  }, [cart]);

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    console.log("DELETE ITEM", cart);
  };

  return (
    <ProductContext.Provider value={{ products, addItem, removeItem }}>
      {children}
    </ProductContext.Provider>
  );
}
