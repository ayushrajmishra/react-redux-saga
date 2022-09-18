import {ADD_TO_CART} from '../constant'



const cartData = (data=[],action) => {
    
    if(action.type === ADD_TO_CART){
        console.log("action from reducer")
        return [action.data,...data];
    }
    return data;
}

export default cartData