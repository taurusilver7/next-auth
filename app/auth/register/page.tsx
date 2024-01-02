import { RegisterForm } from "@/components/auth/register-form";
import ExitButton from "@/components/auth/exit-button";

const Register = () => {
	return (
		<div className="relative">
			<RegisterForm />

			<ExitButton />
		</div>
	);
};

export default Register;
