import React, { useState } from "react";
import Container from "../../components/Container";
// import styles from "../styles/Home.module.css";
import { loadData } from "../api/blogPost";
import {urlFor} from "../../lib/sanityClient";
const loadChunk = 1;

function PostCard({data}) {
	const {categories, title, metaDescription, author, slug, publishedAt: date, minutesToRead, mainImage} = data;
	return(
	<div className="p-4 md:w-1/3">
		<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
			<img className="lg:h-48 md:h-36 w-full object-cover object-center" width="100%" src={urlFor(mainImage).url()} alt={mainImage.caption}/>
			<div className="p-6">
				<h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
					CATEGORY: {categories.map((category,key) => (
						<span key={key}>{categories.length > 1 ? 
							`${category.title} ` : 
							category.title} 
						</span>))
					}
				</h2>
				<h1 className="title-font capitalize text-lg font-medium mb-3">{title}</h1>
				<p className="leading-relaxed capitalize mb-3">{metaDescription}</p>
				<div className="flex items-center flex-wrap ">
					<span className="text-gray-400 sm:mr-0 inline-flex items-center lg:ml-auto  ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-400">
						{new Date(date).toDateString()}
					</span>
                    <span className="text-gray-400 sm:mr-0 inline-flex items-center lg:ml-auto ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-400">
						Minutes to Read: {minutesToRead} mins
					</span>
					<a href={`/blog/${slug.current}`}className="text-500 inline-flex items-center pt-4 md:mb-2 lg:mb-0">Learn More
						<svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
						<path d="M5 12h14"></path>
						<path d="M12 5l7 7-7 7"></path>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>)
}
export default function Blog({initialPosts,total}) {
	// console.log(initialPosts);
	const [blogPosts, setBlogPosts] = useState(initialPosts)
	const [loadAmount, setLoadAmount] = useState(loadChunk);
	const [loading, setLoading] = useState(false);
	const showLoadBotton = total > loadAmount;
	const fetchMorePosts = async () => {
		setLoading(true);
		try {
			// console.log('fetching', loadAmount, loadChunk);
			const data = await fetch(`/api/blogPost?start=${loadAmount}&end=${loadAmount + loadChunk }`)
			.then((response)=> response.json());
			setLoadAmount(loadAmount + loadChunk);
			setBlogPosts([...blogPosts, ...data.blogPosts]);
		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}
	
	return (
		<Container>
			<div className="container px-5 mx-auto">
				<div className="flex flex-wrap -m-4">
					{blogPosts.map((value, key)=>{
						return <PostCard key={key} data={value}/>
					})}
				</div>
				<div className="flex items-center justify-center pt-12 ">
					{showLoadBotton && (<button
						onClick={fetchMorePosts}
						className="border-2 px-8 border-200 rounded">
							Load more
					</button>)}
				</div>
			</div>
		</Container>
	);
}

export async function getServerSideProps(){
	const {blogPosts, total} = await loadData(0, loadChunk);
	return {
		props:{
			initialPosts: blogPosts, 
			total
		  },
	}
}