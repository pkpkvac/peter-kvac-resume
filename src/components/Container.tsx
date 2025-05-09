import { type ReactNode } from "react";

type ContainerProps = {
	children: ReactNode;
	className?: string;
};

const Container = ({ children, className = "" }: ContainerProps) => {
	return (
		<div
			className={`max-w-container mx-auto px-4 ${className}`}
			style={{ maxWidth: "1140px" }}
		>
			{children}
		</div>
	);
};

export default Container;
