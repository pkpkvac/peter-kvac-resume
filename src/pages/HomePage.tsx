import { useState, useEffect } from "react";
import Card from "../components/Card";
import SocialLinks from "../components/SocialLinks";
import VisitorCounter from "../components/VisitorCounter";

const HomePage = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="bg-white">
			{/* Hero Section */}
			<section
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					height: "40vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<div
					style={{
						maxWidth: "1140px",
						margin: "0 auto",
						padding: "0 1rem",
						textAlign: "center",
					}}
				>
					<h1
						style={{
							fontSize: "3.5rem",
							fontWeight: "bold",
							marginBottom: "1.5rem",
							color: "white",
							textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
						}}
					>
						Hi! I'm Peter.
					</h1>
					<h2
						style={{
							fontSize: "1.875rem",
							color: "white",
							textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
						}}
					>
						A cloud engineer and developer.
					</h2>
				</div>
			</section>

			{/* Welcome Section */}
			<section className="">
				<div
					style={{
						maxWidth: "1140px",
						margin: "0 auto",
						padding: "0 1rem",
						textAlign: "center",
					}}
				>
					<h2 className="text-3xl font-bold text-gray-800 py-20">
						Welcome to my portfolio page.
					</h2>
					<p className="text-lg text-gray-600 italic mb-14">
						This site was built using React, TypeScript, and Tailwind CSS.
						Deployed with GitHub Actions, AWS S3, CloudFront, and Route 53. The
						visitor counter uses AWS Lambda, API Gateway, and RDS MySQL. All
						infrastructure managed with Terraform and tested with Cypress.
					</p>

					{/* Visitor Counter */}
					<div className="mb-10">
						<VisitorCounter />
					</div>

					{/* Cards Section - Responsive layout */}
					<div
						className={`mb-20 ${isMobile ? "flex flex-col gap-8" : ""}`}
						style={
							isMobile
								? {}
								: { display: "table", width: "100%", tableLayout: "fixed" }
						}
					>
						{isMobile ? (
							<>
								<div className="px-4">
									<Card
										title="About Me"
										linkTo="/about"
										icon={
											<i className="fas fa-user text-5xl text-brand-orange"></i>
										}
										buttonColor="bg-brand-orange hover:bg-opacity-90"
									>
										AWS. Python. Typescript. Java. Passion.
									</Card>
								</div>
								<div className="px-4">
									<Card
										title="Resume"
										linkTo="/resume"
										icon={
											<i className="fas fa-file-code text-5xl text-blue-500"></i>
										}
										buttonText="View Resume"
									>
										My professional experience.
									</Card>
								</div>
							</>
						) : (
							<div style={{ display: "table-row" }}>
								<div style={{ display: "table-cell", padding: "0 1rem" }}>
									<Card
										title="About Me"
										linkTo="/about"
										icon={
											<i className="fas fa-user text-5xl text-brand-orange"></i>
										}
										buttonColor="bg-brand-orange hover:bg-opacity-90"
									>
										AWS. Python. Typescript. Java. Passion.
									</Card>
								</div>
								<div style={{ display: "table-cell", padding: "0 1rem" }}>
									<Card
										title="Resume"
										linkTo="/resume"
										icon={
											<i className="fas fa-file-code text-5xl text-blue-500"></i>
										}
										buttonText="View Resume"
									>
										My professional experience.
									</Card>
								</div>
							</div>
						)}
					</div>
				</div>
			</section>

			{/* Contact Me Section */}
			<section className="py-10 bg-[#033242] text-white">
				<div
					style={{
						maxWidth: "1140px",
						margin: "0 auto",
						// padding: "0 1rem",
						textAlign: "center",
					}}
				>
					<h2 className="text-3xl font-bold mb-10">Contact Me!</h2>
					<SocialLinks
						iconSize="text-5xl"
						className="mb-4"
						iconColor="text-white"
					/>
				</div>
			</section>
		</div>
	);
};

export default HomePage;
