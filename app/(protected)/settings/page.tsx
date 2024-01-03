import { auth } from "@/auth";

const Settings = async () => {
	const session = await auth();
	return (
		<div className="flex h-full justify-center items-center text-5xl">
			Settings {JSON.stringify(session)}
		</div>
	);
};

export default Settings;
