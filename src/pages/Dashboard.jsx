import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React, { useState, useEffect } from "react";
import { Doughnut, Pie } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const StatCard = ({ title, value, icon, color }) => {
	return (
		<div className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${color}`}>
			<div className="flex justify-between items-center">
				<div>
					<p className="text-gray-500 text-sm font-medium uppercase">{title}</p>
					<h3 className="text-3xl font-bold mt-1">{value}</h3>
				</div>
				<div
					className={`p-3 rounded-full ${color.replace("border-", "bg-").replace("-600", "-100")} text-${color.replace("border-", "").replace("-600", "-600")}`}
				>
					{icon}
				</div>
			</div>
		</div>
	);
};

const Dashboard = () => {
	// Sample data - replace with actual data from your API/backend
	const [stats, setStats] = useState({
		totalAppointments: 156,
		pendingAppointments: 28,
		completedAppointments: 98,
		cancelledAppointments: 30,
		totalUsers: 243,
		activeUsers: 187,
		inactiveUsers: 56,
		totalConsultations: 124,
		generalConsultations: 45,
		specialistConsultations: 62,
		emergencyConsultations: 17,
	});

	// Chart data for appointments
	const appointmentChartData = {
		labels: ["Pending", "Completed", "Cancelled"],
		datasets: [
			{
				data: [
					stats.pendingAppointments,
					stats.completedAppointments,
					stats.cancelledAppointments,
				],
				backgroundColor: ["#FBBF24", "#10B981", "#EF4444"],
				borderColor: ["#F59E0B", "#059669", "#DC2626"],
				borderWidth: 1,
			},
		],
	};

	// Chart data for users
	const userChartData = {
		labels: ["Active", "Inactive"],
		datasets: [
			{
				data: [stats.activeUsers, stats.inactiveUsers],
				backgroundColor: ["#3B82F6", "#9CA3AF"],
				borderColor: ["#2563EB", "#6B7280"],
				borderWidth: 1,
			},
		],
	};

	// Chart data for consultations
	const consultationChartData = {
		labels: ["General", "Specialist", "Emergency"],
		datasets: [
			{
				data: [
					stats.generalConsultations,
					stats.specialistConsultations,
					stats.emergencyConsultations,
				],
				backgroundColor: ["#8B5CF6", "#EC4899", "#F97316"],
				borderColor: ["#7C3AED", "#DB2777", "#EA580C"],
				borderWidth: 1,
			},
		],
	};

	// Chart options
	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: "bottom",
				labels: {
					usePointStyle: true,
					padding: 20,
					font: {
						size: 12,
					},
				},
			},
		},
		cutout: "65%",
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="mb-8">
				<h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
				<p className="text-gray-600 mt-1">
					Welcome to your medical administration dashboard
				</p>
			</div>

			{/* Stats Overview */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
				<StatCard
					title="Total Appointments"
					value={stats.totalAppointments}
					color="border-blue-600"
					icon={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
					}
				/>
				<StatCard
					title="Total Users"
					value={stats.totalUsers}
					color="border-purple-600"
					icon={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						</svg>
					}
				/>
				<StatCard
					title="Total Consultations"
					value={stats.totalConsultations}
					color="border-green-600"
					icon={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
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
					}
				/>
			</div>

			{/* Charts */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Appointment Chart */}
				<div className="bg-white rounded-lg shadow-md p-6">
					<h2 className="text-xl font-semibold text-gray-800 mb-4">
						Appointment Status
					</h2>
					<div className="h-64">
						<Doughnut data={appointmentChartData} options={chartOptions} />
					</div>
					<div className="grid grid-cols-3 gap-2 mt-6">
						<div className="text-center">
							<div className="text-yellow-500 font-bold text-xl">
								{stats.pendingAppointments}
							</div>
							<div className="text-gray-500 text-sm">Pending</div>
						</div>
						<div className="text-center">
							<div className="text-green-500 font-bold text-xl">
								{stats.completedAppointments}
							</div>
							<div className="text-gray-500 text-sm">Completed</div>
						</div>
						<div className="text-center">
							<div className="text-red-500 font-bold text-xl">
								{stats.cancelledAppointments}
							</div>
							<div className="text-gray-500 text-sm">Cancelled</div>
						</div>
					</div>
				</div>

				{/* User Chart */}
				<div className="bg-white rounded-lg shadow-md p-6">
					<h2 className="text-xl font-semibold text-gray-800 mb-4">
						User Status
					</h2>
					<div className="h-64">
						<Pie data={userChartData} options={chartOptions} />
					</div>
					<div className="grid grid-cols-2 gap-2 mt-6">
						<div className="text-center">
							<div className="text-blue-500 font-bold text-xl">
								{stats.activeUsers}
							</div>
							<div className="text-gray-500 text-sm">Active</div>
						</div>
						<div className="text-center">
							<div className="text-gray-500 font-bold text-xl">
								{stats.inactiveUsers}
							</div>
							<div className="text-gray-500 text-sm">Inactive</div>
						</div>
					</div>
				</div>

				{/* Consultation Chart */}
				<div className="bg-white rounded-lg shadow-md p-6">
					<h2 className="text-xl font-semibold text-gray-800 mb-4">
						Consultation Types
					</h2>
					<div className="h-64">
						<Doughnut data={consultationChartData} options={chartOptions} />
					</div>
					<div className="grid grid-cols-3 gap-2 mt-6">
						<div className="text-center">
							<div className="text-purple-500 font-bold text-xl">
								{stats.generalConsultations}
							</div>
							<div className="text-gray-500 text-sm">General</div>
						</div>
						<div className="text-center">
							<div className="text-pink-500 font-bold text-xl">
								{stats.specialistConsultations}
							</div>
							<div className="text-gray-500 text-sm">Specialist</div>
						</div>
						<div className="text-center">
							<div className="text-orange-500 font-bold text-xl">
								{stats.emergencyConsultations}
							</div>
							<div className="text-gray-500 text-sm">Emergency</div>
						</div>
					</div>
				</div>
			</div>

			{/* Recent Activity Section */}
			<div className="mt-8 bg-white rounded-lg shadow-md p-6">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-xl font-semibold text-gray-800">
						Recent Activity
					</h2>
				</div>
				<div className="overflow-x-auto">
					<table className="min-w-full divide-y divide-gray-200">
						<thead className="bg-gray-50">
							<tr>
								<th
									scope="col"
									className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
								>
									Activity
								</th>
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
									Time
								</th>
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-200">
							<tr>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
									New appointment created
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									John Doe
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									10 minutes ago
								</td>
							</tr>
							<tr>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
									Consultation completed
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									Dr. Smith
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									1 hour ago
								</td>
							</tr>
							<tr>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
									New user registered
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									Jane Wilson
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									3 hours ago
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
