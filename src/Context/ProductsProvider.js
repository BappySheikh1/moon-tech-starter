import React, { createContext, useEffect, useState } from 'react';
import { useReducer } from 'react';
import { useContext } from 'react';
import { actionTypes } from '../State/ProductState/ActionTypes';
import { initialState, productReducer } from '../State/ProductState/ProductReducer';

export const Product_Context =createContext();

const ProductsProvider = ({children}) => {

const [state, dispatch] = useReducer(productReducer, initialState)

    useEffect(()=>{
        dispatch({type : actionTypes.FETCHING_START})
     fetch('products.json')
     .then(res => res.json())
     .then(data => 
        
        dispatch({type : actionTypes.FETCHING_SUCCESS, payload : data})
        )
      .catch(()=>{
         dispatch({type : actionTypes.FETCHING_ERROR})
      })
    },[])
  
    console.log(state.products);
    const value ={
        state,
        dispatch,
    }

    return (
        // eslint-disable-next-line react/jsx-pascal-case
        <Product_Context.Provider value={value}>
            {children}
        </Product_Context.Provider>
    );
};

// Context Custom hook
export const useProducts =()=>{
 const context = useContext(Product_Context)
 return context
}


export default ProductsProvider;