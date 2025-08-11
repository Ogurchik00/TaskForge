import { configureStore } from "@reduxjs/toolkit";
import boardsReducer from "./boardsSlice";
import themeReducer from "./themeSlice";
import colorReducer from "./colorSlice";

export default configureStore({
  reducer: {
		boards: boardsReducer,
    theme: themeReducer,
    color: colorReducer,
  },
})