import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { addTodo, editTodo } from "@features/todos/todosSlice";

const TodoForm = () => {
	const [todo, setTodo] = useState({
		title: "",
		description: "",
	});
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const params = useParams();
	const todos = useSelector((state) => state.todosData.todos);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (params.id) {
			dispatch(editTodo(todo));
		} else {
			dispatch(
				addTodo({
					...todo,
					id: uuid(),
				})
			);
		}

		navigate("/");
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

	return (
		<form onSubmit={handleSubmit}>
			<div className="flex flex-col p-10 gap-4 text-center">
				<label>
					<h4>Create New TODO </h4>
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
				<button className="bg-green-600 rounded-md w-28 h-8 hover:bg-green-700 text-gray-100 hover:text-gray-50 self-center">
					{params.id ? "Edit" : "Create"}
				</button>
			</div>
		</form>
	);
};

export { TodoForm };
