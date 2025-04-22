import { createStore } from 'redux'
import myReducer from './reducer'
const myStore = createStore(myReducer)
export default myStore