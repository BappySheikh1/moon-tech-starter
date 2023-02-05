import axios from "../../utils/axios.config";

export const fetchProducts = async()=>{
    const data = await axios.get('/products')
   
    return data.data.data
}

// post method
export const postProduct =async (productData)=>{
    await axios.post('/product',productData)
}
// delete method
export const deleteProduct =async (_id)=>{
    await axios.delete(`/product/${_id}`)
}