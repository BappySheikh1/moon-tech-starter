import React from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../Context/ProductsProvider';

const Wishlist = () => {
    const {
        state : { wishlist, loading, error},
      }=useProducts()
      
      let content ;
      
      if(loading){
        content = <p>Loading........</p>
      }
      
      if(error){
        content = <p>Something is wrong</p>
      }
      
      if(!loading && !error && wishlist.length === 0){
        content = <p>Nothing to show, Product List is Empty</p>
      }
      if(!loading && !error && wishlist.length){
        content = wishlist?.map((product,i) => <ProductCard key={i} product={product}/>)
      }
      
        return (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
           
            {content}
          </div>
        );
      };
      
export default Wishlist;