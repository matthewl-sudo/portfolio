/* eslint-disable @next/next/no-img-element */
import React from "react";
import Comment from "./Comment";
import Form from "./Form";
import { useUser, SignInButton } from "@clerk/nextjs";

const Comments = ({ comments = [], _id }) => {
	const { user } = useUser();

	return (
		<section className="antialiased mx-auto max-w-screen-md mt-16 border-t-4">
			<h3 className="my-4 text-center text-2xl underline font-semibold dark:text-stone-100 text-gray-900">
				Comments
			</h3>
			<div className="space-y-4">
				{comments?.map((comment) => (
					<Comment props={comment} key={comment._id} />
				))}
			</div>
			{user && <Form _id={_id} session={user} />}
			{!user && <SignInButton />}
		</section>
	);
};

export default Comments;
