import React from "react";
import Container from "../components/Container";
import styles from "../styles/Home.module.css";

export default function Blog() {
	return (
		<Container>
			<div className={styles.main2}>
				<span className="text-3xl uppercase underline">
					this is the blog page
				</span>
				<p className="text-lg font-lg">
					Welcome, Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Error soluta, dolorum totam harum nemo atque nam placeat iure tempora,
					officia doloribus mollitia quod excepturi rerum beatae temporibus ad
					possimus illum.
				</p>
			</div>
		</Container>
	);
}
