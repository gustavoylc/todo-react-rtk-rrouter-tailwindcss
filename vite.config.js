import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: "@", replacement: path.resolve(__dirname, "src/") },
			{ find: "@styles", replacement: path.resolve(__dirname, "src/styles") },
			{
				find: "@components",
				replacement: path.resolve(__dirname, "src/components"),
			},
			{
				find: "@actions",
				replacement: path.resolve(__dirname, "src/redux/actions"),
			},
			{
				find: "@middlewares",
				replacement: path.resolve(__dirname, "src/redux/middlewares"),
			},
			{
				find: "@reducers",
				replacement: path.resolve(__dirname, "src/redux/reducers"),
			},
			{
				find: "@store",
				replacement: path.resolve(__dirname, "src/redux/store"),
			},
			{
				find: "@pages",
				replacement: path.resolve(__dirname, "src/pages"),
			},
			{
				find: "@services",
				replacement: path.resolve(__dirname, "src/services"),
			},
		],
	},
});
