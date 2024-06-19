import { SignIn } from "@clerk/nextjs";

export default function Page() {
	return (
		<div className="bg-slate-700">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<SignIn />
			</div>
		</div>
	);
}
