import React, { useState, useEffect } from "react";

const User = () => {
	// Sample user data - replace with actual API call
	const [users, setUsers] = useState([
		{
			id: 1,
			name: "John Doe",
			email: "john.doe@example.com",
			role: "Patient",
			status: "Active",
			joinedDate: "2023-01-15",
			lastLogin: "2023-11-10",
		},
		{
			id: 2,
			name: "Jane Smith",
			email: "jane.smith@example.com",
			role: "Doctor",
			status: "Active",
			joinedDate: "2022-08-22",
			lastLogin: "2023-11-12",
		},
		{
			id: 3,
			name: "Robert Johnson",
			email: "robert.j@example.com",
			role: "Admin",
			status: "Active",
			joinedDate: "2022-03-10",
			lastLogin: "2023-11-11",
		},
		{
			id: 4,
			name: "Emily Davis",
			email: "emily.davis@example.com",
			role: "Nurse",
			status: "Inactive",
			joinedDate: "2022-11-05",
			lastLogin: "2023-10-28",
		},
		{
			id: 5,
			name: "Michael Wilson",
			email: "michael.w@example.com",
			role: "Patient",
			status: "Active",
			joinedDate: "2023-02-18",
			lastLogin: "2023-11-09",
		},
		{
			id: 6,
			name: "Sarah Brown",
			email: "sarah.b@example.com",
			role: "Patient",
			status: "Inactive",
			joinedDate: "2022-07-30",
			lastLogin: "2023-09-15",
		},
		{
			id: 7,
			name: "David Miller",
			email: "david.m@example.com",
			role: "Doctor",
			status: "Active",
			joinedDate: "2022-05-12",
			lastLogin: "2023-11-12",
		},
	]);

	const [searchTerm, setSearchTerm] = useState("");
	const [filteredUsers, setFilteredUsers] = useState(users);
	const [selectedRole, setSelectedRole] = useState("All");
	const [selectedStatus, setSelectedStatus] = useState("All");

	// Filter users based on search term and filters
	useEffect(() => {
		const results = users.filter((user) => {
			const matchesSearch =
				user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				user.email.toLowerCase().includes(searchTerm.toLowerCase());

			const matchesRole = selectedRole === "All" || user.role === selectedRole;
			const matchesStatus =
				selectedStatus === "All" || user.status === selectedStatus;

			return matchesSearch && matchesRole && matchesStatus;
		});

		setFilteredUsers(results);
	}, [searchTerm, selectedRole, selectedStatus, users]);

	// Get unique roles for filter dropdown
	const roles = ["All", ...new Set(users.map((user) => user.role))];

	// Format date to be more readable
	const formatDate = (dateString) => {
		const options = { year: "numeric", month: "short", day: "numeric" };
		return new Date(dateString).toLocaleDateString(undefined, options);
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="bg-white rounded-lg shadow-lg overflow-hidden">
				<div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600">
					<h1 className="text-2xl md:text-3xl font-bold text-white">
						User Management
					</h1>
					<p className="mt-2 text-blue-100">View and manage system users</p>
				</div>

				<div className="p-4 md:p-6">
					{/* Search and Filters */}
					<div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
						<div className="w-full md:w-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
							{/* Search Input */}
							<div className="relative">
								<input
									type="text"
									placeholder="Search users..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="w-full md:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								/>
								<div className="absolute left-3 top-2.5 text-gray-400">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
										/>
									</svg>
								</div>
							</div>

							{/* Role Filter */}
							<select
								value={selectedRole}
								onChange={(e) => setSelectedRole(e.target.value)}
								className="w-full md:w-auto px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							>
								{roles.map((role) => (
									<option key={role} value={role}>
										{role} Role
									</option>
								))}
							</select>

							{/* Status Filter */}
							<select
								value={selectedStatus}
								onChange={(e) => setSelectedStatus(e.target.value)}
								className="w-full md:w-auto px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							>
								<option value="All">All Status</option>
								<option value="Active">Active</option>
								<option value="Inactive">Inactive</option>
							</select>
						</div>

						{/* Add User Button */}
						<button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 mr-2"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 6v6m0 0v6m0-6h6m-6 0H6"
								/>
							</svg>
							Add New User
						</button>
					</div>

					{/* User Stats */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
						<div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
							<div className="text-blue-800 text-sm font-medium">
								Total Users
							</div>
							<div className="text-2xl font-bold text-blue-900">
								{users.length}
							</div>
						</div>
						<div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100">
							<div className="text-green-800 text-sm font-medium">
								Active Users
							</div>
							<div className="text-2xl font-bold text-green-900">
								{users.filter((user) => user.status === "Active").length}
							</div>
						</div>
						<div className="bg-gradient-to-r from-red-50 to-rose-50 p-4 rounded-lg border border-red-100">
							<div className="text-red-800 text-sm font-medium">
								Inactive Users
							</div>
							<div className="text-2xl font-bold text-red-900">
								{users.filter((user) => user.status === "Inactive").length}
							</div>
						</div>
					</div>

					{/* Users Table */}
					<div className="overflow-x-auto">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										User
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Role
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Status
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Joined Date
									</th>

									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Actions
									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{filteredUsers.length > 0 ? (
									filteredUsers.map((user) => (
										<tr
											key={user.id}
											className="hover:bg-gray-50 transition-colors duration-200"
										>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="flex items-center">
													<div className="flex-shrink-0 h-10 w-10">
														<div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-medium text-lg">
															{user.name.charAt(0)}
														</div>
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900">
															{user.name}
														</div>
														<div className="text-sm text-gray-500">
															{user.email}
														</div>
													</div>
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<span
													className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
													${
														user.role === "Admin"
															? "bg-purple-100 text-purple-800"
															: user.role === "Doctor"
																? "bg-blue-100 text-blue-800"
																: user.role === "Nurse"
																	? "bg-green-100 text-green-800"
																	: "bg-gray-100 text-gray-800"
													}`}
												>
													{user.role}
												</span>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<span
													className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
													${user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
												>
													{user.status}
												</span>
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												{formatDate(user.joinedDate)}
											</td>

											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												<div className="flex space-x-2">
													<button
														className="text-indigo-600 hover:text-indigo-900"
														title="View User"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="h-5 w-5"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
															/>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
															/>
														</svg>
													</button>
													<button
														className="text-blue-600 hover:text-blue-900"
														title="Edit User"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="h-5 w-5"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
															/>
														</svg>
													</button>
													<button
														className="text-red-600 hover:text-red-900"
														title="Delete User"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="h-5 w-5"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
															/>
														</svg>
													</button>
												</div>
											</td>
										</tr>
									))
								) : (
									<tr>
										<td
											colSpan="6"
											className="px-6 py-4 text-center text-gray-500"
										>
											No users found matching your search criteria
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>

					{/* Pagination */}
					<div className="mt-6 flex items-center justify-between">
						<div className="text-sm text-gray-700">
							Showing <span className="font-medium">1</span> to{" "}
							<span className="font-medium">{filteredUsers.length}</span> of{" "}
							<span className="font-medium">{filteredUsers.length}</span> users
						</div>
						<div className="flex space-x-2">
							<button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50">
								Previous
							</button>
							<button className="px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700">
								1
							</button>
							<button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300">
								Next
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default User;
