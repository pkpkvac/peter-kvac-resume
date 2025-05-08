import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

import Footer from "./components/Footer";
import ResumePage from "./pages/ResumePage";

function App() {
	return (
		<Router>
			<div className="flex flex-col min-h-screen bg-white">
				<Navbar />
				<main className="flex-grow">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/resume" element={<ResumePage />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
