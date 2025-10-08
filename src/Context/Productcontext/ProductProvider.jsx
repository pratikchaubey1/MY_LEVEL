import React, { useState } from "react";
import { ProductContext } from "./ProductContext";


function ProductProvider({ children }) {
     const [isscroll,setisscroll]= useState(false);
  return (
    <ProductContext.Provider
      value={{
        isscroll
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
