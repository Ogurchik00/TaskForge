import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
	name: 'tasks',
	initialState: {
		tasks: [],
	},
	reducers: {
		addTask: (state, action) => {
			state.tasks.push({
				taskId: nanoid(),
				text: action.payload.text,
				completed: false,
			})
		},
		removeTask: (state, action) => {
			console.log('Я вызвался')
			state.tasks = state.tasks.filter(task => task.taskId!== action.payload.taskId)
		},
		toggleTaskComplete: (state, action) => {
			console.log(action)
			const task = state.tasks.find(task => task.taskId === action.payload.taskId)
      if (task) {
        task.completed = !task.completed
      }
		},

	}

})

export const {addTask, removeTask, toggleTaskComplete} = tasksSlice.actions

export default tasksSlice.reducer