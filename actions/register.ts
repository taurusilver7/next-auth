"use server";
import bcrypt from "bcryptjs";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/util/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
	const validatedFields = RegisterSchema.safeParse(values);

	if (!validatedFields.success) {
		return { error: "Invalid Credentials!!" };
	}

	const { email, password, name } = validatedFields.data;
	const hashedPassword = await bcrypt.hash(password, 10);

	const existingUser = await getUserByEmail(email);

	if (existingUser) {
		return { error: "Email already taken!" };
	}

	await db.user.create({
		data: {
			name,
			email,
			password: hashedPassword,
		},
	});

	// ? TODO - Send Verifacion token email

	return { success: "User Registered!" };
};
