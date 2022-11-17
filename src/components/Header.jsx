import { useGetTodoListQuery } from "@features/todos/api/apiSlice";

const Header = () => {
	const { data, isLoading } = useGetTodoListQuery();
	let content = null;
	if (!isLoading) {
		const completedTodos = data.filter((todo) => todo.completed).length;
		const total = data.length;
		content = `Has completado ${completedTodos} de ${total} Todos`;
	}
	return (
		<header className="text-center my-4 mt-24 ">
			<h4>{content}</h4>
		</header>
	);
};

export { Header };
