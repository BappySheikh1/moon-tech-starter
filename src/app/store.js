import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filter/filterSlice";
import logger from "redux-logger";
import productSlice from "../features/products/productSlice";

export const store =configureStore({
    devTools : true,
    reducer:{
        cart : cartSlice ,
        filter : filterSlice,
        products : productSlice,
    },
    middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
})