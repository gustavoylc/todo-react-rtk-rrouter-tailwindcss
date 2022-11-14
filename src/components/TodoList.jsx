import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Loading } from "@components/Loading";
import { TodoItem } from "@components/TodoItem";

import { fetchGetTodoList } from "@features/todos/todosSlice";

const TodoList = () => {
	const todos = useSelector((state) => state.todosData.todos, shallowEqual);
	const loading = useSelector((state) => state.todosUi.loading);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchGetTodoList());
	}, []);
	return (
		<>
			{loading ? (
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
