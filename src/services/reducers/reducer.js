import {ADD_TO_CART, REMOVE_TO_CART,EMPTY_CART} from '../constant'



const cartData = (data=[],action) => {
   
    switch(action.type){
        case ADD_TO_CART:
            return [action.data,...data]
        case REMOVE_TO_CART:
            //data.length? data.length = data.length -1  :[] 
            data.length = data.length ? data.length = data.length -1:[]
                return [...data]
        case EMPTY_CART:
            data=[]    
            return data
        default:
                return data;
    }

    
}

export default cartData