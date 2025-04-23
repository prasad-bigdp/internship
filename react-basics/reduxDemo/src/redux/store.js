import { createStore } from 'redux'
import { myReducer } from './reducer'
const myStore = createStore(myReducer)
import { configureStore } from "@reduxjs/toolkit"
import  mySliceReducer  from './reducer'

export const RTstore = configureStore({
	reducer: {mySliceReducer},
})


export default myStore