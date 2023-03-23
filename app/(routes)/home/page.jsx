"use client";
import React from "react";
import Container from "../../../components/Container";
import "../../../styles/globals.css";
import styles from "../../../styles/Home.module.css";

export default function home() {
	return (
			<div className="min-h-screen block justify-between p-24 items-center bg-slate-700 px-8">
				<span className=" text-3xl uppercase underline">
					this is the home page
				</span>
				<p className="text-lg text-slate-900 font-lg">
					Welcome, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
					soluta, dolorum totam harum nemo atque nam placeat iure tempora, officia
					doloribus mollitia quod excepturi rerum beatae temporibus ad possimus
					illum.
				</p>
			</div>
	);
}
