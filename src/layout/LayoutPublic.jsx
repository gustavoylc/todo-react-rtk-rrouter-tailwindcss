import { Outlet, useNavigation } from "react-router-dom";

import { Footer } from "@components/Footer";
import { Loading } from "@components/Loading";
import { Menu } from "@components/Menu";

const LayoutPublic = () => {
	const navigation = useNavigation();
	return (
		<div>
			<Menu />
			{navigation.state === "loading" && <Loading />}
			<Outlet />
			<Footer />
		</div>
	);
};
export { LayoutPublic };
