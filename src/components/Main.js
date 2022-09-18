import React from 'react';
import '../App.css';
import {addToCart,removeToCart,emptyCart} from '../services/actions/action';


import { useDispatch } from 'react-redux';

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
  return (
    
    <div>     
      <button onClick={handleClick}>Add to Cart</button>

      <button onClick={handleRemoveClick}>Remove to Cart</button>

      <button onClick={handleEmptyCartClick}>Empty Cart</button>
    </div>

      );
}

export default Main;
