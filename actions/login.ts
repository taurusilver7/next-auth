"use server";

import { LoginSchema } from "@/schemas";
import * as z from "zod";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { getUserByEmail } from "@/util/user";

export const login = async (values: z.infer<typeof LoginSchema>) => {
	const validatedFields = LoginSchema.safeParse(values);

	if (!validatedFields.success) {
		return { error: "Invalid Credentials!!" };
	}

	const { email, password } = validatedFields.data;

	const existingUser = await getUserByEmail(email);
	// if (existingUser) {
	// 	return null;
	// }

	try {
		await signIn("credentials", {
			email,
			password,
			redirectTO: DEFAULT_LOGIN_REDIRECT,
		});
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case "CredentialsSignin":
					return { error: "Invalid Credentials" };
				default:
					return { error: "Something went wrong!" };
			}
		}
		throw error;
	}
};
