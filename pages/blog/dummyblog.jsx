/* eslint-disable @next/next/no-img-element */
import React from "react";
import { urlFor } from "../../lib/sanityClient";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import client from "../../lib/sanityClient";
import { getBlogPostSlugPaths, getBlogBySlugQuery } from "../../lib/queries";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { remarkHeadingId } from "remark-custom-heading-id";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import remarkGfm from "remark-gfm";
import Container from "../../components/Container";
import { mdxComponents } from "../../components/mdxComponents";

// import '../../styles/blog.css';
import BlogLayout from "../../layouts/blogLayout";
import Comments from "../../components/Comments";

const DummyBlog = () => {
	// console.log(post);
	return (
		<Container>
			<div className="container px-5 mx-auto">
				<div className="flex flex-wrap m-4">
					<div className="max-w-screen-xl mx-auto">
						<div
							className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
							style={{ maxWidth: "45em" }}
						>
							{/* <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-lingrad"
                                style={{backgroundImage: 'linearGradient(180deg, transparent, rgba(0,0,0,0.7))'}}></div>  */}
							{/* <img src={urlFor(mainImage).url()} alt={mainImage.caption} className="absolute left-0 top-0 w-full h-full z-0" /> */}
							<div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative">
								<img
									src="http://placekitten.com/500/400"
									alt="caption"
									className=" left-0 top-0 w-50 h-50 z-0"
								/>
								<p className="font-semibold text-400 text-sm">
									{" "}
									Author: {"Matthew"}{" "}
								</p>
								<p className="font-semibold text-400 text-xs">
									Mintues to Read: {"10"}{" "}
								</p>
								<p className="font-semibold text-400 text-xs">
									Published: {"Tue Jan 17 2023 "}
								</p>
							</div>
						</div>
						<div className="p-4  bottom-0 left-0 z-20">
							<h1 className="text-3xl px-10 font-semibold mx-2 text-gray-100 leading-tight backdrop-blur-xl bg-opacity-60">
								{"How to center a div? the age-old question we ask"}
							</h1>
							<a
								href="#"
								className="px-4 py-1 mx-2 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
							>
								{"CSS"}
							</a>
						</div>
						<article
							className="px-4 lg:px-0 max-w-screen-md mx-auto text-lg leading-relaxed"
							style={{ maxWidth: "45em" }}
						>
							<p className="text-400 text-md indent-3 pb-2">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
								quas rem accusamus voluptates optio omnis perspiciatis tempore,
								laboriosam ipsa rerum molestias eius harum dicta totam dolorem
								quasi sequi veritatis suscipit!
							</p>
							<p className="text-400 text-md indent-3 pb-2">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
								quas rem accusamus voluptates optio omnis perspiciatis tempore,
								laboriosam ipsa rerum molestias eius harum dicta totam dolorem
								quasi sequi veritatis suscipit!
							</p>
							<p className="text-400 text-md indent-3 pb-2">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
								quas rem accusamus voluptates optio omnis perspiciatis tempore,
								laboriosam ipsa rerum molestias eius harum dicta totam dolorem
								quasi sequi veritatis suscipit!
							</p>
							<p className="text-400 text-md indent-3 pb-2">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
								quas rem accusamus voluptates optio omnis perspiciatis tempore,
								laboriosam ipsa rerum molestias eius harum dicta totam dolorem
								quasi sequi veritatis suscipit!
							</p>
						</article>
						<Comments />
					</div>
				</div>
			</div>
		</Container>
	);
};

export default DummyBlog;
