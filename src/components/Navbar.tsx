import { Link } from "react-router-dom";

const Navbar = () => {
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
								color: "black",
								fontWeight: 500,
								transition: "color 0.3s ease",
							}}
							className="hover:text-[#FF6B35]"
						>
							Home
						</Link>
						<Link
							to="/about"
							style={{
								color: "black",
								fontWeight: 500,
								transition: "color 0.3s ease",
							}}
							className="hover:text-[#FF6B35]"
						>
							About
						</Link>
						<Link
							to="/resume"
							style={{
								color: "black",
								fontWeight: 500,
								transition: "color 0.3s ease",
							}}
							className="hover:text-[#FF6B35]"
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
