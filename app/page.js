import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Events from "@/components/Events/Events";
import Pricing from "@/components/Pricing/Pricing";
import Gallery from "@/components/Gallery/Gallery";
import Questions from "@/components/Questions/Questions";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export const metadata = {
	title: "Стрекоза - Детский игровой центр",
	description: "Учитесь и развивайтесь - каждый день!",
};

const Home = () => {
	return (
		<main className="wrapper">
			<Header />
			<Hero />
			<About />
			<Events />
			<Pricing />
			<Gallery />
			<Questions />
			<Contact />
			<Footer />
		</main>
	);
}

export default Home;