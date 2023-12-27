import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginPage = () => {
	return (
		<div>
			<div className="min-h-screen w-full flex items-center justify-center grade">
				<div className="w-1/3 mx-auto p-12 relative rounded-md justify-center items-center box">
					<h2 className="text-2xl text-center leading-3 mb-10 text-gray-100">
						Login
					</h2>
					<div className="mb-3">
						<Label htmlFor="email">Email</Label>
						<Input
							type="email"
							name="email"
							placeholder="Enter your email address"
						/>
					</div>
					<div className="mb-3">
						<Label htmlFor="password">Password</Label>
						<Input
							type="password"
							name="password"
							placeholder="Enter your password."
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
