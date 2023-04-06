import React from "react";
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

import { mdxComponents } from "../../components/mdxComponents";

// import '../../styles/blog.css';
import BlogLayout from "../../layouts/blogLayout";
import Comments from "../../components/Comments";

const BlogArticle = ({ post, source }) => {
	// console.log(post);
	return (
		<BlogLayout props={post}>
			<MDXRemote {...source} components={mdxComponents} />
			<Comments comments={post?.comments} _id={post._id} />
		</BlogLayout>
	);
};

export default BlogArticle;

export async function getStaticPaths() {
	// getting slug paths
	const posts = await client.fetch(getBlogPostSlugPaths);
	return {
		paths: posts.map((post) => ({
			params: {
				slug: post.slug.current,
			},
		})),
		fallback: "blocking",
	};
}

export async function getStaticProps({ params: { slug } }) {
	const post = await client.fetch(getBlogBySlugQuery(slug));
	// MDX text - can be from a local file, database, anywhere
	const source = post.body;
	const mdxSource = await serialize(source, {
		mdxOptions: {
			remarkPlugins: [remarkGfm, remarkHeadingId],
			rehypePlugins: [
				rehypeSlug,
				[rehypeAutolinkHeadings, { behavior: "append" }],
				rehypeHighlight,
			],
		},
	});
	return {
		props: {
			post,
			source: mdxSource,
		},
	};
}
