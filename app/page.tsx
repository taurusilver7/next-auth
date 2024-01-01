import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
	subsets: ["latin"],
	weight: ["600"],
});

export default function Home() {
	return (
		<main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-300 to-blue-800">
			<div className="space-y-6 text-center">
				<h1
					className={cn(
						"text-6xl font-semibold text-white drop-shadow-md",
						font.className
					)}
				>
					🔏 Authentication
				</h1>
				<p className="text-slate-100 text-lg">A Next Custom Auth System</p>

				<div>
					<LoginButton>
						<Button variant="secondary" size="lg">
							Sign In
						</Button>
					</LoginButton>
				</div>
			</div>
		</main>
	);
}
