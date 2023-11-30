import { createContext } from "react";

export const ProductContext = createContext();

export function ProductContextProvider({ children }) {
  return <ProductContext.Provider>{children}</ProductContext.Provider>;
}
