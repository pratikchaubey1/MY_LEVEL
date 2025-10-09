import React, { useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";

function ProductProvider({ children }) {
  const [isscroll, setisscroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => setisscroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <ProductContext.Provider
      value={{
        isscroll,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
