"use client";

import React from "react";
import { CardWrapper } from "@/components/auth/card-wrapper";

const NewVerificationForm = () => {
	return (
		<CardWrapper
			headerTitle="Verification"
			headerLabel="Confirming your verification"
			backButtonHref="/auth/login"
			backButtonLabel="Back to login"
		>
			<div className="flex items-center w-full justify-center"></div>
		</CardWrapper>
	);
};

export default NewVerificationForm;
