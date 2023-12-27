import Contact from "@/components/contact";
import Feature from "@/components/feature";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main className="mx-auto max-w-7xl">
				<Hero />
				<Feature />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
