import { useLoaderData } from "react-router-dom";

export const Post = () => {
	const { post } = useLoaderData();

	return (
		<div className="mt-24 px-5">
			<h3>
				{post.id} - {post.title}
			</h3>
			<p>{post.body}</p>
		</div>
	);
};

export const loaderPost = async ({ params }) => {
	const data = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.id}`
	);
	/* if (!data.ok) {
		throw{
			status: data.status,
			statusText: "Code: " + data.status,
		};
	} */
	const post = await data.json();
	return { post };
};
