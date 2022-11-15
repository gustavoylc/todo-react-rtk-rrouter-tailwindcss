import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "@hooks/useAuth";

const AuthRoute = (props) => {
	const auth = useAuth();
	if (!auth.user) {
		return <Navigate to="/login" />;
	}

	return props.children;
};

const ProtectedRoute = ({ redirectTo = "/login", children }) => {
	const auth = useAuth();
	if (!auth.user) {
		return <Navigate to={redirectTo} />;
	}

	/**
	 * This is another way to validate permissions
	 *
	 * const isAllowed = !!auth.user && auth.user.permissions.includes("analize");
	 * redirectTo = "/home";
	 */

	if (!auth.user) {
		return <Navigate to={redirectTo} />;
	}

	return children || <Outlet />;
};

export { AuthRoute, ProtectedRoute };
