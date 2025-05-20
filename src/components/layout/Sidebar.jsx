import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";

const Sidebar = () => {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const location = useLocation();

	const menuItems = [
		{
			path: "/backoffice",
			name: "Dashboard",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
				</svg>
			),
		},
		{
			path: "/backoffice/user",
			name: "Users",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
				</svg>
			),
		},
		{
			path: "/backoffice/appointment",
			name: "Appointments",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		{
			path: "/backoffice/consultation",
			name: "Consultations",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
	];

	const toggleSidebar = () => {
		setIsCollapsed(!isCollapsed);
	};

	return (
		<div className="flex h-screen bg-gray-100">
			{/* Sidebar */}
			<div
				className={`${
					isCollapsed ? "w-20" : "w-64"
				} bg-gradient-to-b from-indigo-800 to-purple-800 text-white transition-all duration-300 ease-in-out h-full`}
			>
				<div className="flex items-center justify-between p-4 border-b border-indigo-700">
					{!isCollapsed && (
						<div className="font-bold text-xl">Medical Admin</div>
					)}
					<button
						onClick={toggleSidebar}
						className={`p-2 rounded-lg bg-indigo-700 hover:bg-indigo-600 focus:outline-none ${
							isCollapsed ? "mx-auto" : ""
						}`}
					>
						{isCollapsed ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clipRule="evenodd"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
									clipRule="evenodd"
								/>
							</svg>
						)}
					</button>
				</div>

				<div className="py-4">
					<div className="flex flex-col space-y-1">
						{menuItems.map((item, index) => {
							const isActive = location.pathname === item.path;
							return (
								<Link
									key={index}
									to={item.path}
									className={`${
										isActive
											? "bg-indigo-900 border-r-4 border-white"
											: "hover:bg-indigo-700"
									} flex items-center py-3 px-4 transition-colors duration-200`}
								>
									<div className={`${isCollapsed ? "mx-auto" : "mr-3"}`}>
										{item.icon}
									</div>
									{!isCollapsed && <div>{item.name}</div>}
								</Link>
							);
						})}
					</div>
				</div>

				<div className="absolute bottom-0  p-4 border-t border-indigo-700">
					<Link
						to="/"
						className="flex items-center text-white hover:bg-indigo-700 rounded-lg p-2 transition-colors duration-200"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
								clipRule="evenodd"
							/>
						</svg>
						{!isCollapsed && <span className="ml-2">Log Out</span>}
					</Link>
				</div>
			</div>

			{/* Main content */}
			<div className="flex-1 overflow-auto">
				<main className="p-6">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default Sidebar;
