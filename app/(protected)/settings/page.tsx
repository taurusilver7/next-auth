import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const Settings = async () => {
	const session = await auth();
	return (
		<div className="flex flex-col h-full gap-4 justify-center items-center text-2xl">
			{JSON.stringify(session?.user)}

			<form
				action={async () => {
					"use server";

					await signOut();
				}}
			>
				<Button type="submit" variant="ghost" size="lg">
					Sign Out
				</Button>
			</form>
		</div>
	);
};

export default Settings;
