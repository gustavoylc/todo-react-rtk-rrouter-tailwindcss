import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: retry(
		fetchBaseQuery({
			baseUrl: "http://localhost:3500",
		}),
		{ maxRetries: 3 }
	),
	// keepUnusedDataFor: 60, time on cache
	tagTypes: ["Todos"],
	// refetchOnMountOrArgChange: true,
	// refetchOnFocus: true,
	// refetchOnReconnect: true,
	endpoints: (builder) => ({
		getTodoList: builder.query({
			query: () => "/todos",
			transformResponse: (res) => res.sort((a, b) => b.id - a.id),
			providesTags: ["Todos"],
			extraOptions: {
				maxRetries: 0,
			},
		}),
		addTodo: builder.mutation({
			query: (todo) => ({
				url: "/todos",
				method: "POST",
				body: todo,
			}),
			invalidatesTags: ["Todos"],
			extraOptions: {
				maxRetries: 0,
			},
		}),
		updateTodo: builder.mutation({
			query: (todo) => ({
				url: `/todos/${todo.id}`,
				method: "PATCH",
				body: todo,
			}),
			invalidatesTags: ["Todos"],
			extraOptions: {
				maxRetries: 0,
			},
		}),
		deleteTodo: builder.mutation({
			query: (id) => ({
				url: `/todos/${id}`,
				method: "DELETE",
				body: id,
			}),
			invalidatesTags: ["Todos"],
			extraOptions: {
				maxRetries: 0,
			},
		}),
	}),
});

export const {
	useGetTodoListQuery,
	useSearchTodoQuery,
	useLazySearchTodoQuery,
	useAddTodoMutation,
	useUpdateTodoMutation,
	useDeleteTodoMutation,
} = apiSlice;
