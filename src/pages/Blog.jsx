import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
	const blogs = useLoaderData();
	return (
		<div className="mt-24 px-5">
			<h3>Blog</h3>
			<ul className="text-gray-200 text-sm">
				{blogs.map((blog) => (
					 <li key={blog.id} className="hover:text-zinc-400 text-base">
                        <Link to={`/blog/${blog.id}`}>{blog.id} - {blog.title}</Link>
                    </li>
				))}
			</ul>
		</div>
	);
};
export { Blog };

export const loaderBlogs = async () => {
	const data = await fetch("https://jsonplaceholder.typicode.com/posts");
	const blogs = await data.json();
	return blogs;
};
