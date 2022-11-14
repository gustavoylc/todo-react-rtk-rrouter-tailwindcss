import { useState } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "@hooks/useAuth";

const Login = () => {
	const auth = useAuth();
	const [username, setUsername] = useState("");
	const handleLogin = (e) => {
		e.preventDefault();
		auth.login({ username });
	};

	const handleChange = (e) => {
		setUsername(e.target.value);
	};
	if (auth.user) {
		return <Navigate to="/profile" />;
	}

	return (
		<div className="mt-24 px-5">
			<h1>Login</h1>

			<form
				onSubmit={handleLogin}
				className="flex flex-col gap-5 w-2/5"
			>
				<label>Introduzca su nombre de usuario:</label>
				<input
					className="text-gray-400 bg-neutral-800 rounded-md focus:outline-none focus:bg-neutral-700 focus:text-gray-200 p-4 "
					value={username}
					onChange={handleChange}
				/>

				<button className="text-center bg-green-600 rounded-md w-20 h-8 hover:bg-green-700 text-gray-100 hover:text-gray-50">
					Login
				</button>
			</form>
		</div>
	);
};

export { Login };
