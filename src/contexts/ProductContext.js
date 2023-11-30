import { createContext, useState, useEffect, useContext } from "react";
import { CartContext } from "./CartContext";
import { data } from "../data";

export const ProductContext = createContext();

export function ProductContextProvider({ children }) {
  const [products, setProducts] = useState(data);
  const { cart, setCart } = useContext(CartContext);

  const addItem = (item) => {
    setCart([...cart, item]);
  };
  useEffect(() => {
    console.log("SEPETE EKLEDİM Mİ?", cart);
  }, [cart]);

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      {children}
    </ProductContext.Provider>
  );
}
