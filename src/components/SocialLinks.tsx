type SocialLinksProps = {
	className?: string;
	iconSize?: string;
};

const SocialLinks = ({
	className = "",
	iconSize = "text-2xl",
}: SocialLinksProps) => {
	return (
		<div className={`flex justify-center space-x-6 ${className}`}>
			<a
				href="https://linkedin.com/in/yourprofile"
				target="_blank"
				rel="noopener noreferrer"
				className={`${iconSize} text-blue-600 hover:text-blue-800 transition`}
			>
				<i className="fab fa-linkedin"></i>
			</a>
			<a
				href="https://github.com/yourusername"
				target="_blank"
				rel="noopener noreferrer"
				className={`${iconSize} text-gray-800 hover:text-gray-600 transition`}
			>
				<i className="fab fa-github"></i>
			</a>
		</div>
	);
};

export default SocialLinks;
