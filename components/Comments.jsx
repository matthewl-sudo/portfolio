/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useSession } from "next-auth/react";
import Comment from "./Comment";
import Form from "./Form";
import LoginBtn from "./LoginBtn";

const Comments = ({ comments = [], _id }) => {
	const { data: session } = useSession();

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
			{session && <Form _id={_id} session={session} />}
			<LoginBtn />
		</section>
	);
};

export default Comments;
