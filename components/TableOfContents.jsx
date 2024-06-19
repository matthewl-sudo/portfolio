import React from "react";
import "../styles/blogLayout.css";

function TableOfContents({ headings }) {
	return (
		<aside className="h-screen w-full hidden sm:block sm:w-60 dark:bg-gray-900 dark:text-gray-100">
			<nav className="sticky-nav z-20 w-full self-start space-y-4 text-sm">
				<h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">
					Table of Contents
				</h2>
				{headings.length > 0 ? (
					<ol className="flex flex-col space-y-1">
						{headings.map((heading) => (
							<li
								className="text-sm cursor-pointer hover:opacity-80"
								key={heading.text}
							>
								<a
									className="capitalize"
									onClick={(e) => {
										e.preventDefault();
										document
											.getElementById(
												`#${heading.text.replace(/ /g, "-").toLowerCase()}`
											)
											.scrollIntoView({ behavior: "smooth" });
									}}
								>{`∘ ${heading.text.replace(/ /g, "-").toLowerCase()}`}</a>
							</li>
						))}
					</ol>
				) : null}
			</nav>
		</aside>
	);
}

export default TableOfContents;
