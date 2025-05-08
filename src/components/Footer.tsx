const Footer = () => {
	return (
		<footer className="bg-white border-t border-gray-200 py-8">
			<div className="container mx-auto px-4 text-center">
				<div className="flex justify-center space-x-6 mb-4">
					<a
						href="https://linkedin.com/in/yourprofile"
						target="_blank"
						rel="noopener noreferrer"
						className="text-3xl text-blue-600 hover:text-blue-800 transition"
					>
						<i className="fab fa-linkedin"></i>
					</a>
					<a
						href="https://github.com/yourusername"
						target="_blank"
						rel="noopener noreferrer"
						className="text-3xl text-gray-800 hover:text-gray-600 transition"
					>
						<i className="fab fa-github"></i>
					</a>
				</div>
				<p className="text-gray-600">
					&copy; {new Date().getFullYear()} Peter Kvac. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
