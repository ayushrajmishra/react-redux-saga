import { PRODUCT_LIST ,SET_PRODUCT_LIST} from "../constant";

const productData = (data=[],action) =>{
    switch(action.type){
        // case PRODUCT_LIST:
        //     console.log("product reducer called")
        //     console.log(action.data)
        //     return [action.data]
        case SET_PRODUCT_LIST:
          
                console.log("roduct reducer called",action.data)
                return [...action.data]    
         default:
            return data   
    }
}

export default productData