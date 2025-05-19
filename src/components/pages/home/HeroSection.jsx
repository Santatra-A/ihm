import React from "react";

const HeroSection = () => {
	return (
		<header className="relative overflow-hidden bg-gradient-to-r from-blue-100 via-blue-50 to-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="relative z-10 py-8 sm:py-16 md:py-20 lg:py-28 lg:max-w-2xl lg:w-full">
					<div className="mt-10 sm:mt-12">
						<span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
							Professional Healthcare
						</span>
						<h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
							<span className="block text-blue-600 xl:inline">
								Modern Healthcare
							</span>{" "}
							<span className="block xl:inline">At Your Fingertips</span>
						</h1>
						<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
							Experience personalized medical care with our state-of-the-art
							facilities and expert healthcare professionals. We're committed to
							providing the highest quality care for you and your family.
						</p>
						<div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
							<div className="rounded-md shadow">
								<a
									href="#appointment"
									className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:-translate-y-1"
								>
									Book Appointment
								</a>
							</div>
							<div>
								<a
									href="#services"
									className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10 transition-all duration-300"
								>
									Our Services
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
				<img
					className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-bl-3xl shadow-2xl"
					src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
					alt="Doctor with patient"
				/>
			</div>
		</header>
	);
};

export default HeroSection;
