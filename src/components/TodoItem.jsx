import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { checkTodo, deleteTodo } from "@features/todos/todosSlice";

const TodoItem = ({ todo }) => {
	const dispatch = useDispatch();
	const handleDelete = (id) => {
		dispatch(deleteTodo(id));
	};
	const handleCheck = (id) => {
		dispatch(checkTodo(id));
	};
	return (
		<li className="bg-neutral-800 my-2 p-3 rounded-lg grid grid-cols-[auto_1fr_auto_auto] items-center gap-4">
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={() => handleCheck(todo.id)}
			/>
			<div>
				<p
					className={`${todo.completed && "line-through"} hover:cursor-pointer`}
					onClick={() => handleCheck(todo.id)}
				>
					{todo.title}
				</p>
				<p
					className={`${todo.completed && "line-through"} hover:cursor-pointer`}
					onClick={() => handleCheck(todo.id)}
				>
					{todo?.description}
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
