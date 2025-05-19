import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/login";
import ReactLenis from "lenis/react";

function App() {
	// NOTE ato ny fonction rehetra sy ny logique an ilay composant na page rehetra

	// NOTE ato ny code jsx rehetra
	return (
		<ReactLenis root>
		  <BrowserRouter>
  			<Routes>
  				<Route path="/" element={<Navbar />}>
        
  					<Route index element={<Home />} />
  					<Route path="dashboard" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
  				</Route>
  			</Routes>
  		</BrowserRouter>
		</ReactLenis>
	);
}

export default App;
