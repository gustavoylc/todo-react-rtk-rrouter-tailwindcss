import { Link } from "react-router-dom";

import {
	useDeleteTodoMutation,
	useUpdateTodoMutation,
} from "@features/todos/api/apiSlice";

const TodoItem = ({ todo }) => {
	const [updateTodo] = useUpdateTodoMutation();
	const [deleteTodo] = useDeleteTodoMutation();

	const handleDelete = (id) => {
		deleteTodo(id);
	};
	const handleCheck = (editTodo) => {
		updateTodo({ ...editTodo, completed: !editTodo.completed });
	};
	return (
		<li className="bg-neutral-800 my-2 p-3 rounded-lg grid grid-cols-[auto_1fr_auto_auto] items-center gap-4">
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={() => handleCheck(todo)}
			/>
			<div>
				<p
					className={`${todo.completed && "line-through"} hover:cursor-pointer`}
					onClick={() => handleCheck(todo)}
				>
					{todo.id} - {todo.title}
				</p>
				<p
					className={`${todo.completed && "line-through"} hover:cursor-pointer`}
					onClick={() => handleCheck(todo)}
				>
					description: {todo.description}
				</p>
			</div>
			<Link to={`/edit-todo/${todo.id}`}>
				<button className="bg-zinc-600 w-20 h-8 rounded-md hover:bg-zinc-700 text-gray-300 hover:text-gray-50">
					Edit
				</button>
			</Link>
			<button
				className="bg-red-600 w-20 h-8 rounded-md hover:bg-red-700 text-gray-300 hover:text-gray-50"
				onClick={() => handleDelete(todo.id)}
			>
				Delete
			</button>
		</li>
	);
};

export { TodoItem };
