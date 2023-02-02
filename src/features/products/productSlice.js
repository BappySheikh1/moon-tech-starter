import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState = {
    products : [],
    isLoading : false,
    isError : false,
    error : "",
};

export const getProducts =createAsyncThunk("products/getProduct", async ()=>{

  const res = await fetch('https://moon-tech-server-ruddy.vercel.app/products')
  const data = await res.json();
 
  return data.data
});

const productSlice =createSlice({
    name : 'products',
    initialState,

   extraReducers : (builder)=>{
    builder
    .addCase(getProducts.pending, (state,action)=>{
        state.isLoading = true;
        state.isError = true ;
    })

   .addCase(getProducts.fulfilled, (state,action)=>{
        state.products =action.payload;
        state.isLoading = false
    })
    
    .addCase(getProducts.rejected, (state,action)=>{
        state.products = [];
        state.isLoading =false;
        state.isError =true;
        state.error = action.error.message;
    })

   },
});


export const {} = productSlice.actions;
export default productSlice.reducer;