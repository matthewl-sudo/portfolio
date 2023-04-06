/* eslint-disable @next/next/no-img-element */
import React from "react";
import { urlFor } from "../lib/sanityClient";

export default function PostCard({ data }) {
	const {
		categories,
		title,
		metaDescription,
		author,
		slug,
		publishedAt: date,
		minutesToRead,
		mainImage,
	} = data;
	return (
		<div className="p-4 md:w-1/3">
			<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
				<img
					className="lg:h-48 md:h-36 sm:h-24  max-h-64 w-full object-cover object-center"
					width="100%"
					src={urlFor(mainImage).url()}
					alt={mainImage.caption}
				/>
				<div className="p-6">
					<h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
						CATEGORY:{" "}
						{categories.map((category, key) => (
							<span
								className="after:content-['/'] last:after:content-['']"
								key={key}
							>
								{` ${category.title} `}
							</span>
						))}
					</h2>
					<h1 className="title-font capitalize text-lg font-medium mb-3">
						{title}
					</h1>
					<p className="leading-relaxed capitalize text-xs mb-3">
						{metaDescription}
					</p>
					<div className="items-center flex-wrap ">
						<span className="text-gray-400 sm:mr-0 inline-flex items-center lg:ml-auto px-2 leading-none text-sm  py-1 border-r-2 border-gray-400">
							{new Date(date).toDateString()}
						</span>
						<span className="text-gray-400 sm:mr-0 inline-flex items-center lg:ml-auto px-2 leading-none text-sm  py-1 border-r-2  border-gray-400">
							Minutes to Read: {minutesToRead} mins
						</span>
						<a
							href={`/blog/${slug.current}`}
							className="text-500 inline-flex items-center pt-4 md:mb-2 lg:mb-0"
						>
							Learn More
							<svg
								className="w-4 h-4 ml-2"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M5 12h14"></path>
								<path d="M12 5l7 7-7 7"></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
