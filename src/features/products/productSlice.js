import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {deleteProduct, fetchProducts, postProduct} from './productApi'
export const initialState = {
    products : [],
    isLoading : false,
    isError : false,
    error : "",
    postSuccess : false,
    deleteSuccess : false,
};

export const getProducts =createAsyncThunk("products/getProduct", async () =>{
   const product =fetchProducts()
   return product;

});

export const addProduct =createAsyncThunk("product/addProduct", async (data) =>{
   const product =postProduct(data)
   return product;

});
export const removeProduct =createAsyncThunk("product/removeProduct", async (_id,thunkAPI) =>{
   const product =await deleteProduct(_id);
   thunkAPI.dispatch(removeFormList(_id));
   return product;

});

const productSlice =createSlice({
    name : 'products',
    initialState,
     reducers : {
      togglePostSuccess : (state) =>{
        state.postSuccess = false;
      },
      toggleDeleteSuccess : (state) =>{
        state.deleteSuccess = false;
      },
      removeFormList : (state,action)=>{
        state.products = state.products.filter(
          product => product._id !== action.payload
          )
      }
     },
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

    // postMethod
  .addCase(addProduct.pending,(state,action)=>{
    state.isLoading =true;
    state.postSuccess =false;
    state.isError =true;
  })
  .addCase(addProduct.fulfilled,(state,action)=>{
    state.postSuccess = true;
    state.isLoading =false;
  })
 .addCase(addProduct.rejected,(state, action)=>{
    state.products = [];
    state.isLoading =false;
    state.postSuccess = false;
    state.isError =true;
    state.error = action.error.message;
 })
  
//  Delete method
.addCase(removeProduct.pending,(state,action)=>{
  state.isLoading =true;
  state.deleteSuccess =false;
  state.isError =true;
})
.addCase(removeProduct.fulfilled,(state,action)=>{
  state.deleteSuccess =true;
  state.isLoading =false;
})
.addCase(removeProduct.rejected,(state, action)=>{
  state.products = [];
  state.isLoading =false;
  state.deleteSuccess =false;
  state.isError =true;
  state.error = action.error.message;
})

   }, 
});


export const {togglePostSuccess,toggleDeleteSuccess,removeFormList} = productSlice.actions;
export default productSlice.reducer;