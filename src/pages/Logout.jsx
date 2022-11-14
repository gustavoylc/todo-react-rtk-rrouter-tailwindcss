import { useAuth } from "@hooks/useAuth";

const Logout = () => {
	const auth = useAuth();

	const handleLogout = (e) => {
		e.preventDefault();
		auth.logout();
	};

	return (
		<main className="mt-24 px-5">
			<h1>Logout</h1>

			<form onSubmit={handleLogout}>
				<label>Are you sure?</label>

				<button className="bg-red-600 w-20 h-8 rounded-md hover:bg-red-700 text-gray-300 hover:text-gray-50">
					Logout
				</button>
			</form>
		</main>
	);
};

export { Logout };
