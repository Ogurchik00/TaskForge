import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: 'color',
	initialState: {
		colorBg: [],
		colorText: [],
	},

	reducers: {
		addColorBg: () => {
			
		},
		addColorText: () => {

		},
	}
})

export const {addColorBg, addColorText} = colorSlice.actions
export default colorSlice.reducer 
