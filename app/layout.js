import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
	title: "Full Custom Auth",
	description: "Authentication Module",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={cn(jetbrains.className, "h-full bg-slate-200")}>
				<Toaster />
				<main>{children}</main>
			</body>
		</html>
	);
}
