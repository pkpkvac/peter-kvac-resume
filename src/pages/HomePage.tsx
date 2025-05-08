import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className="bg-white min-h-screen">
			{/* Hero Section */}
			<section
				className="py-32 bg-cover bg-center"
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
				}}
			>
				<div className="container mx-auto text-center px-4">
					<div className="bg-white bg-opacity-80 py-12 px-8 rounded-lg max-w-3xl mx-auto">
						<h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800">
							Hi! I'm Peter.
						</h1>
						<h2 className="text-2xl md:text-3xl mb-6 text-gray-700">
							A cloud engineer and developer.
						</h2>
					</div>
				</div>
			</section>

			{/* Welcome Section */}
			<section className="py-16">
				<div className="container mx-auto text-center px-4">
					<h2 className="text-3xl font-bold mb-16 text-gray-800">
						Welcome to my portfolio page.
					</h2>

					{/* Cards Section */}
					<div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
						{/* About Me Card */}
						<div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform hover:transform hover:scale-105">
							<div className="p-8 flex flex-col items-center">
								<i className="fas fa-user text-5xl text-orange-500 mb-6"></i>
								<h3 className="text-2xl font-bold mb-4 text-gray-800">
									About Me
								</h3>
								<p className="text-gray-600 mb-6 text-center">
									AWS. Python. Passion.
								</p>
								<Link
									to="/about"
									className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
								>
									Learn More
								</Link>
							</div>
						</div>

						{/* Resume Card */}
						<div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform hover:transform hover:scale-105">
							<div className="p-8 flex flex-col items-center">
								<i className="fas fa-file-code text-5xl text-blue-500 mb-6"></i>
								<h3 className="text-2xl font-bold mb-4 text-gray-800">
									Resume
								</h3>
								<p className="text-gray-600 mb-6 text-center">
									My professional experience.
								</p>
								<Link
									to="/resume"
									className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
								>
									View Resume
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default HomePage;
