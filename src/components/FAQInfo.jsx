import { faqData } from "@services/faqData";
import { useNavigate, useParams } from "react-router-dom";

import { useAuth } from "@hooks/useAuth";

const FAQInfo = () => {
	const navigate = useNavigate();
	const { slug } = useParams();
	const auth = useAuth();
	const foundFAQ = faqData.find((faq) => faq.slug === slug);
	const canDelete =
		auth.user?.isAdmin || foundFAQ.author === auth.user?.username;
	const returnToFAQ = () => {
		navigate("/faq");
	};

	return (
		<div className="grid gap-4 mt-24 px-5">
			<h2>{foundFAQ.title}</h2>
			<button
				onClick={returnToFAQ}
				className="bg-zinc-600 rounded-md w-20 h-8 hover:bg-zinc-700 text-gray-100 hover:text-gray-50 self-center"
			>
				Volver
			</button>
			<p>{foundFAQ.author}</p>
			<p>{foundFAQ.content}</p>
			{canDelete && (
				<button className="bg-red-600 w-20 h-8 rounded-md hover:bg-red-700 text-gray-300 hover:text-gray-50">
					Delete
				</button>
			)}
		</div>
	);
};

export { FAQInfo };
