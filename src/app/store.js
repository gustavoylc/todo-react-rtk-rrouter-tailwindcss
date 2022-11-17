import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "@features/todos/api/apiSlice";
import usersReducer from "@features/users/usersSlice";

export const store = configureStore({
	reducer: {
		usersData: usersReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});
