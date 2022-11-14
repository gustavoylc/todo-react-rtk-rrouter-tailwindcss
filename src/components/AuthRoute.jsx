import { Navigate } from "react-router-dom";

import { useAuth } from "@hooks/useAuth";

const AuthRoute = (props) => {
	const auth = useAuth();
	if (!auth.user) {
		return <Navigate to="/login" />;
	}

	return props.children;
};

export { AuthRoute };
