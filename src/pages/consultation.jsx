import React, { useState } from "react";

const Consultation = () => {
	// Sample consultation data - replace with actual API call
	const [consultations, setConsultations] = useState([
		{
			id: "CONS-001",
			appointmentId: "APT-001",
			patientId: "P-1234",
			patientName: "John Doe",
			doctorId: "DOC-101",
			doctorName: "Dr. Sarah Johnson",
			reason: "Persistent headache",
			vitalParameters: {
				bloodPressure: "120/80",
				heartRate: "72 bpm",
				temperature: "37.1°C",
				oxygenSaturation: "98%",
			},
			diagnosis: "Tension headache",
			treatment: "Ibuprofen 400mg, rest, hydration",
			consultationDate: "2023-11-10T09:30:00",
			appointmentDate: "2023-11-10T09:00:00",
			status: "Completed",
		},
		{
			id: "CONS-002",
			appointmentId: "APT-003",
			patientId: "P-3456",
			patientName: "Robert Johnson",
			doctorId: "DOC-102",
			doctorName: "Dr. Michael Chen",
			reason: "Annual check-up",
			vitalParameters: {
				bloodPressure: "130/85",
				heartRate: "68 bpm",
				temperature: "36.8°C",
				oxygenSaturation: "99%",
			},
			diagnosis: "Healthy, mild hypertension",
			treatment: "Diet modification, follow-up in 6 months",
			consultationDate: "2023-11-12T14:15:00",
			appointmentDate: "2023-11-12T14:00:00",
			status: "Completed",
		},
		{
			id: "CONS-003",
			appointmentId: "APT-005",
			patientId: "P-5678",
			patientName: "Michael Wilson",
			doctorId: "DOC-103",
			doctorName: "Dr. Emily Rodriguez",
			reason: "Skin rash",
			vitalParameters: {
				bloodPressure: "118/75",
				heartRate: "70 bpm",
				temperature: "37.0°C",
				oxygenSaturation: "98%",
			},
			diagnosis: "Contact dermatitis",
			treatment: "Topical corticosteroid cream, antihistamine",
			consultationDate: "2023-11-14T10:45:00",
			appointmentDate: "2023-11-14T10:30:00",
			status: "Completed",
		},
		{
			id: "CONS-004",
			appointmentId: "APT-007",
			patientId: "P-7890",
			patientName: "Emma Thompson",
			doctorId: "DOC-101",
			doctorName: "Dr. Sarah Johnson",
			reason: "Persistent cough",
			vitalParameters: {
				bloodPressure: "122/78",
				heartRate: "75 bpm",
				temperature: "37.3°C",
				oxygenSaturation: "97%",
			},
			diagnosis: "Acute bronchitis",
			treatment: "Antibiotics, cough suppressant, rest",
			consultationDate: "2023-11-15T16:00:00",
			appointmentDate: "2023-11-15T15:45:00",
			status: "Completed",
		},
		{
			id: "CONS-005",
			appointmentId: "APT-009",
			patientId: "P-9012",
			patientName: "David Garcia",
			doctorId: "DOC-104",
			doctorName: "Dr. James Wilson",
			reason: "Lower back pain",
			vitalParameters: {
				bloodPressure: "125/82",
				heartRate: "71 bpm",
				temperature: "36.9°C",
				oxygenSaturation: "99%",
			},
			diagnosis: "Lumbar strain",
			treatment: "Physical therapy, NSAIDs, heat application",
			consultationDate: "2023-11-16T11:30:00",
			appointmentDate: "2023-11-16T11:00:00",
			status: "Completed",
		},
	]);

	const [searchTerm, setSearchTerm] = useState("");
	const [filteredConsultations, setFilteredConsultations] =
		useState(consultations);

	// Search functionality
	const handleSearch = (e) => {
		const term = e.target.value;
		setSearchTerm(term);

		const filtered = consultations.filter(
			(consultation) =>
				consultation.id.toLowerCase().includes(term.toLowerCase()) ||
				consultation.patientName.toLowerCase().includes(term.toLowerCase()) ||
				consultation.doctorName.toLowerCase().includes(term.toLowerCase()) ||
				consultation.diagnosis.toLowerCase().includes(term.toLowerCase()),
		);

		setFilteredConsultations(filtered);
	};

	// Format date
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

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="bg-white rounded-lg shadow-lg overflow-hidden">
				<div className="p-6 bg-gradient-to-r from-teal-600 to-emerald-600">
					<h1 className="text-2xl md:text-3xl font-bold text-white">
						Consultation Records
					</h1>
					<p className="mt-2 text-teal-100">
						View and manage patient consultations
					</p>
				</div>

				<div className="p-4 md:p-6">
					<div className="flex flex-col md:flex-row justify-between items-center mb-6">
						<div className="mb-4 md:mb-0 w-full md:w-auto">
							<div className="relative">
								<input
									type="text"
									placeholder="Search consultations..."
									value={searchTerm}
									onChange={handleSearch}
									className="w-full md:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
						<button className="w-full md:w-auto bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center">
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
							New Consultation
						</button>
					</div>

					<div className="overflow-x-auto">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th
										scope="col"
										className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Consultation ID
									</th>
									<th
										scope="col"
										className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Appointment ID
									</th>
									<th
										scope="col"
										className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Patient
									</th>
									<th
										scope="col"
										className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Doctor
									</th>
									<th
										scope="col"
										className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Reason
									</th>
									<th
										scope="col"
										className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Vital Parameters
									</th>
									<th
										scope="col"
										className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Diagnosis
									</th>
									<th
										scope="col"
										className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Treatment
									</th>
									<th
										scope="col"
										className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Consultation Date
									</th>
									<th
										scope="col"
										className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Appointment Date
									</th>
									<th
										scope="col"
										className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Actions
									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{filteredConsultations.length > 0 ? (
									filteredConsultations.map((consultation) => (
										<tr
											key={consultation.id}
											className="hover:bg-gray-50 transition-colors duration-200"
										>
											<td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
												{consultation.id}
											</td>
											<td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
												{consultation.appointmentId}
											</td>
											<td className="px-4 py-4 whitespace-nowrap">
												<div className="text-sm font-medium text-gray-900">
													{consultation.patientName}
												</div>
												<div className="text-sm text-gray-500">
													{consultation.patientId}
												</div>
											</td>
											<td className="px-4 py-4 whitespace-nowrap">
												<div className="text-sm font-medium text-gray-900">
													{consultation.doctorName}
												</div>
												<div className="text-sm text-gray-500">
													{consultation.doctorId}
												</div>
											</td>
											<td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
												{consultation.reason}
											</td>
											<td className="px-4 py-4 whitespace-nowrap">
												<div className="text-xs text-gray-500">
													<div>
														<span className="font-medium">BP:</span>{" "}
														{consultation.vitalParameters.bloodPressure}
													</div>
													<div>
														<span className="font-medium">HR:</span>{" "}
														{consultation.vitalParameters.heartRate}
													</div>
													<div>
														<span className="font-medium">Temp:</span>{" "}
														{consultation.vitalParameters.temperature}
													</div>
													<div>
														<span className="font-medium">O2:</span>{" "}
														{consultation.vitalParameters.oxygenSaturation}
													</div>
												</div>
											</td>
											<td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
												{consultation.diagnosis}
											</td>
											<td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
												{consultation.treatment}
											</td>
											<td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
												{formatDate(consultation.consultationDate)}
											</td>
											<td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
												{formatDate(consultation.appointmentDate)}
											</td>
											<td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
												<div className="flex space-x-2">
													<button
														className="text-teal-600 hover:text-teal-900"
														title="View Details"
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
														title="Edit"
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
														title="Delete"
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
													<button
														className="text-purple-600 hover:text-purple-900"
														title="Print"
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
																d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
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
											colSpan="11"
											className="px-4 py-4 text-center text-gray-500"
										>
											No consultations found matching your search criteria
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>

					<div className="mt-6 flex items-center justify-between">
						<div className="text-sm text-gray-700">
							Showing <span className="font-medium">1</span> to{" "}
							<span className="font-medium">
								{filteredConsultations.length}
							</span>{" "}
							of{" "}
							<span className="font-medium">
								{filteredConsultations.length}
							</span>{" "}
							consultations
						</div>
						<div className="flex space-x-2">
							<button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50">
								Previous
							</button>
							<button className="px-3 py-1 rounded-md bg-teal-600 text-white hover:bg-teal-700">
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

export default Consultation;
