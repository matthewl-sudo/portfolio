/* eslint-disable @next/next/no-img-element */
import { useSession, signIn, signOut } from "next-auth/react";
export default function LoginBtn() {
	const { data: session } = useSession();
	if (session) {
		return (
			<>
				<div className="flex place-content-between w-1/4">
					<img
						className="w-10 h-10 rounded-3xl"
						src={session.user.image}
						alt=""
					/>
					Signed in as {session.user.email} {session.user.name}
					<br />
				</div>
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
