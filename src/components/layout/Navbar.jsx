import React, { useState } from "react";
import { Link, Outlet } from "react-router";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div>
			<nav className="bg-white shadow-md">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between h-16">
						<div className="flex items-center">
							<div className="flex-shrink-0 flex items-center">
								<Link to="/" className="flex items-center">
									<svg
										className="h-8 w-8 text-blue-600"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
										/>
									</svg>
									<span className="ml-2 text-xl font-bold text-gray-900">
										MediCare
									</span>
								</Link>
							</div>
							<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
								<Link
									to="/"
									className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
								>
									Home
								</Link>
								<Link
									to="/dashboard"
									className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
								>
									Dashboard
								</Link>
								<a
									href="#services"
									className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
								>
									Services
								</a>
								<a
									href="#appointment"
									className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
								>
									Appointments
								</a>
							</div>
						</div>
						<div className="hidden sm:ml-6 sm:flex sm:items-center">
							<Link
								to="/login"
								className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
							>
								Se Connecter
							</Link>
						</div>
						<div className="-mr-2 flex items-center sm:hidden">
							{/* Mobile menu button */}
							<button
								type="button"
								className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
								aria-expanded="false"
								onClick={() => setIsMenuOpen(!isMenuOpen)}
							>
								<span className="sr-only">Open main menu</span>
								{/* Icon when menu is closed */}
								{!isMenuOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									/* Icon when menu is open */
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile menu, show/hide based on menu state */}
				{isMenuOpen && (
					<div className="sm:hidden">
						<div className="pt-2 pb-3 space-y-1">
							<Link
								to="/"
								className="bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
							>
								Home
							</Link>
							<Link
								to="/dashboard"
								className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
							>
								Dashboard
							</Link>
							<a
								href="#services"
								className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
							>
								Services
							</a>
							<a
								href="#appointment"
								className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
							>
								Appointments
							</a>
							<div className="mt-4 pl-3 pr-4">
								<Link
									to="/login"
									className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
								>
									Se Connecter
								</Link>
							</div>
						</div>
					</div>
				)}
			</nav>
			<Outlet />
		</div>
	);
};

export default Navbar;
