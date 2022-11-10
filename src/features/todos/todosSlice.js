import { createSlice } from "@reduxjs/toolkit";
import "@services/todos";


const initialState = {
	todos: [
		{
			userId: 10,
			id: 197,
			title: "dignissimos quo nobis earum saepe",
			description: "description 1",
			completed: true,
		},
		{
			userId: 10,
			id: 198,
			title: "quis eius est sint explicabo",
			description: "description 2",
			completed: true,
		},
	],
};

export const todosSlice = createSlice({
	name: "todosList",
	initialState,
	reducers: {
		initialsTodos: (state, action) => ({
			// todos: action.payload,
		}),
		addTodo: (state, action) => ({ todos: [...state.todos, action.payload] }),
		editTodo: (state, action) => {
			const foundTodo = state.todos.find(
				(todo) => todo.id === action.payload.id
			);
			if (foundTodo) {
				foundTodo.title = action.payload.title;
				foundTodo.description = action.payload.description;
			}
		},
		deleteTodo: (state, action) => {
			const foundTodo = state.todos.find((todo) => todo.id === action.payload);
			foundTodo && state.todos.splice(state.todos.indexOf(foundTodo), 1);
		},
		checkTodo: (state, action) => {
			const foundTodo = state.todos.find((todo) => todo.id === action.payload);
			foundTodo.completed = !foundTodo.completed;
		},
	},
});

export const { initialsTodos, addTodo, deleteTodo, editTodo, checkTodo } =
	todosSlice.actions;

export default todosSlice.reducer;