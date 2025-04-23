const initialState = {
	count: 0,
}
import { createSlice } from "@reduxjs/toolkit"

const myReducer = (state = initialState, action) => {
	switch (action.type) {
		case "INCR":
			return { ...state, count: state.count + 1 }
		case "DECR":
			return { ...state, count: state.count - 1 }
		default:
			return state
	}
}
export const mySlice = createSlice({
	name: "mySlice",
	initialState: {
		count: 0,
	},
	reducers: {
		increment: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value += 1
		},
		decrement: (state) => {
			state.value -= 1
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload
		},
	},
})
export default mySlice.reducer
export { myReducer }
