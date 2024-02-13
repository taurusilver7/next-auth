"use client";

import React, { useCallback, useEffect, useState } from "react";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { BeatLoader, ClimbingBoxLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { newVerification } from "@/actions/new-verification";

const NewVerificationForm = () => {
	const searchParams = useSearchParams();
	const [error, setError] = useState<string | undefined>();
	const [success, setSuccess] = useState<string | undefined>();

	const token = searchParams.get("token");
	const onSubmit = useCallback(() => {
		if (!token) {
			setError("Missing Token");
			return;
		}

		// Check if the token has expired
		newVerification(token)
			.then((data) => {
				setSuccess(data.success);
				setError(data.error);
			})
			.catch(() => {
				setError("Something went wrong!");
			});
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
