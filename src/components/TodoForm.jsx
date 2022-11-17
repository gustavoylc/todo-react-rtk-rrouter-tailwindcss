import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
	apiSlice,
	useAddTodoMutation,
	useUpdateTodoMutation,
} from "@features/todos/api/apiSlice";

const TodoForm = () => {
	const { data: todos } = useSelector(apiSlice.endpoints.getTodoList.select());
	const [addTodo] = useAddTodoMutation();
	const [updateTodo] = useUpdateTodoMutation();

	const [todo, setTodo] = useState({
		title: "",
		description: "",
	});
	const navigate = useNavigate();
	const params = useParams();
	const handleSubmit = (e) => {
		e.preventDefault();
		params.id
			? updateTodo(todo)
			: addTodo({
					title: todo.title,
					description: todo.description,
					completed: false,
					userId: 1,
			  });
		navigate("/todos");
	};

	const handleChange = (e) => {
		setTodo({
			...todo,
			[e.target.name]: e.target.value,
		});
	};

	const findTodo = (paramId) => {
		return todos.find((findTodo) => String(findTodo.id) === paramId);
	};

	useEffect(() => {
		params.id && setTodo(findTodo(params.id));
	}, []);

	const handleReturn = () => {
		navigate(-1);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex justify-center"
		>
			<div className="flex flex-col gap-4 text-center mt-24 w-4/6 self-center">
				<label>
					<h5>Create New TODO </h5>
				</label>
				<input
					className="text-gray-400 bg-neutral-800 rounded-md focus:outline-none focus:bg-neutral-700 focus:text-gray-200 p-4 "
					onChange={handleChange}
					placeholder="Title..."
					type="text"
					name="title"
					value={todo.title}
				/>
				<textarea
					className="text-gray-400 bg-neutral-800 rounded-md focus:outline-none focus:bg-neutral-700 focus:text-gray-200 p-4 "
					onChange={handleChange}
					placeholder="Description..."
					name="description"
					value={todo.description}
				/>
				<div className="flex w-full justify-between">
					<button className="bg-green-600 rounded-md w-20 h-8 hover:bg-green-700 text-gray-100 hover:text-gray-50 self-center">
						{params.id ? "Edit" : "Create"}
					</button>
					<button
						type="button"
						className="bg-zinc-600 rounded-md w-20 h-8 hover:bg-zinc-700 text-gray-100 hover:text-gray-50 self-center"
						onClick={handleReturn}
					>
						Volver
					</button>
				</div>
			</div>
		</form>
	);
};

export { TodoForm };
