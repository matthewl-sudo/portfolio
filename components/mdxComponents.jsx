import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

const Mermaid = dynamic(() => import("./Mermaid"), {
	ssr: false,
});

const ImgTag = (props) => {
	return (
		<Image
			className="lg:h-48 md:h-36 w-full object-cover object-center"
			width={350}
			height={150}
			src={props.src}
			alt={props.alt}
		/>
	);
};
const Ptag = ({ children }) => {
	return <p className="text-400 text-md indent-3 pb-2">{children}</p>;
};

const H1tag = ({ id, children }) => {
	if (id) {
		return (
			<h1 className="text-3xl uppercase font-semibold mb-4 mt-4" id={`#${id}`}>
				{children}
			</h1>
		);
	}
	return (
		<h1 className="text-3xl uppercase font-semibold mb-4 mt-4">{children}</h1>
	);
};

const H2tag = ({ id, children }) => {
	if (id) {
		return (
			<h2 className="text-2xl font-semibold mb-4 mt-4" id={`#${id}`}>
				{children}
			</h2>
		);
	}
	return <h2 className="text-2xl font-semibold mb-4 mt-4">{children}</h2>;
};

const H3tag = ({ id, children }) => {
    if (id) {
		return (
			<h3 className="text-xl font-semibold mb-3 mt-4" id={`#${id}`}>
				{children}
			</h3>
		);
	}
	return <h3 className="text-xl font-semibold mb-3 mt-4">{children}</h3>;
};

const ListTag = ({ children }) => {
	return <li className="text-sm m-1 list-inside">{children}</li>;
};

const UlTag = ({ children }) => {
	return (
		<ul className="py-5 pl-10 w-full rounded shadow-lg list-none  text-black bg-gray-200">
			{children}
		</ul>
	);
};

const OlTag = ({ children }) => {
	return (
		<ol className="py-4 px-10 w-fit rounded shadow-lg list-decimal  text-black bg-gray-200">
			{children}
		</ol>
	);
};

const PreTag = ({ children }) => {
	return (
		<pre
			className="dark:bg-gray-300 bg-gray-200 rounded p-1 shadow-lg pre-tag"
			style={{ fontSize: "0.9rem" }}
		>
			{children}
		</pre>
	);
};

const HrTag = () => {
	return <hr className="my-3 bg-slate-900" style={{ height: "0.2em" }} />;
};

const TableTag = ({ children }) => {
	return <table className="min-w-full border-2 my-4">{children}</table>;
};

const ThTag = ({ children }) => {
	return (
		<th
			scope="col"
			className="text-md font-medium underline border-2 px-6 py-4 text-left"
		>
			{children}
		</th>
	);
};

const TdTag = ({ children }) => {
	return (
		<td className="text-sm text-900 font-light px-6 py-4 border whitespace-wrap">
			{children}
		</td>
	);
};

const LinkTag = (props) => {
	const href = props.href;
	if (href.startsWith("/")) {
		return (
			<Link href={href} {...props}>
				{props.children}
			</Link>
		);
	}
	if (href.startsWith("#")) {
		return (
			<a
				onClick={function handleScrollTo() {
					document.getElementById(href).scrollIntoView({ behavior: "smooth" });
				}}
				className=" text-blue-900 capitalize font-bold underline dark:text-blue-500"
				{...props}
			/>
		);
	}
	return (
		<a
			className="text-blue-900 font-bold underline dark:text-blue-500"
			target="_blank"
			rel="noopener noreferrer"
			{...props}
		/>
	);
};

const BlockQuoteTag = ({ children }) => {
	return (
		<blockquote className="relative py-4 my-4 border-gray-300 dark:border-gray-700 border-l-8">
			<svg
				className="absolute top-8 left-8 transform -translate-x-6 -translate-y-8 h-8 w-8 text-gray-300 dark:text-gray-700"
				width="8"
				height="8"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<path
					d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
					fill="currentColor"
				/>
			</svg>
			<div className="relative z-10 ml-12 italic font-bold text-gray-800 text-md sm:text-md dark:text-white">
				{children}
			</div>
		</blockquote>
	);
};

// const CodeTag = ({ children }) => {
// 	return <code className="text-black">{children}</code>;
// };

export const mdxComponents = {
	p: Ptag,
	h1: H1tag,
	h2: H2tag,
	h3: H3tag,
	img: ImgTag,
	li: ListTag,
	ul: UlTag,
	ol: OlTag,
	pre: PreTag,
	hr: HrTag,
	table: TableTag,
	th: ThTag,
	td: TdTag,
	Mermaid,
	a: LinkTag,
	blockquote: BlockQuoteTag,
};
