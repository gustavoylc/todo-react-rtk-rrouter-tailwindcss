export const getTodoList = () => {
	return fetch("https://jsonplaceholder.typicode.com/todos")
		.then((response) => response.json())
		.then((response) => response)
		.catch((err) => console.error(err));
};
// 
export const createTodo = (title) => {
	const options = {
		method: "POST",
		body: JSON.stringify({
			title: `${title}`,
			completed: false,
			userId: 1,
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	};
	return fetch("https://jsonplaceholder.typicode.com/todos", options)
		.then((response) => response.json())
		.then((response) => response)
		.catch((err) => console.error(err));
};


export const getSearch = (param) => {
	return fetch(`https://jsonplaceholder.typicode.com/todos?q=${param}`)
		.then((response) => response.json())
		.then((response) => response)
		.catch((err) => console.error(err));
};