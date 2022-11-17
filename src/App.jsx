import { FAQ } from "@pages/FAQ";
import { Home } from "@pages/Home";
import { Login } from "@pages/Login";
import { Logout } from "@pages/Logout";
import { NotFound } from "@pages/NotFound";
import { Profile } from "@pages/Profile";
import { Todos } from "@pages/Todos";
import { HashRouter, Route, Routes } from "react-router-dom";

import { ProtectedRoute } from "@components/AuthRoute";
import { FAQInfo } from "@components/FAQInfo";
import { Footer } from "@components/Footer";
import { Menu } from "@components/Menu";
import { TodoForm } from "@components/TodoForm";

function App() {
	return (
		<HashRouter>
			<div className="text-center">
				<Menu />
			</div>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/todos"
					element={<Todos />}
				></Route>
				<Route
					path="/faq"
					element={<FAQ />}
				>
					<Route
						path=":slug"
						element={<FAQInfo />}
					/>
				</Route>
				<Route
					path="/create-todo"
					element={<TodoForm />}
				/>
				<Route
					path="/edit-todo/:id"
					element={<TodoForm />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/logout"
					element={
						<ProtectedRoute>
							<Logout />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/profile"
					element={
						<ProtectedRoute>
							<Profile />
						</ProtectedRoute>
					}
				/>
				<Route
					path="*"
					element={<NotFound />}
				/>
			</Routes>
			<Footer />
		</HashRouter>
	);
}

export { App };
