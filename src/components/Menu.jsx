import { NavLink } from "react-router-dom";



import { useAuth } from "@hooks/useAuth";


const Menu = () => {
	const auth = useAuth();
	return (
		<nav>
			<ul className="fixed flex gap-5 w-full text-2xl my-4 top-0 left-0 px-5">
				{routes.map((route) => {
					if (route.publicOnly && auth.user) return null;
					if (route.private && !auth.user) return null;
					return (
						<li key={route.to}>
							<NavLink
								to={route.to}
								className={({ isActive }) =>
									`${isActive && "text-blue-700"} hover:text-blue-200`
								}
							>
								{route.text}
							</NavLink>
						</li>
					);
				})}
			{auth.user && <li className="w-full">{auth.user.username}</li>}
			</ul>
		</nav>
	);
};

const routes = [];
routes.push({
	to: "/",
	text: "Home",
	private: false,
});
routes.push({
	to: "/Todos",
	text: "TODOs",
	private: false,
});
routes.push({
	to: "/faq",
	text: "FAQ",
	private: false,
});
routes.push({
	to: "/blog",
	text: "Blog",
	private: false,
});
routes.push({
	to: "/profile",
	text: "Profile",
	private: true,
});
routes.push({
	to: "/login",
	text: "Login",
	publicOnly: true,
	private: false,
});
routes.push({
	to: "/logout",
	text: "Logout",
	private: true,
});
export { Menu };