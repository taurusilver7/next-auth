"use client";

import React, { useCallback, useEffect } from "react";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { BeatLoader, ClimbingBoxLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";

const NewVerificationForm = () => {
	const searchParams = useSearchParams();

	const token = searchParams.get("token");
	const onSubmit = useCallback(() => {
		// Check if the token has expired

	}, [token]);

	useEffect(() => {
		onSubmit();
	}, [onSubmit]);
	return (
		<CardWrapper
			headerTitle="Verification"
			headerLabel="Verify it's you"
			backButtonHref="/auth/login"
			backButtonLabel="Back to login"
		>
			<div className="flex items-center w-full justify-center">
				<BeatLoader />
			</div>
		</CardWrapper>
	);
};

export default NewVerificationForm;
