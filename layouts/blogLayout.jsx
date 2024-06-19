/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "../components/Container";
import TableOfContents from "../components/TableOfContents";
import { urlFor } from "../lib/sanityClient";
import "../styles/blogLayout.css";

const BlogLayout = ({ props, headings, children }) => {
	const {
		author,
		categories,
		mainImage,
		title,
		minutesToRead,
		publishedAt: date,
		metaDescription: description,
	} = props;
	// console.log(post);
	const metaProps = {
		title,
		description,
		image: urlFor(mainImage).url(),
		date,
	};
	return (
		<Container customMeta={metaProps}>
			<div className="container block px-5 mx-auto">
				<div className="flex mobile h-full mx-auto">
					<TableOfContents headings={headings} />
					<div className="max-w-screen-xl">
						<div
							className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
							style={{ maxWidth: "45em" }}
						>
							{/* <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-lingrad"
                                style={{backgroundImage: 'linearGradient(180deg, transparent, rgba(0,0,0,0.7))'}}></div>  */}
							{/* <img src={urlFor(mainImage).url()} alt={mainImage.caption} className="absolute left-0 top-0 w-full h-full z-0" /> */}
							<div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative">
								<img
									src={urlFor(mainImage).url()}
									alt={mainImage.caption}
									className="mx-auto left-0 top-0 w-50 h-50 z-0"
								/>
								<p className="font-semibold text-400 text-sm">
									{" "}
									Author: {author.name}{" "}
								</p>
								<p className="font-semibold text-400 text-xs">
									Mintues to Read: {minutesToRead}{" "}
								</p>
								<p className="font-semibold text-400 text-xs">
									Published: {new Date(date).toDateString()}{" "}
								</p>
							</div>
						</div>
						<div className="p-4  bottom-0 left-0 z-20">
							<h1 className="text-3xl px-10 font-semibold mx-2  dark:text-gray-100 leading-tight backdrop-blur-xl bg-opacity-60">
								{title}
							</h1>
							<a
								href="#"
								className="px-4 py-1 mx-2 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
							>
								{categories[0].title}
							</a>
						</div>
						<article className="px-4 lg:px-0 max-w-screen-md mx-auto text-lg leading-relaxed">
							{children}
						</article>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default BlogLayout;
