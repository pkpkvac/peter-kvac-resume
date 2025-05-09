import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import ResumePage from "./pages/ResumePage";

function App() {
	return (
		<Router>
			<ScrollToTop />
			<div className="flex flex-col min-h-screen bg-white font-alegreya">
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
