import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";



import { fetchAddTodo, fetchEditTodo } from "@features/todos/todosSlice";


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
		let titleValue = todo.title;
		if (todo.description) {
			titleValue = todo.title + " - description: " + todo.description;
		}
		params.id
			? dispatch(fetchEditTodo({ ...todo, title: titleValue }))
			: dispatch(fetchAddTodo(titleValue));
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
		navigate(-1)
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
					<button className="bg-zinc-600 rounded-md w-20 h-8 hover:bg-zinc-700 text-gray-100 hover:text-gray-50 self-center" onClick={handleReturn}>
						Volver
					</button>
				</div>
			</div>
		</form>
	);
};

export { TodoForm };