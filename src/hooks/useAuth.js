import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setUser } from "@features/users/usersSlice";

const adminList = ["iris", "reta", "fred"];
export const useAuth = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.usersData.user);
	const login = ({ username }) => {
		const isAdmin = Boolean(adminList.find((admin) => admin === username));
		dispatch(setUser({ username, isAdmin }));
		navigate("/profile");
	};

	const logout = () => {
		dispatch(setUser(null));
		navigate("/");
	};

	return { user, login, logout };
};
