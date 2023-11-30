import { createContext } from "react";

export const ProductContextObject = createContext();

export function ProductContextProvider({ children }) {
  return (
    <ProductContextObject.Provider>{children}</ProductContextObject.Provider>
  );
}
