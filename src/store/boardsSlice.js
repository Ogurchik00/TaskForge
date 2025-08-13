import { createSlice, nanoid } from "@reduxjs/toolkit";

const savedBoards = JSON.parse(localStorage.getItem('boards')) || [];

const boardsSlice = createSlice({
  name: 'boards',
  initialState: {
    boards: savedBoards
  },
  reducers: {
    addBoard: (state, action) => {
      const {text,description, colorBg, colorText} = action.payload
      state.boards.push({
        boardId: nanoid(),
        title: text,
        description: description,
        creationDate: '',
        colorBg: colorBg,
        colorText: colorText,
        columns: [],
      });
      localStorage.setItem('boards', JSON.stringify(state.boards)); 
    },
    removeBoard: (state, action) => {
      const { boardId } = action.payload;
      state.boards = state.boards.filter(board => board.boardId !== boardId);
      localStorage.setItem('boards', JSON.stringify(state.boards));
    },
    addColumnOnBoard: (state, action) => {
      const { boardId, title } = action.payload;
      const column = {
        columnId: nanoid(),
        title,
        tasks: []
      };
      const board = state.boards.find(board => board.boardId === boardId);
      board.columns.push(column);
      localStorage.setItem('boards', JSON.stringify(state.boards)); 
    },
    removeColumnOnBoard: (state, action) => {
      const { boardId, columnId } = action.payload;
      const board = state.boards.find(board => board.boardId === boardId);
      board.columns = board.columns.filter(column => column.columnId !== columnId)
      localStorage.setItem('boards', JSON.stringify(state.boards)); 
    },
    addTaskOnColumn: (state, action) => {
      const { boardId, columnId, text, priority } = action.payload;
      const task = {
        taskId: nanoid(),
        text,
        completed: false,
        priority,
      };
      const board = state.boards.find(board => board.boardId === boardId);
      const column = board.columns.find(column => column.columnId === columnId);
      column.tasks.push(task);
      localStorage.setItem('boards', JSON.stringify(state.boards)); 
    },
    removeTaskFromBoard: (state, action) => {
      const { boardId, columnId, taskId } = action.payload;
      const board = state.boards.find(board => board.boardId === boardId);
      const column = board.columns.find(column => column.columnId === columnId);
      column.tasks = column.tasks.filter(task => task.taskId !== taskId);
      localStorage.setItem('boards', JSON.stringify(state.boards)); 
    },
    toggleTaskInBoard: (state, action) => {
      const { boardId, taskId } = action.payload;
      const board = state.boards.find(board => board.boardId === boardId);
      const task = board.tasks.find(task => task.taskId === taskId);
      task.completed = !task.completed;
      localStorage.setItem('boards', JSON.stringify(state.boards));
    },
  }
});

export const {addBoard, removeBoard, addColumnOnBoard, addTaskOnColumn, removeColumnOnBoard, removeTaskFromBoard, toggleTaskInBoard} = boardsSlice.actions

export default boardsSlice.reducer