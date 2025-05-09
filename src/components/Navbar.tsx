import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
	const [hoveredLink, setHoveredLink] = useState<string | null>(null);

	return (
		<nav className="bg-white shadow-md text-gray-800 py-6 sticky top-0 z-10">
			<div
				style={{ maxWidth: "1140px", margin: "0 auto", padding: "3rem 1rem" }}
			>
				<div className="flex justify-between items-center">
					<Link to="/" className="flex items-center">
						<img
							src="/logo-no-background.svg"
							alt="Logo"
							style={{ height: "40px", width: "auto" }}
						/>
					</Link>
					<div style={{ display: "flex", gap: "3rem" }}>
						<Link
							to="/"
							style={{
								color: hoveredLink === "home" ? "#FF6B35" : "black",
								fontWeight: 500,
								transition: "color 0.3s ease",
							}}
							onMouseEnter={() => setHoveredLink("home")}
							onMouseLeave={() => setHoveredLink(null)}
						>
							Home
						</Link>
						<Link
							to="/about"
							style={{
								color: hoveredLink === "about" ? "#FF6B35" : "black",
								fontWeight: 500,
								transition: "color 0.3s ease",
							}}
							onMouseEnter={() => setHoveredLink("about")}
							onMouseLeave={() => setHoveredLink(null)}
						>
							About
						</Link>
						<Link
							to="/resume"
							style={{
								color: hoveredLink === "resume" ? "#FF6B35" : "black",
								fontWeight: 500,
								transition: "color 0.3s ease",
							}}
							onMouseEnter={() => setHoveredLink("resume")}
							onMouseLeave={() => setHoveredLink(null)}
						>
							Resume
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
