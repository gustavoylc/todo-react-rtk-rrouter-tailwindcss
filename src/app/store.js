import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "@features/todos/todosSlice";
import uiTodosReducer from "@features/todos/uiSlice";

export const store = configureStore({
	reducer: { todosData: todosReducer, todosUi: uiTodosReducer },
});
