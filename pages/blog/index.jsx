import React, { useState } from "react";
import Container from "../../components/Container";
import { loadData } from "../api/blogPost";
const loadChunk = 3;
import PostCard from "../../components/PostCard";
import Dropdown from "../../components/Dropdown";

export default function Blog({ initialPosts, total, allCategories }) {
	// console.log(initialPosts);
	const [blogPosts, setBlogPosts] = useState(initialPosts);
	const [loadAmount, setLoadAmount] = useState(loadChunk);
	const [loading, setLoading] = useState(false);
	const showLoadButton = total > loadAmount;

	const fetchMorePosts = async () => {
		setLoading(true);
		try {
			// console.log('fetching', loadAmount, loadChunk);
			const data = await fetch(
				`/api/blogPost?start=${loadAmount}&end=${loadAmount + loadChunk}`
			).then((response) => response.json());
			setLoadAmount(loadAmount + loadChunk);
			setBlogPosts([...blogPosts, ...data.blogPosts]);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	const fetchByCategory = async (category) => {
		setLoading(true);
		try {
			const data = await fetch(`/api/category?category=${category}`).then(
				(response) => response.json()
			);
			setLoadAmount(NaN);
			setBlogPosts([...data.blogPosts]);
		} catch (error) {
			console.log("error", error);
			setLoading(false);
		}
	};

	return (
		<Container>
			<div className="container px-5 mx-auto">
				<div className="ml-auto flex">
					<Dropdown props={allCategories} fn={fetchByCategory} />
				</div>
				<div className="flex flex-wrap -m-4">
					{blogPosts.map((value, key) => {
						return <PostCard key={key} data={value} />;
					})}
				</div>
				<div className="flex items-center justify-center pt-12 ">
					{showLoadButton && (
						<button
							onClick={fetchMorePosts}
							className="border-2 px-8 border-200 rounded"
						>
							Load more
						</button>
					)}
				</div>
			</div>
		</Container>
	);
}

export async function getServerSideProps() {
	const { blogPosts, total, allCategories } = await loadData(0, loadChunk);
	// console.log("categories", allCategories);
	return {
		props: {
			initialPosts: blogPosts,
			total,
			allCategories,
		},
	};
}
