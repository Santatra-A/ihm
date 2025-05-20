import React, { useState } from "react";
import {
	FiCalendar,
	FiCreditCard,
	FiLock,
	FiMail,
	FiMapPin,
	FiPhone,
	FiUser,
} from "react-icons/fi";

function Register() {
	const [formData, setFormData] = useState({
		lastName: "",
		firstName: "",
		username: "",
		password: "",
		confirmPassword: "",
		birthDate: "",
		birthPlace: "",
		sex: "",
		address: "",
		phoneNumber: "",
		email: "",
		cin: "",
		cinDelivranceDate: "",
		cinDelivrancePlace: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		// Add your registration logic here
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
				<div className="md:flex">
					<div className="hidden md:block md:w-1/3 bg-indigo-500 p-10">
						<div className="h-full flex flex-col justify-between">
							<div>
								<h2 className="text-white text-3xl font-bold mb-6">
									Join Our Community
								</h2>
								<p className="text-indigo-200 mb-6">
									Create an account to get started with our services.
								</p>
							</div>
							<div className="text-indigo-200 text-sm">
								<p>Already have an account?</p>
								<a
									href="/login"
									className="text-white font-semibold hover:text-indigo-100 transition-colors"
								>
									Sign in here
								</a>
							</div>
						</div>
					</div>
					<div className="md:w-2/3 p-8">
						<div className="text-center md:text-left mb-8">
							<h2 className="text-2xl font-bold text-gray-800">
								Create Your Account
							</h2>
							<p className="text-gray-600 mt-2">
								Please fill in all the required information
							</p>
						</div>

						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{/* Personal Information */}
								<div className="space-y-4">
									<div>
										<label
											htmlFor="lastName"
											className="block text-sm font-medium text-gray-700"
										>
											Last Name
										</label>
										<div className="mt-1 relative rounded-md shadow-sm">
											<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
												<FiUser className="h-5 w-5 text-gray-400" />
											</div>
											<input
												type="text"
												name="lastName"
												id="lastName"
												value={formData.lastName}
												onChange={handleChange}
												className="pl-10 px-4 py-2 px-4 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
												required
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="firstName"
											className="block text-sm font-medium text-gray-700"
										>
											First Name
										</label>
										<div className="mt-1 relative rounded-md shadow-sm">
											<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
												<FiUser className="h-5 w-5 text-gray-400" />
											</div>
											<input
												type="text"
												name="firstName"
												id="firstName"
												value={formData.firstName}
												onChange={handleChange}
												className="pl-10 px-4 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
												required
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="username"
											className="block text-sm font-medium text-gray-700"
										>
											Username
										</label>
										<div className="mt-1 relative rounded-md shadow-sm">
											<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
												<FiUser className="h-5 w-5 text-gray-400" />
											</div>
											<input
												type="text"
												name="username"
												id="username"
												value={formData.username}
												onChange={handleChange}
												className="pl-10 px-4 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
												required
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-gray-700"
										>
											Email
										</label>
										<div className="mt-1 relative rounded-md shadow-sm">
											<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
												<FiMail className="h-5 w-5 text-gray-400" />
											</div>
											<input
												type="email"
												name="email"
												id="email"
												value={formData.email}
												onChange={handleChange}
												className="pl-10 px-4 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
												required
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="password"
											className="block text-sm font-medium text-gray-700"
										>
											Password
										</label>
										<div className="mt-1 relative rounded-md shadow-sm">
											<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
												<FiLock className="h-5 w-5 text-gray-400" />
											</div>
											<input
												type="password"
												name="password"
												id="password"
												value={formData.password}
												onChange={handleChange}
												className="pl-10 px-4 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
												required
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="confirmPassword"
											className="block text-sm font-medium text-gray-700"
										>
											Confirm Password
										</label>
										<div className="mt-1 relative rounded-md shadow-sm">
											<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
												<FiLock className="h-5 w-5 text-gray-400" />
											</div>
											<input
												type="password"
												name="confirmPassword"
												id="confirmPassword"
												value={formData.confirmPassword}
												onChange={handleChange}
												className="pl-10 px-4 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
												required
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="sex"
											className="block text-sm font-medium text-gray-700"
										>
											Sex
										</label>
										<select
											name="sex"
											id="sex"
											value={formData.sex}
											onChange={handleChange}
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
											required
										>
											<option value="">Select</option>
											<option value="male">Male</option>
											<option value="female">Female</option>
											<option value="other">Other</option>
										</select>
									</div>
								</div>

								{/* Additional Information */}
								<div className="space-y-4">
									<div>
										<label
											htmlFor="birthDate"
											className="block text-sm font-medium text-gray-700"
										>
											Date of Birth
										</label>
										<div className="mt-1 relative rounded-md shadow-sm">
											<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
												<FiCalendar className="h-5 w-5 text-gray-400" />
											</div>
											<input
												type="date"
												name="birthDate"
												id="birthDate"
												value={formData.birthDate}
												onChange={handleChange}
												className="pl-10 px-4 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
												required
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="birthPlace"
											className="block text-sm font-medium text-gray-700"
										>
											Place of Birth
										</label>
										<div className="mt-1 relative rounded-md shadow-sm">
											<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
												<FiMapPin className="h-5 w-5 text-gray-400" />
											</div>
											<input
												type="text"
												name="birthPlace"
												id="birthPlace"
												value={formData.birthPlace}
												onChange={handleChange}
												className="pl-10 px-4 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
												required
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="address"
											className="block text-sm font-medium text-gray-700"
										>
											Address
										</label>
										<div className="mt-1 relative rounded-md shadow-sm">
											<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
												<FiMapPin className="h-5 w-5 text-gray-400" />
											</div>
											<input
												type="text"
												name="address"
												id="address"
												value={formData.address}
												onChange={handleChange}
												className="pl-10 px-4 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
												required
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="phoneNumber"
											className="block text-sm font-medium text-gray-700"
										>
											Phone Number
										</label>
										<div className="mt-1 relative rounded-md shadow-sm">
											<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
												<FiPhone className="h-5 w-5 text-gray-400" />
											</div>
											<input
												type="tel"
												name="phoneNumber"
												id="phoneNumber"
												value={formData.phoneNumber}
												onChange={handleChange}
												className="pl-10 px-4 py-2 px-4 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
												required
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="cin"
											className="block text-sm font-medium text-gray-700"
										>
											CIN Number
										</label>
										<div className="mt-1 relative rounded-md shadow-sm">
											<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
												<FiCreditCard className="h-5 w-5 text-gray-400" />
											</div>
											<input
												type="text"
												name="cin"
												id="cin"
												value={formData.cin}
												onChange={handleChange}
												className="pl-10 px-4 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
												required
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="cinDelivranceDate"
											className="block text-sm font-medium text-gray-700"
										>
											CIN Deliverance Date
										</label>
										<div className="mt-1 relative rounded-md shadow-sm">
											<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
												<FiCalendar className="h-5 w-5 text-gray-400" />
											</div>
											<input
												type="date"
												name="cinDelivranceDate"
												id="cinDelivranceDate"
												value={formData.cinDelivranceDate}
												onChange={handleChange}
												className="pl-10 px-4 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
												required
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="cinDelivrancePlace"
											className="block text-sm font-medium text-gray-700"
										>
											CIN Deliverance Place
										</label>
										<div className="mt-1 relative rounded-md shadow-sm">
											<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
												<FiMapPin className="h-5 w-5 text-gray-400" />
											</div>
											<input
												type="text"
												name="cinDelivrancePlace"
												id="cinDelivrancePlace"
												value={formData.cinDelivrancePlace}
												onChange={handleChange}
												className="pl-10 px-4 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
												required
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="flex justify-end">
								<button
									type="submit"
									className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>
									Register
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
