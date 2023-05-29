/* eslint-disable @next/next/no-img-element */
import React from "react";

function Comment({ props }) {
	const { _createdAt, name, email, comment, imageUrl } = props;
	// console.log("image", props.imageUrl);
	return (
		<div className="flex shadow-lg rounded-lg shadow-slate-700 border">
			<div className="flex-shrink-0 ml-4">
				<img
					className="mt-8 rounded-full w-8 h-8 sm:w-10 sm:h-10"
					src={
						imageUrl
							? imageUrl
							: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
					}
					alt={name + "profile pic"}
				/>
			</div>
			<div className="flex-1 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
				<a href={`mailto:${email}`}>
					<strong>{name.split(" ", 1)[0]}</strong>{" "}
				</a>
				<span className="text-xs text-gray-400">
					{new Date(_createdAt).toLocaleTimeString([], {
						year: "numeric",
						month: "numeric",
						day: "numeric",
						hour: "2-digit",
						minute: "2-digit",
					})}
				</span>
				<p className="text-sm">{comment}</p>
				{/* <div className="mt-4 flex items-center">
					<div className="flex -space-x-2 mr-2">
						<img
							className="rounded-full w-6 h-6 border border-white"
							src={
								imageUrl
									? imageUrl
									: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
							}
							alt=""
						/>
					</div>
					<div className="text-sm text-gray-500 font-semibold">5 Replies</div>
				</div> */}
			</div>
		</div>
	);
}

export default Comment;

// <div className="antialiased mx-auto max-w-screen-md mt-16 border-t-4">
// 	<h3 className="my-4 text-center text-2xl underline font-semibold dark:text-stone-100 text-gray-900">
// 		Comments
// 	</h3>
// 	<div className="space-y-4">
// 		<div className="flex shadow-lg shadow-slate-700">
// 			<div className="flex-shrink-0 mr-3">
// 				<img
// 					className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
// 					src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
// 					alt=""
// 				/>
// 			</div>
// 			<div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
// 				<strong>Sarah</strong>{" "}
// 				<span className="text-xs text-gray-400">3:34 PM</span>
// 				<p className="text-sm">
// 					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
// 					nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
// 					erat, sed diam voluptua.
// 				</p>
// 				<div className="mt-4 flex items-center">
// 					<div className="flex -space-x-2 mr-2">
// 						<img
// 							className="rounded-full w-6 h-6 border border-white"
// 							src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
// 							alt=""
// 						/>
// 						<img
// 							className="rounded-full w-6 h-6 border border-white"
// 							src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
// 							alt=""
// 						/>
// 					</div>
// 					<div className="text-sm text-gray-500 font-semibold">
// 						5 Replies
// 					</div>
// 				</div>
// 			</div>
// 		</div>

// 		<div className="flex shadow-lg shadow-slate-700">
// 			<div className="flex-shrink-0 mr-3">
// 				<img
// 					className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
// 					src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
// 					alt=""
// 				/>
// 			</div>
// 			<div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
// 				<strong>Sarah</strong>{" "}
// 				<span className="text-xs text-gray-400">3:34 PM</span>
// 				<p className="text-sm">
// 					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
// 					nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
// 					erat, sed diam voluptua.
// 				</p>
// 				<h4 className="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs">
// 					Replies
// 				</h4>
// 				<div className="space-y-4">
// 					<div className="flex">
// 						<div className="flex-shrink-0 mr-3">
// 							<img
// 								className="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
// 								src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
// 								alt=""
// 							/>
// 						</div>
// 						<div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
// 							<strong>Sarah</strong>{" "}
// 							<span className="text-xs text-gray-400">3:34 PM</span>
// 							<p className="text-xs sm:text-sm">
// 								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
// 								diam nonumy eirmod tempor invidunt ut labore et dolore magna
// 								aliquyam erat, sed diam voluptua.
// 							</p>
// 						</div>
// 					</div>
// 					<div className="flex">
// 						<div className="flex-shrink-0 mr-3">
// 							<img
// 								className="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
// 								src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
// 								alt=""
// 							/>
// 						</div>
// 						<div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
// 							<strong>Sarah</strong>{" "}
// 							<span className="text-xs text-gray-400">3:34 PM</span>
// 							<p className="text-xs sm:text-sm">
// 								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
// 								diam nonumy eirmod tempor invidunt ut labore et dolore magna
// 								aliquyam erat, sed diam voluptua.
// 							</p>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>
