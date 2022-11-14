import { useSelector } from "react-redux";

import { Searcher } from "@components/Searcher";

const Header = () => {
	const todosList = useSelector((state) => state.todosData.todos);
	const completedTodos = todosList.filter((todo) => todo.completed).length;
	return (
		<header className="text-center my-4 mt-24 ">
			<h4>
				Has completado {completedTodos} de {todosList.length} Todos
			</h4>
			<Searcher />
		</header>
	);
};

export { Header };
