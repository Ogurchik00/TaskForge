import { createSlice, nanoid } from "@reduxjs/toolkit";

const boardsSlce = createSlice({
    name: 'boards',
    initialState: {
      boards: []
    },
    reducers: {
			addBoard: (state, action) => {
				state.boards.push({
					boardId: nanoid(),
					title: action.payload.text,
					description: action.payload.description,
					creationDate: '',
					colorBg: action.payload.colorBg,
					colorText: action.payload.colorText,
					tasks: [],
				})
				console.log(action.payload.colorBg)
			},
			removeBoard: (state, action) => {
				const {boardId} = action.payload
				state.boards = state.boards.filter(board => board.boardId !== boardId)
			},

			addTaskOnBoard: (state, action) => {
				const {boardId, text, priority} = action.payload
				const task = {
					taskId: nanoid(),
					text: text,
					completed: false,
					priority: priority,
				}
				const board = state.boards.find((board) => board.boardId === boardId)
				board.tasks.push(task)
			},
			removeTaskFromBoard: (state, action) => {
				const {boardId, taskId} = action.payload
				const board = state.boards.find((board) => board.boardId === boardId)
				board.tasks = board.tasks.filter((task) => task.taskId !== taskId)
			},
			toggleTaskInBoard: (state, action) => {
				const {boardId, taskId} = action.payload
				const board = state.boards.find((board) => board.boardId === boardId)
				const task = board.tasks.find(task => task.taskId === taskId)
				task.completed = !task.completed
			},

    }
})

export const {addBoard, removeBoard, addTaskOnBoard, removeTaskFromBoard, toggleTaskInBoard} = boardsSlce.actions

export default boardsSlce.reducer