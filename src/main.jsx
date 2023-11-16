import React from "react";
import ReactDOM from "react-dom/client";
import ProductsContextProvider from "./contexts/ProductsContext";
import CartContextProvider from "./contexts/CartContext";
import AllRoutes from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <ProductsContextProvider>
        <CartContextProvider>
          <AllRoutes />
        </CartContextProvider>
      </ProductsContextProvider>
    </>
  </React.StrictMode>
);
