import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

const Product_Context =createContext();

function App() {
 const [products, setProducts]=useState([])
  useEffect(()=>{
   fetch('products.json')
   .then(res => res.json())
   .then(data => setProducts(data))
  },[])

  console.log(products);
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
