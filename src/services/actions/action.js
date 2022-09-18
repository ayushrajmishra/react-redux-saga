//collects data from reactjs(view) and send it to reducer
//we can add logics here

import {ADD_TO_CART} from '../constant'
const addToCart = (data) => {
   console.log("action from action.js",data)
    return{
        type:ADD_TO_CART,
        data:data
    }   
}

export default addToCart