import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
	title: "Full Custom Auth",
	description: "Authentication Module",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={jetbrains.className}>
				<Toaster />
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
}
