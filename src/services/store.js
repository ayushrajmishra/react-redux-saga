//import {createStore} from "redux"
import { configureStore } from '@reduxjs/toolkit'
import index from './reducers/index'
import productSaga from './productSaga'
import createSagaMiddleware from '@redux-saga/core'

//const store = createStore(index)
const sagaMiddleware = createSagaMiddleware()
const store =configureStore(
    {reducer:index,
    middleware:()=>[sagaMiddleware]
    }
    )

sagaMiddleware.run(productSaga)
export default store