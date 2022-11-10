// import { getSearch, initialsTodos } from "@actions";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

const Searcher = () => {
	const [searchValue, setSearchValue] = useState("");
	const searchRef = useRef(null);
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		// dispatch(getSearch(searchValue));
	};

	const handleSearchValueChange = () => {
		setSearchValue(searchRef.current.value);
		// searchRef.current.value === "" && dispatch(initialsTodos());
	};

	return (
		<div className="absolute top-6 right-10">
			<form onSubmit={handleSubmit}>
				<div className="relative text-gray-600 focus-within:text-gray-400 hover:shadow-xl transform hover:scale-105 transition duration-500">
					<span className="absolute inset-y-0 left-0 flex items-center pl-2">
						<button className="p-1 focus:outline-none focus:shadow-outline">
							<svg
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								className="w-6 h-6"
							>
								<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
							</svg>
						</button>
					</span>
					<input
						type="search"
						className="py-3 text-sm text-gray-400 bg-neutral-800 rounded-xl pl-12 pr-3 focus:outline-none focus:bg-neutral-700 focus:text-gray-200"
						placeholder="Search..."
						onChange={handleSearchValueChange}
						value={searchValue}
						ref={searchRef}
					/>
				</div>
			</form>
		</div>
	);
};

export { Searcher };
