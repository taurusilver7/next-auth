import ExitButton from "@/components/auth/exit-button";
import { LoginForm } from "@/components/auth/login-form";

const Login = () => {
	return (
		<div className="relative">
			<LoginForm />

			<ExitButton />
		</div>
	);
};

export default Login;
