import { useState, useEffect } from "react";

export const TypePhase = {
	Typing: 0,
	Pausing: 1,
	Deleting: 2,
};
const TYPING_INTERVAL_MIN = 160;
const TYPING_INTERVAL_MAX = 300;
const PAUSE_MS = 3000;
const DELETING_INTERVAL = 150;
const DELETING_MS = 500;

const getRandomTypingInterval = () =>
	Math.floor(Math.random() * (TYPING_INTERVAL_MAX - TYPING_INTERVAL_MIN + 1)) +
	TYPING_INTERVAL_MIN;

export const useTypedInfo = (infos, toggle) => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [phase, setPhase] = useState(0);
	const [typedInfo, setTypedInfo] = useState("");

	useEffect(() => {
		if (!toggle) return;
		switch (phase) {
			case TypePhase.Typing: {
				const nextTypedInfo = infos[selectedIndex].slice(
					0,
					typedInfo.length + 1
				);
				if (nextTypedInfo === typedInfo) {
					setPhase(TypePhase.Pausing);
					return;
				}
				const timeout = setTimeout(() => {
					setTypedInfo(nextTypedInfo);
				}, getRandomTypingInterval());

				return () => clearTimeout(timeout);
			}
			case TypePhase.Deleting: {
				if (!typedInfo) {
					const timeout = setTimeout(() => {
						const nextIndex = selectedIndex + 1;
						setSelectedIndex(infos[nextIndex] ? nextIndex : 0);
						setPhase(TypePhase.Typing);
					}, DELETING_MS);
					return () => clearTimeout(timeout);
				}
				const nextRemaining = infos[selectedIndex].slice(
					0,
					typedInfo.length - 1
				);
				const timeout = setTimeout(() => {
					setTypedInfo(nextRemaining);
				}, DELETING_INTERVAL);

				return () => clearTimeout(timeout);
			}
			case TypePhase.Pausing:
			default:
				const timeout = setTimeout(() => {
					setPhase(TypePhase.Deleting);
				}, PAUSE_MS);
				return () => clearTimeout(timeout);
		}
	}, [infos, typedInfo, phase, selectedIndex, toggle]);
	return { typedInfo, selectedInfo: infos[selectedIndex], phase };
};
