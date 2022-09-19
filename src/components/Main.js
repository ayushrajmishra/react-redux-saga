import React from 'react';
import '../App.css';
import {addToCart,removeToCart,emptyCart} from '../services/actions/action';


import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../services/actions/productAction';

function Main() {
  const dispatch = useDispatch()
  const product={
    id:1,
    name:"iphone",
    type:"mobile",
    price:60000
  }
  const handleClick =()=>{
    dispatch(addToCart(product))
  }

  const handleRemoveClick = () =>{
    dispatch(removeToCart(product))
  }

  const handleEmptyCartClick = () =>{
    dispatch(emptyCart())
  }

  const handleProductList = () => {
    dispatch(productList())
  }

  const data = useSelector((store)=>store.productData)
  console.log("product in maine component",data)
  return (
    
    <div>     
      <button onClick={handleClick}>Add to Cart</button>

      <button onClick={handleRemoveClick}>Remove to Cart</button>

      <button onClick={handleEmptyCartClick}>Empty Cart</button>
      <button onClick={handleProductList}>Get Product List</button>
    </div>

      );
}

export default Main;
