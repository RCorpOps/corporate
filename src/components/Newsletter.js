import React from "react";

const Newsletter = () => {
	return (
		<div className="newsletter-bg">
			<div className="container mx-auto pt-24 flex flex-col items-center">
				<span className="text-5xl text-white text-center mb-11">
					Subscribe Our <font className="font-medium">Newsletter</font> <br />{" "}
					to Get New Updates.
				</span>
				<form
					className="relative flex justify-center h-20 mb-32 w-full max-w-3xl pl-11 "
					action=""
				>
					<input
						type="email"
						placeholder="Email address"
						className="relative h-20 mb-32 w-5/6 md:w-full rounded max-w-3xl pl-11 outline-none text-grey"
					/>
					<div className="absolute right-11 cursor-pointer md:right-5 bg-transparent  flex items-center justify-center rounded-full bottom-3">
						<button className="relative w-14 h-14 flex items-center justify-center overflow-hidden submit-btn ">
							<svg
								width="13"
								height="23"
								viewBox="0 0 20 33"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="rotate-90 "
							>
								<path
									d="M12.17 0.971076C11.5842 0.38529 10.6345 0.38529 10.0487 0.971076L0.502773 10.517C-0.0830132 11.1028 -0.0830132 12.0526 0.502773 12.6383C1.08856 13.2241 2.03831 13.2241 2.62409 12.6383L11.1094 4.15306L19.5947 12.6383C20.1804 13.2241 21.1302 13.2241 21.716 12.6383C22.3018 12.0526 22.3018 11.1028 21.716 10.517L12.17 0.971076ZM12.6094 32.0317L12.6094 2.03174H9.60938L9.60938 32.0317H12.6094Z"
									fill="white"
								/>
							</svg>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Newsletter;
