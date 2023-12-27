"use client";

import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
	return (
		<>
			<header className="text-gray-600 body-font bg-transparent border-b">
				<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<Link
						href="/"
						className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							className="w-10 h-10 text-white p-2 bg-sky-500 rounded-full"
							viewBox="0 0 24 24"
						>
							<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
						</svg>
						<span className="ml-3 text-xl">Custom Auth</span>
					</Link>

					<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
						<Link href="/" className="mr-5 p-2 hover:text-gray-900">
							Home
						</Link>
						<Link href="/login" className="mr-5 p-2 hover:text-gray-900">
							Login
						</Link>
						<Link href="/register" className="mr-5 p-2 hover:text-gray-900">
							Register
						</Link>
					</nav>
					
					<Button className='hover:text-sky-600 hover:bg-sky-100' variant="ghost" size="lg">
						Logout
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							className="w-4 h-4 ml-1"
							viewBox="0 0 24 24"
						>
							<path d="M5 12h14M12 5l7 7-7 7" />
						</svg>
					</Button>
				</div>
			</header>
		</>
	);
};

export default Navbar;
