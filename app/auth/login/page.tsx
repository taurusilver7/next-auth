import { LoginForm } from "@/components/auth/login-form";
import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const Login = () => {
	return (
		<div className="relative">
			<LoginForm />

			<div className="absolute top-1 left-0">
				<Button size="sm" variant="ghost">
					<Link href={"/"}>
						<FaArrowLeft className="h-4 w-4 text-gray-500" />
					</Link>
				</Button>
			</div>
		</div>
	);
};

export default Login;
