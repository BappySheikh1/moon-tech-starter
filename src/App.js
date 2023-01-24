import React from "react";
import { RouterProvider } from "react-router-dom";
import ProductsProvider from "./Context/ProductsProvider";
import routes from "./routes/routes";



function App() {

  return (
    <div>
      <ProductsProvider>
      <RouterProvider router={routes} />
      </ProductsProvider>
    </div>
  );
}

export default App;
