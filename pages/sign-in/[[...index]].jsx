import { SignIn } from "@clerk/nextjs";
import "../../styles/sign-in.css";

export default function Page() {
	return (
		<div className="bg-slate-700 signIn-tile">
			<div className="h-100 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<SignIn />
			</div>
		</div>
	);
}
