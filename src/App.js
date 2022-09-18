import React from 'react';
import logo from './logo.svg';
import './App.css';
import addToCart from './services/actions/action';
import { useDispatch } from 'react-redux';

function App() {
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
  return (
    <div className="App">
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  );
}

export default App;
