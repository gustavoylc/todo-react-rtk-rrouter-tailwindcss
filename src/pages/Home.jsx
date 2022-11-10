import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { Main } from "@components/Main";

export const Home = () => {
	return (
		<main className="grid grid-rows-[auto_fr_auto]">
			<Header />
			<Main />
			<Footer />
		</main>
	);
};
