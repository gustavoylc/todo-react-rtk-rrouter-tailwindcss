import { faqData } from "@services/faqData";
import { Link, Outlet } from "react-router-dom";

const FAQ = () => {
	return (
		<main className="mt-24 px-5">
			<h3>FAQ</h3>
			<Outlet />
			<ul className="mt-10">
				{faqData.map((faq) => (
					<li key={faq.slug}>
						<Link to={`/faq/${faq.slug}`}>{faq.title}</Link>
					</li>
				))}
			</ul>
		</main>
	);
};

export { FAQ };
