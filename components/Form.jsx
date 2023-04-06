/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import cn from "classnames";
// import "../styles/toast.css";

export default function Form({ _id, session }) {
	// Sets up basic data state
	const isGHUser =
		session.user.image.split(".com", 1)[0] ==
		"https://avatars.githubusercontent";
	const firstName = session.user.name.split(" ", 1)[0];

	const [formData, setFormData] = useState();

	// Sets up our form states
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [hasSubmitted, setHasSubmitted] = useState(false);
	const [showToast, setShowToast] = useState(true);
	// Prepares the functions from react-hook-form
	const { register, handleSubmit, watch, errors } = useForm();

	// Function for handling the form submission
	const onSubmit = async (data) => {
		setIsSubmitting(true);

		setFormData(data);

		try {
			await fetch("/api/createComment", {
				method: "POST",
				body: JSON.stringify(data),
				type: "application/json",
			});
			setIsSubmitting(false);
			setHasSubmitted(true);
			// setShowToast(true);
		} catch (err) {
			setFormData(err);
		}
	};

	if (isSubmitting) {
		// Returns a "Submitting comment" state if being processed
		return <h3>Submitting comment…</h3>;
	}
	if (!hasSubmitted) {
		// function timeOut() {
		// 	const time = setTimeout(() => {
		// 		setShowToast(false);
		// 	}, 5000);
		// 	return () => clearTimeout(time);
		// }
		// timeOut();
		// Returns the data that the user submitted for them to preview after submission
		return (
			<>
				<div className="flex shadow-lg rounded-lg mt-4 shadow-slate-700 border">
					<div className="flex-shrink-0 ml-4">
						<img
							className="mt-4 rounded-full w-8 h-8 sm:w-10 sm:h-10"
							src={
								session.user.image
									? session.user.image
									: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
							}
							alt=""
						/>
					</div>
					<div className="flex-1  rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
						<strong>{isGHUser ? formData.name : firstName}</strong>{" "}
						<span className="text-xs text-gray-400">Just now</span>
						<p className="text-sm">{formData?.comment}</p>
					</div>
				</div>
				<div
					id="toast-simple"
					className={cn(
						"flex fixed bottom-0 items-center sm:w-screen max-w-screen-md w-8/12 border p-4 my-4 space-x-4 divide-x divide-gray-200 rounded-lg shadow-lg shadow-slate-700 bg-black text-green-700 dark:divide-gray-700 space-x ",
						{
							["invisible"]: showToast === false,
							["visible"]: showToast === true,
						}
					)}
					role="alert"
				>
					<svg
						aria-hidden="true"
						className="w-5 h-5 text-blue-700 dark:text-white"
						focusable="false"
						data-prefix="fas"
						data-icon="paper-plane"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						<path
							fill="currentColor"
							d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
						></path>
					</svg>
					<div className="pl-8 text-lg font-normal">
						<h3>Thanks for your comment! {!isGHUser && firstName} 😁</h3>

						{!isGHUser && <h3>Your comment will be reviewed for approval</h3>}
					</div>
				</div>
			</>
		);
	}

	return (
		// Sets up the Form markup
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="w-full max-w-3xl border-blue-700 border my-10 m-auto "
			disabled
		>
			<input {...register("_id")} type="hidden" name="_id" value={_id} />
			<input
				{...register("approved")}
				type="hidden"
				name="approved"
				value={isGHUser ? true : false}
			/>
			<input
				{...register("imageUrl")}
				type="hidden"
				name="imageUrl"
				value={session.user.image}
			/>
			<input
				{...register("name")}
				type="hidden"
				name="name"
				value={session.user.name}
			/>
			<input
				{...register("email")}
				type="hidden"
				name="email"
				value={session.user.email}
			/>

			<label className="block mb-5">
				<span className="text-gray-700 pl-3 font-semibold dark:text-white">
					Comment
				</span>
				<textarea
					{...register("comment", { required: true })}
					className="form-textarea mt-1 pl-3 block w-full"
					rows="4"
					placeholder="Enter some long form content."
					maxLength={250}
				/>
			</label>

			{/* errors will return when field validation fails  */}
			{errors && <span>This field is required</span>}

			<input
				type="submit"
				className="shadow bg-slate-500 hover:bg-slate-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
			/>
		</form>
	);
}
