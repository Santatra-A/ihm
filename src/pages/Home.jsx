import React, { useState } from "react";
import DatePicker from "react-datepicker";
import HeroSection from "../components/pages/home/HeroSection";
import "react-datepicker/dist/react-datepicker.css";

const Home = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission
		alert(
			`Appointment requested for ${selectedDate.toDateString()} with email: ${email}`,
		);
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
			<HeroSection />

			{/* Features Section */}
			<section id="services" className="py-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
							Services
						</h2>
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							Comprehensive Medical Care
						</p>
						<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
							Our medical cabinet offers a wide range of services to meet all
							your healthcare needs.
						</p>
					</div>

					<div className="mt-10">
						<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
							{/* Service 1 */}
							<div className="pt-6">
								<div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 hover:shadow-lg transition-shadow duration-300">
									<div className="-mt-6">
										<div>
											<span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
												{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
												<svg
													className="h-6 w-6 text-white"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
													/>
												</svg>
											</span>
										</div>
										<h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
											General Consultations
										</h3>
										<p className="mt-5 text-base text-gray-500">
											Comprehensive health check-ups and consultations with our
											experienced doctors.
										</p>
									</div>
								</div>
							</div>

							{/* Service 2 */}
							<div className="pt-6">
								<div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 hover:shadow-lg transition-shadow duration-300">
									<div className="-mt-6">
										<div>
											<span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
												{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
												<svg
													className="h-6 w-6 text-white"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
													/>
												</svg>
											</span>
										</div>
										<h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
											Specialized Treatments
										</h3>
										<p className="mt-5 text-base text-gray-500">
											Advanced treatments for specific conditions by our
											specialist doctors.
										</p>
									</div>
								</div>
							</div>

							{/* Service 3 */}
							<div className="pt-6">
								<div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 hover:shadow-lg transition-shadow duration-300">
									<div className="-mt-6">
										<div>
											<span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
												{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
												<svg
													className="h-6 w-6 text-white"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
													/>
												</svg>
											</span>
										</div>
										<h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
											Laboratory Services
										</h3>
										<p className="mt-5 text-base text-gray-500">
											State-of-the-art laboratory testing and diagnostic
											services.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-12 bg-blue-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
							Testimonials
						</h2>
						<p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
							What Our Patients Say
						</p>
					</div>
					<div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{/* Testimonial 1 */}
						<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
							<div className="flex items-center mb-4">
								<div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
									<span className="text-blue-800 font-bold">JD</span>
								</div>
								<div className="ml-4">
									<h4 className="text-lg font-bold">John Doe</h4>
									<p className="text-gray-500">Patient</p>
								</div>
							</div>
							<p className="text-gray-600">
								"The care I received at this medical cabinet was exceptional.
								The doctors were attentive and the staff was friendly and
								professional."
							</p>
							<div className="mt-4 flex">
								{[1, 2, 3, 4, 5].map((star) => (
									<svg
										key={star}
										className="h-5 w-5 text-yellow-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								))}
							</div>
						</div>

						{/* Testimonial 2 */}
						<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
							<div className="flex items-center mb-4">
								<div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
									<span className="text-blue-800 font-bold">JS</span>
								</div>
								<div className="ml-4">
									<h4 className="text-lg font-bold">Jane Smith</h4>
									<p className="text-gray-500">Patient</p>
								</div>
							</div>
							<p className="text-gray-600">
								"I've been coming to this medical cabinet for years. The doctors
								are knowledgeable and take the time to explain everything
								clearly."
							</p>
							<div className="mt-4 flex">
								{[1, 2, 3, 4, 5].map((star) => (
									<svg
										key={star}
										className="h-5 w-5 text-yellow-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								))}
							</div>
						</div>

						{/* Testimonial 3 */}
						<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
							<div className="flex items-center mb-4">
								<div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
									<span className="text-blue-800 font-bold">RJ</span>
								</div>
								<div className="ml-4">
									<h4 className="text-lg font-bold">Robert Johnson</h4>
									<p className="text-gray-500">Patient</p>
								</div>
							</div>
							<p className="text-gray-600">
								"The modern facilities and advanced technology at this medical
								cabinet made my treatment process smooth and effective."
							</p>
							<div className="mt-4 flex">
								{[1, 2, 3, 4, 5].map((star) => (
									<svg
										key={star}
										className="h-5 w-5 text-yellow-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Appointment Section */}
			<section id="appointment" className="py-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
							Appointments
						</h2>
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							Book Your Visit
						</p>
						<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
							Schedule an appointment with our specialists at your convenience.
						</p>
					</div>
					<div className="mt-10 max-w-xl mx-auto">
						<form className="grid grid-cols-1 gap-y-6">
							<div>
								<label
									htmlFor="appointment-date"
									className="block text-sm font-medium text-gray-700"
								>
									Appointment Date
								</label>
								<div className="mt-1">
									<input
										type="date"
										name="appointment-date"
										id="appointment-date"
										className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700"
								>
									Full Name
								</label>
								<div className="mt-1">
									<input
										type="text"
										name="name"
										id="name"
										autoComplete="name"
										className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
									/>
								</div>
							</div>
							<div>
								<button
									type="submit"
									className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
								>
									Book Appointment
								</button>
							</div>
						</form>{" "}
					</div>
				</div>
			</section>

			{/* Google Maps */}
			<section className="py-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
							Location
						</h2>
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							Find Us
						</p>
						<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
							Visit us at our convenient location.
						</p>
					</div>
					<div className="mt-10">
						{/* biome-ignore lint/a11y/useIframeTitle: <explanation> */}
						{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.752292855092!2d47.51419937497726!3d-18.91368198220721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07de34f1f4eb3%3A0xdf111ef9c3fb7091!2sAntananarivo%2C%20Madagascar!5e0!3m2!1sen!2sus!4v1703159547811!5m2!1sen!2sus"
							width="100%"
							height="450"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
