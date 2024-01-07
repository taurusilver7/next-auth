import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Header } from "./header";
import { BackButton } from "./back-button";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorCard = () => {
	return (
		<Card className="w-96 shadow-md">
			<CardHeader>
				<Header label="Oops! Something went wrong!" title="" icon={false} />
			</CardHeader>
			<div className="w-full flex justify-center items-center">
				<ExclamationTriangleIcon className="text-destructive h-8 w-8" />
			</div>
			<CardFooter>
				<BackButton label="Back to login" href="/auth/login" />
			</CardFooter>
		</Card>
	);
};
