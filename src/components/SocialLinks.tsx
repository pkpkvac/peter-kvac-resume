type SocialLinksProps = {
	className?: string;
	iconSize?: string;
	iconColor?: string;
};

const SocialLinks = ({
	className = "",
	iconSize = "text-2xl",
	iconColor = "",
}: SocialLinksProps) => {
	return (
		<div className={`flex justify-center space-x-12 ${className}`}>
			<a
				href="https://www.linkedin.com/in/peter-kvac-04888917b/"
				target="_blank"
				rel="noopener noreferrer"
				className={`${iconSize} ${
					iconColor || "text-blue-600"
				} hover:opacity-80 transition`}
			>
				<i className="fab fa-linkedin"></i>
			</a>
			<a
				href="https://github.com/pkpkvac"
				target="_blank"
				rel="noopener noreferrer"
				className={`${iconSize} ${
					iconColor || "text-gray-800"
				} hover:opacity-80 transition`}
			>
				<i className="fab fa-github"></i>
			</a>
		</div>
	);
};

export default SocialLinks;
