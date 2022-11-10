import { BrowserRouter, Route, Routes } from "react-router-dom";

import { TodoForm } from "@components/TodoForm";
import { TodoList } from "@components/TodoList";

const Main = () => {
	return (
		<main className="h-full flex justify-center ">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<TodoList />}
					/>
					<Route
						path="/create-todo"
						element={<TodoForm />}
					/>
					<Route
						path="/edit-todo/:id"
						element={<TodoForm />}
					/>
				</Routes>
			</BrowserRouter>
		</main>
	);
};

export { Main };
