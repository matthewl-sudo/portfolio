import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import NextLink from "next/link";
import Footer from "./Footer";

function NavItem({ href, text }) {
	const router = useRouter();
	const isActive = router.asPath === href;
	return (
		<NextLink
			className={
				isActive ? "pb-2 border-b-2 border-black dark:border-b-white" : ""
			}
			href={href}
		>
			<span className="p-3">{text}</span>
		</NextLink>
	);
}

export default function Container(props) {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();
	// After mounting, we have access to the theme
	useEffect(() => setMounted(true), []);

	const { children, customMeta } = props;
	const meta = {
		title: "Matt - Web Developer",
		description: `Front-end developer, JavaScript enthusiast.`,
		image: "/banner.png",
		type: "website",
		...customMeta,
	};

	return (
		<div className="bg-gray-50 dark:bg-gray-900">
			<Head>
				<title>{meta.title}</title>
				<meta name="robots" content="follow, index" />
				<meta content={meta.description} name="description" />
				<meta property="og:type" content={meta.type} />
				<meta property="og:site_name" content="Matt Larose" />
				<meta property="og:description" content={meta.description} />
				<meta property="og:title" content={meta.title} />
				<meta property="og:image" content={meta.image} />
				{meta.date && (
					<meta property="article:published_time" content={meta.date} />
				)}
			</Head>
			<header className="flex flex-col justify-center px-8">
				<nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
					<a href="#skip" className="skip-nav">
						add hambuger box menu
					</a>
					<div className="">
						<NavItem className="text-sm p-4" href="/" text="Home" />
						<NavItem className="text-sm p-4" href="/main" text="Main" />
						<NavItem className="text-sm p-4" href="/blog" text="Blog" />
						<NavItem className="text-sm p-4" href="/contact" text="Contact" />
						<NavItem className="text-sm p-4" href="/login" text="Login" />
					</div>
					<button
						aria-label="Toggle Dark Mode"
						type="button"
						className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
						onClick={() =>
							setTheme(resolvedTheme === "dark" ? "light" : "dark")
						}
					>
						{mounted && (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								className="w-5 h-5 text-gray-800 dark:text-gray-200"
							>
								{resolvedTheme === "dark" ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
									/>
								)}
							</svg>
						)}
					</button>
				</nav>
			</header>
			<main
				id="skip"
				className="flex flex-col justify-center bg-gray-50 dark:bg-gray-900"
			>
				{children}
				<Footer />
			</main>
		</div>
	);
}
