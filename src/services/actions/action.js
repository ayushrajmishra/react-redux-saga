//collects data from reactjs(view) and send it to reducer
//we can add logics here

const addToCart = (data) => {
   console.log("action called",data)
    return{
        type:'ADD_TO_CART',
        data:data
    }   
}

export default addToCart