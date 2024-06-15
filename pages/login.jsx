import React from "react";
import { useSession as thisSession, signIn, signOut } from "next-auth/react";
import Container from "../components/Container";

export default function login() {
	// React 18 namespaced hooks with the 'Use' prefix, so we change 'useSession' to 'thisSession' to avoid conflict
	const { data: session } = thisSession();

	if (session) {
		return (
			<Container>
				<div className="min-h-screen block justify-between p-24 items-center">
					<p className="text-lg font-lg">Welcome, {session.user.name}</p>
					<button className="border rounded btn mt-8" onClick={() => signOut()}>
						Sign Out
					</button>
				</div>
			</Container>
		);
	} else {
		return (
			<Container>
				<div className="min-h-screen block justify-between p-24 items-center">
					<p className="text-lg font-lg">You are not signed in</p>
					<button className="border rounded btn mt-8" onClick={() => signIn()}>
						Sign In
					</button>
				</div>
			</Container>
		);
	}
}
