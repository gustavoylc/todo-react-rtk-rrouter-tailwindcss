import { useAuth } from "@hooks/useAuth";

const Profile = () => {
	const auth = useAuth();

	return (
		<main className="mt-24 px-5">
			<h2>Profile</h2>
			<p>Welcome, {auth.user.username}</p>
		</main>
	);
};

export { Profile };
