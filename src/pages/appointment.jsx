import React, { useState } from "react";

const Appointment = () => {
	// Sample data - replace with actual data from your API/backend
	const [appointments, setAppointments] = useState([
		{
			id: "APT-001",
			patientId: "P-1234",
			patientName: "John Doe",
			date: "2023-11-15T10:30:00",
			status: "Confirmed",
		},
		{
			id: "APT-002",
			patientId: "P-2345",
			patientName: "Jane Smith",
			date: "2023-11-16T14:00:00",
			status: "Pending",
		},
		{
			id: "APT-003",
			patientId: "P-3456",
			patientName: "Robert Johnson",
			date: "2023-11-17T09:15:00",
			status: "Completed",
		},
		{
			id: "APT-004",
			patientId: "P-4567",
			patientName: "Emily Davis",
			date: "2023-11-18T16:45:00",
			status: "Cancelled",
		},
		{
			id: "APT-005",
			patientId: "P-5678",
			patientName: "Michael Wilson",
			date: "2023-11-19T11:00:00",
			status: "Confirmed",
		},
	]);

	// Function to format date
	const formatDate = (dateString) => {
		const options = {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		};
		return new Date(dateString).toLocaleDateString(undefined, options);
	};

	// Function to get status badge color
	const getStatusColor = (status) => {
		switch (status.toLowerCase()) {
			case "confirmed":
				return "bg-green-100 text-green-800";
			case "pending":
				return "bg-yellow-100 text-yellow-800";
			case "completed":
				return "bg-blue-100 text-blue-800";
			case "cancelled":
				return "bg-red-100 text-red-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="bg-white rounded-lg shadow-lg overflow-hidden">
				<div className="p-6 bg-gradient-to-r from-purple-600 to-indigo-600">
					<h1 className="text-2xl md:text-3xl font-bold text-white">
						Appointment Management
					</h1>
					<p className="mt-2 text-purple-100">
						View and manage patient appointments
					</p>
				</div>

				<div className="p-4 md:p-6">
					<div className="flex flex-col md:flex-row justify-between items-center mb-6">
						<div className="mb-4 md:mb-0">
							<div className="relative">
								<input
									type="text"
									placeholder="Search appointments..."
									className="w-full md:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
						</div>
						<button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center">
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
							New Appointment
						</button>
					</div>

					<div className="overflow-x-auto">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Appointment ID
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Patient ID
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Patient Name
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Date & Time
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
										Actions
									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{appointments.map((appointment) => (
									<tr
										key={appointment.id}
										className="hover:bg-gray-50 transition-colors duration-200"
									>
										<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
											{appointment.id}
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
											{appointment.patientId}
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm font-medium text-gray-900">
												{appointment.patientName}
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
											{formatDate(appointment.date)}
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<span
												className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(appointment.status)}`}
											>
												{appointment.status}
											</span>
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
											<div className="flex space-x-2">
												<button className="text-indigo-600 hover:text-indigo-900">
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
												<button className="text-blue-600 hover:text-blue-900">
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
												<button className="text-red-600 hover:text-red-900">
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
								))}
							</tbody>
						</table>
					</div>

					<div className="mt-6 flex items-center justify-between">
						<div className="text-sm text-gray-700">
							Showing <span className="font-medium">1</span> to{" "}
							<span className="font-medium">5</span> of{" "}
							<span className="font-medium">5</span> appointments
						</div>
						<div className="flex space-x-2">
							<button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50">
								Previous
							</button>
							<button className="px-3 py-1 rounded-md bg-purple-600 text-white hover:bg-purple-700">
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

export default Appointment;
