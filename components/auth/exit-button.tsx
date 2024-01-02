"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const ExitButton = () => {
	return (
		<div className="absolute top-1 left-0">
			<Button size="sm" variant="ghost">
				<Link href={"/"}>
					<FaArrowLeft className="h-4 w-4 text-gray-500" />
				</Link>
			</Button>
		</div>
	);
};

export default ExitButton;
