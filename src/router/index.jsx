import { Blog, loaderBlogs } from "@pages/Blog";
import { FAQ } from "@pages/FAQ";
import { Home } from "@pages/Home";
import { Login } from "@pages/Login";
import { Logout } from "@pages/Logout";
import { NotFound } from "@pages/NotFound";
import { Post, loaderPost } from "@pages/Post";
import { Profile } from "@pages/Profile";
import { Todos } from "@pages/Todos";
import { createHashRouter } from "react-router-dom";

import { ProtectedRoute } from "@components/AuthRoute";
import { FAQInfo } from "@components/FAQInfo";
import { TodoForm } from "@components/TodoForm";

import { LayoutPublic } from "@layout/LayoutPublic";

export const router = createHashRouter([
	{
		path: "/",
		element: <LayoutPublic />,
		errorElement: <NotFound />,
		children: [
			{
				errorElement: <NotFound />,
				children: [
					{
						index: true,
						element: <Home />,
					},
					{
						path: "/todos",
						element: <Todos />,
					},
					{
						path: "/faq",
						element: <FAQ />,
					},
					{
						path: "/faq/:slug",
						element: <FAQInfo />,
					},
					{
						path: "/create-todo",
						element: <TodoForm />,
					},
					{
						path: "/edit-todo/:id",
						element: <TodoForm />,
					},
					{
						path: "/blog",
						element: <Blog />,
						loader: loaderBlogs,
					},
					{
						path: "/blog/:id",
						element: <Post />,
						loader: loaderPost,
					},
					{
						path: "/login",
						element: <Login />,
					},
					{
						element: <ProtectedRoute />,
						children: [
							{
								path: "/logout",
								element: <Logout />,
							},
							{
								path: "/profile",
								element: <Profile />,
							},
						],
					},
				],
			},
		],
	},
]);
