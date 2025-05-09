import { type ReactNode } from "react";
import { Link } from "react-router-dom";

type CardProps = {
	title: string;
	linkTo: string;
	children: ReactNode;
	icon?: ReactNode;
	buttonText?: string;
	buttonColor?: string;
};

const Card = ({
	title,
	linkTo,
	children,
	icon,
	buttonText = "Learn More",
	buttonColor = "bg-blue-600 hover:bg-opacity-90",
}: CardProps) => {
	return (
		<Link to={linkTo} className="block">
			<div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-transform hover:transform hover:scale-105 h-full">
				<div className="p-10 flex flex-col items-center">
					{icon && <div className="mb-6">{icon}</div>}
					<h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
					<div className="mb-6 text-center text-gray-600">{children}</div>
					<div
						className={`inline-block ${buttonColor} text-white px-6 py-2 rounded-full`}
					>
						{buttonText}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Card;
