const Footer = () => {
	return (
		<footer className="bg-white py-8">
			<div className="max-w-container mx-auto px-4 text-center">
				<p className="text-gray-600">&copy; {new Date().getFullYear()}</p>
			</div>
		</footer>
	);
};

export default Footer;
