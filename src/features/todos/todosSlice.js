import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTodoService, deleteTodoService, editTodoService, getTodoListService, searchTodoService } from "@services/todos";



import { setLoading } from "@features/todos/uiSlice";


const initialState = {
	todos: [],
};

export const fetchGetTodoList = createAsyncThunk(
	"todosList/fetchGetTodoList",
	async (_, { dispatch }) => {
		dispatch(setLoading(true));
		const todoList = await getTodoListService();
		dispatch(initialsTodos(todoList));
		dispatch(setLoading(false));
	}
);

export const fetchAddTodo = createAsyncThunk(
	"todosList/fetchAddTodo",
	async (titleWithDescription, { dispatch }) => {
		dispatch(setLoading(true));
		const newTodo = await addTodoService(titleWithDescription);
		dispatch(addTodo(newTodo));
		dispatch(setLoading(false));
	}
);

export const fetchEditTodo = createAsyncThunk(
	"todosList/fetchEditTodo",
	async (editTodoValues, { dispatch }) => {
		dispatch(setLoading(true));
		const editedTodo = await editTodoService(editTodoValues);
		dispatch(editTodo(editedTodo));
		dispatch(setLoading(false));
	}
);
export const fetchDeleteTodo = createAsyncThunk(
	"todosList/fetchDeleteTodo",
	async (todoId, { dispatch }) => {
		dispatch(setLoading(true));
		const deletedTodo = await deleteTodoService(todoId);
		dispatch(deleteTodo(deletedTodo));
		dispatch(setLoading(false));
	}
);

export const fetchSearchTodo = createAsyncThunk(
	"todosList/fetchSearchTodo",
	async (searchValue, { dispatch }) => {
		dispatch(setLoading(true));
		const foundTodo = await searchTodoService(searchValue);
		dispatch(initialsTodos(foundTodo));
		dispatch(setLoading(false));
	}
);

export const todosSlice = createSlice({
	name: "todosList",
	initialState,
	reducers: {
		initialsTodos: (state, action) => {
			state.todos = action.payload;
		},
		addTodo: (state, action) => {
			state.todos.push(action.payload);
			// ({ todos: [...state.todos, action.payload] }),
		}, 
		editTodo: (state, action) => {
			const foundTodo = state.todos.find(
				(todo) => todo.id === action.payload.id
			);
			if (foundTodo) {
				foundTodo.title = action.payload.title;
				foundTodo.completed = action.payload.completed;
			}
		},
		deleteTodo: (state, action) => {
			const foundTodo = state.todos.find((todo) => todo.id === action.payload);
			foundTodo && state.todos.splice(state.todos.indexOf(foundTodo), 1);
		},
		searchTodo: (state, action) => ({
			todos: action.payload,
		}),
	},
});

export const {
	initialsTodos,
	addTodo,
	deleteTodo,
	editTodo,
	searchTodo,
} = todosSlice.actions;

export default todosSlice.reducer;