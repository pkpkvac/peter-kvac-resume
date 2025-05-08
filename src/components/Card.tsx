import { ReactNode } from "react";
import { Link } from "react-router-dom";

type CardProps = {
	title: string;
	linkTo: string;
	children: ReactNode;
};

const Card = ({ title, linkTo, children }: CardProps) => {
	return (
		<div className="bg-white rounded-lg shadow-lg overflow-hidden">
			<div className="p-6">
				<h3 className="text-2xl font-bold mb-4">{title}</h3>
				<div className="mb-4">{children}</div>
				<Link
					to={linkTo}
					className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
				>
					Learn More
				</Link>
			</div>
		</div>
	);
};

export default Card;
