//this is generator function basicall used to handle async calls

import { put, takeEvery } from "redux-saga/effects"
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant"

function* getProduct(){
     let data = yield fetch('http://localhost:3500/products')
    data = yield data.json()
    console.log("product saga",data)
    yield put({type:SET_PRODUCT_LIST,data})
}

function* productSaga(){
yield takeEvery(PRODUCT_LIST,getProduct)
}

export default productSaga