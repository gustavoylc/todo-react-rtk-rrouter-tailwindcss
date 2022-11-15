import { useRouteError } from "react-router-dom";

const NotFound = () => {
	const error = useRouteError();
	console.log(error);

	return (
		<div className="mt-24 px-5">
			<h1>404</h1>
			<p>Page not found</p>
			<p>{error.statusText || error.message}</p>
		</div>
	);
};
export { NotFound };
