import { store } from "@app/store";

import "@styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
