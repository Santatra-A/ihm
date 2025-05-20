import ReactLenis from "lenis/react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Appointment from "./pages/appointment";
import Consultation from "./pages/consultation";
import Login from "./pages/login";
import Register from "./pages/register";
import User from "./pages/user";

function App() {
	// NOTE ato ny fonction rehetra sy ny logique an ilay composant na page rehetra

	// NOTE ato ny code jsx rehetra
	return (
		<ReactLenis root>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navbar />}>
						<Route index element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />
					</Route>
					<Route path="backoffice" element={<Sidebar />}>
						<Route index element={<Dashboard />} />
						<Route path="user" element={<User />} />
						<Route path="appointment" element={<Appointment />} />
						<Route path="consultation" element={<Consultation />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ReactLenis>
	);
}

export default App;
