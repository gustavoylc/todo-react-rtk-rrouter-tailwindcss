import { Link } from "react-router-dom";

import { Loading } from "@components/Loading";
import { TodoItem } from "@components/TodoItem";

import { useGetTodoListQuery } from "@features/todos/api/apiSlice";

const TodoList = () => {
	const {
		data: todos,
		isLoading,
		error,
	} = useGetTodoListQuery(undefined, {
		// pollingInterval: 3000
		// skip: true
	});
	return (
		<>
			{error && <h3>{error.error}</h3>}
			{isLoading ? (
				<Loading />
			) : (
				<div className=" w-4/6 px-10 mb-16">
					<Link to="/create-todo">
						<button className="text-center bg-green-600 rounded-md w-20 h-8 hover:bg-green-700 text-gray-100 hover:text-gray-50">
							Create
						</button>
					</Link>
					<ul className="text-gray-200 text-sm">
						{todos.map((todo) => (
							<TodoItem
								key={todo.id}
								todo={todo}
							/>
						))}
					</ul>
				</div>
			)}
		</>
	);
};

export { TodoList };
