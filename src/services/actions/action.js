//collects data from reactjs(view) and send it to reducer
//we can add logics here

import {ADD_TO_CART,EMPTY_CART,REMOVE_TO_CART} from '../constant'


const addToCart = (data) => {
   console.log("action from action.js",data)
    return{
        type:ADD_TO_CART,
        data:data
    }   
}

const removeToCart = (data) =>{
    return{
        type:REMOVE_TO_CART,
        data:data
    }
}

const emptyCart = () =>{
    return{
        type:EMPTY_CART
    }
}

export  {addToCart ,removeToCart,emptyCart}