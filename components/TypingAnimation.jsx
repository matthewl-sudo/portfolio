import React, { useState } from "react";
import "../styles/typing.css";
import { useTypedInfo, TypePhase } from "../lib/useTypedInfo";
import cn from "classnames";

const infos = ["Matthew La", "Mr Matthew L", "Matt ¯\\_(ツ)_/¯ "];
export default function TypingAnimation() {
	const [toggle, setToggle] = useState(true);
	let { typedInfo, selectedInfo, phase } = useTypedInfo(infos, toggle);
	const [close, setClose] = useState(false);
	const [fullSize, setFullSize] = useState(false);
	function handleClose() {
		setClose(true);
		// setToggle(!toggle);
	}
	function timeOut() {
		const time = setTimeout(() => {
			setToggle(false);
		}, 20000);
		return () => clearTimeout(time);
	}
	timeOut();
	return (
		<div
			className={cn("min-h-max relative m-auto", {
				["w-full h-96"]: fullSize,
				["w-1/2 h-56 pt-8"]: !fullSize,
			})}
		>
			{!close && (
				<div className="h-full bg-slate-200 dark:bg-slate-900 rounded-xl  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border border-gray-100">
					<div className="relative h-8 w-full rounded-t-xl border-blue-500 bg-slate-400">
						<ul className="absolute top-0 left-0 flex m-1 cursor-pointer">
							<li
								onClick={() => handleClose()}
								className="h-6 w-6 hover:bg-red-600 hover:border-slate-50 hover:text-white rounded-xl text-center text-sm font-bold border mx-1 text-black  border-black bg-red-500  "
							>
								x
							</li>
							<li className="h-6 w-6 hover:bg-yellow-400  hover:border-slate-50 hover:text-white rounded-xl text-center text-sm font-bold border mx-1 text-black  border-black bg-yellow-300  ">
								-
							</li>
							<li
								onClick={() => setFullSize(!fullSize)}
								className="h-6 w-6 hover:bg-green-400  hover:border-slate-50 hover:text-white rounded-xl text-center text-sm font-bold border mx-1 text-black  border-black bg-green-500  "
							>
								+
							</li>
						</ul>
						<div className="text-center">bash -- 70x32</div>
					</div>
					<h2 className="font-medium absolute bottom-0 left-0 flex float-left flex-col lg:block text-center pl-8 py-6 text-sm md:text-3xl sm:text-lg tracking-tight">
						<span className="mb-2 lg:mb-0 ">My name is </span>{" "}
						<span
							className={cn("text-green-600", {
								["end-cursor"]: phase !== TypePhase.Deleting,
								["blinking"]: phase === TypePhase.Pausing || toggle !== true,
							})}
							aria-label={selectedInfo}
						>
							{typedInfo}
						</span>
					</h2>
				</div>
			)}
		</div>
	);
}
