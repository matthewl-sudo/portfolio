import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";
import { useTheme } from "next-themes";

const Mermaid = ({ chart, title }) => {
	const { resolvedTheme } = useTheme();
	const setTheme =
		resolvedTheme == "dark"
			? { theme: "neutral" }
			: {
					theme: "base",
					themeVariables: {
						primaryColor: "#30c5ff",
						primaryTextColor: "#fff",
						primaryBorderColor: "#0387b9",
						lineColor: "#F8B229",
						secondaryColor: "#d602b6",
						secondaryTextColor: "#000",
						tertiaryColor: "#fff",
					},
			  };

	mermaid.initialize({
		securityLevel: "loose",
		startOnLoad: true,
		theme: setTheme.theme,
		themeVariables: setTheme.themeVariables,
	});
	// useEffect(() => mermaid.contentLoaded(), []);
	// mermaid.contentLoaded();
	return (
		<>
			<div
				// suppressHydrationWarning to get rid of hydration error but mermaid diagrams sometimes don't
				// mount correctly. Tried suspense/lazy and dynamic imports with no luck.
				suppressHydrationWarning={true}
				className="mermaid dark:bg-black border dark:text-white justify-self-center"
			>
				{chart}
			</div>
			{title && <p className="text-center text-xs my-2 opacity-80">{title}</p>}
		</>
	);
};

export default Mermaid;
