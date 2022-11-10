import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { deleteTodo } from "@features/todos/todosSlice";

const TodoItem = ({ todo }) => {
	const dispatch = useDispatch();
	const handleDelete = (id) => {
		dispatch(deleteTodo(id));
	};
	return (
		<li className="bg-neutral-800 my-2 p-3 rounded-lg flex justify-between items-center">
			<p className={`${todo.completed && "line-through"}`}>
				{todo.id} - {todo.title} : {todo?.description}
			</p>
			<div className="flex gap-4">
				<Link to={`/edit-todo/${todo.id}`}>
					<button className="bg-zinc-600 w-28 h-8 rounded-md hover:bg-zinc-700 text-gray-300 hover:text-gray-50">
						Edit
					</button>
				</Link>
				<button
					className="bg-red-600 w-28 h-8 rounded-md hover:bg-red-700 text-gray-300 hover:text-gray-50"
					onClick={() => handleDelete(todo.id)}
				>
					Delete
				</button>
			</div>
		</li>
	);
};

export { TodoItem };
