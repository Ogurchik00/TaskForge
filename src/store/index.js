import { configureStore } from "@reduxjs/toolkit";
import boardsReducer from "./boardsSlice";
import themeReducer from "./themeSlice";

export default configureStore({
  reducer: {
		boards: boardsReducer,
    theme: themeReducer,
  },
})