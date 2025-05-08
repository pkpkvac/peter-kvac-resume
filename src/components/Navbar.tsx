import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="bg-white shadow-md text-gray-800 p-4 sticky top-0 z-10">
			<div className="container mx-auto flex justify-between items-center">
				<Link to="/" className="flex items-center">
					<img src="/vite.svg" alt="Logo" className="h-8 w-8 mr-2" />
					<span className="text-xl font-bold">Peter Kvac</span>
				</Link>
				<div className="space-x-6">
					<Link to="/" className="hover:text-blue-600 transition">
						Home
					</Link>
					<Link to="/about" className="hover:text-blue-600 transition">
						About
					</Link>
					<Link to="/resume" className="hover:text-blue-600 transition">
						Resume
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
