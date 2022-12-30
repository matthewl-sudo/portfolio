import { useSession, signIn, signOut } from "next-auth/react";
export default function Component() {
	const { data: session } = useSession();
	if (session) {
		return (
			<>
				Signed in as {session.user.email} <br />
				<button
					className="btn text-lg !text-white bg-blue-700 w-40"
					onClick={() => signOut()}
				>
					Sign out
				</button>
			</>
		);
	}
	return (
		<>
			Not signed in <br />
			<button
				className="btn text-lg text-white bg-blue-700 w-40"
				onClick={() => signIn()}
			>
				Sign in
			</button>
		</>
	);
}
