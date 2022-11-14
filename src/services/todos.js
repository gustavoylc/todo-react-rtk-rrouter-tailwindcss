import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.post["Content-Type"] = "application/json; charset=UTF-8";
axios.defaults.headers.put["Content-Type"] = "application/json; charset=UTF-8";

export const getTodoListService = async () => {
	try {
		const params = {
			params: {
				_sort: "id",
				_order: "desc",
			},
		};
		const result = await axios.get("todos", params);
		return result.data;
	} catch (error) {
		console.error(error);
	}
};

export const addTodoService = async (title) => {
	try {
		const data = {
			title,
			completed: false,
			userId: 1,
		};
		const result = await axios.post("todos", data);
		return result.data;
	} catch (error) {
		console.error(error);
	}
};

export const searchTodoService = async (searchValue) => {
	try {
		const params = {
			params: {
				q: searchValue,
			},
		};
		const result = await axios.get("todos", params);
		return result.data;
	} catch (error) {
		console.error(error);
	}
};

export const editTodoService = async (editTodo) => {
	try {
		const data = {
			title: editTodo.title,
			completed: editTodo.completed,
		};
		const result = await axios.patch("todos/" + editTodo.id, data);
		return result.data;
	} catch (error) {
		console.error(error);
	}
};

export const deleteTodoService = async (todoId) => {
	try {
		const result = await axios.delete("todos/" + todoId);
		if (result.status === 200) return todoId;
	} catch (error) {
		console.error(error);
	}
};
