import { useState, useEffect } from "react";

const ResumePage = () => {
	const [padding, setPadding] = useState(
		window.innerWidth < 768 ? "2rem" : "8rem"
	);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	useEffect(() => {
		const handleResize = () => {
			const mobile = window.innerWidth < 768;
			setPadding(mobile ? "2rem" : "8rem");
			setIsMobile(mobile);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="bg-gray-100 min-h-screen py-16">
			<div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 2rem" }}>
				<div
					style={{
						backgroundColor: "white",
						borderRadius: "0.5rem",
						boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
						padding: padding,
						marginBottom: "2rem",
					}}
				>
					{/* Header */}
					<header style={{ textAlign: "center", marginBottom: "2rem" }}>
						<h1
							style={{
								fontSize: "2.5rem",
								fontWeight: "bold",
								color: "#FF6B35",
								marginBottom: "0.5rem",
							}}
						>
							Peter Kvac,
							<span
								style={{
									fontSize: "1.5rem",
									fontWeight: "bold",
									marginLeft: "0.5rem",
								}}
							>
								B.Eng Electronics and Computer
							</span>
						</h1>
						<h2
							style={{
								fontSize: "1.5rem",
								color: "#FF6B35",
								marginBottom: "1rem",
							}}
						>
							Software Engineer (Full Stack & Infrastructure)
						</h2>
						<div
							style={{
								display: "flex",
								flexDirection: isMobile ? "column" : "row",
								justifyContent: "center",
								alignItems: "center",
								fontSize: isMobile ? "1rem" : "1.25rem",
								gap: "1rem",
								color: "#FF6B35",
								textTransform: "uppercase",
							}}
						>
							<p>Vancouver</p>
							<p>(604) 446 3529</p>
							<p>pkvac89@outlook.com</p>
						</div>
					</header>

					{/* Technical Skills */}
					<section style={{ marginBottom: "2rem" }}>
						<h2
							style={{
								fontSize: "1.5rem",
								color: "#FF6B35",
								marginBottom: "1rem",
								paddingBottom: "0.5rem",
							}}
						>
							TECHNICAL SKILLS
						</h2>
						<ul style={{ listStyleType: "none", paddingLeft: "1rem" }}>
							<li
								style={{
									display: "flex",
									alignItems: "center",
									marginBottom: "0.5rem",
								}}
							>
								<span style={{ marginRight: "0.5rem" }}>•</span>
								Docker & Kubernetes
							</li>
							<li
								style={{
									display: "flex",
									alignItems: "center",
									marginBottom: "0.5rem",
								}}
							>
								<span style={{ marginRight: "0.5rem" }}>•</span>
								CI/CD
							</li>
							<li
								style={{
									display: "flex",
									alignItems: "center",
									marginBottom: "0.5rem",
								}}
							>
								<span style={{ marginRight: "0.5rem" }}>•</span>
								Golang, Typescript, React, Node.js — Full Stack Development
							</li>
							<li
								style={{
									display: "flex",
									alignItems: "center",
									marginBottom: "0.5rem",
								}}
							>
								<span style={{ marginRight: "0.5rem" }}>•</span>
								Microservices Architecture & Design
							</li>

							<li
								style={{
									display: "flex",
									alignItems: "center",
									marginBottom: "0.5rem",
								}}
							>
								<span style={{ marginRight: "0.5rem" }}>•</span>
								HTML & CSS
							</li>
							<li style={{ display: "flex", alignItems: "center" }}>
								<span style={{ marginRight: "0.5rem" }}>•</span>
								AWS Certified Cloud Practitioner Certification, Google Cloud
								Platform (GCP) - In Progress
							</li>
						</ul>
					</section>

					{/* Personal Projects */}
					<section style={{ marginBottom: "2rem" }}>
						<h2
							style={{
								fontSize: "1.5rem",
								color: "#FF6B35",
								marginBottom: "1rem",
								paddingBottom: "0.5rem",
							}}
						>
							PERSONAL PROJECT EXPERIENCE
						</h2>
						<div style={{ marginBottom: "1rem" }}>
							<h3
								style={{
									fontSize: "1.1rem",
									fontWeight: "bold",
									marginBottom: "0.5rem",
								}}
							>
								E-Commerce Platform Builder
							</h3>
							<ul style={{ listStyleType: "none", paddingLeft: "1rem" }}>
								<li
									style={{
										display: "flex",
										alignItems: "flex-start",
										marginBottom: "0.5rem",
									}}
								>
									<span style={{ marginRight: "0.5rem" }}>•</span>
									<span>
										Full-stack e-commerce platform built in Golang allowing
										users to create online stores with integrated marketing
										sites
									</span>
								</li>
								<li
									style={{
										display: "flex",
										alignItems: "flex-start",
										marginBottom: "0.5rem",
									}}
								>
									<span style={{ marginRight: "0.5rem" }}>•</span>
									<span>
										Microservices architecture with separate services for user
										management, product catalog, and order processing
									</span>
								</li>
								<li
									style={{
										display: "flex",
										alignItems: "flex-start",
										marginBottom: "0.5rem",
									}}
								>
									<span style={{ marginRight: "0.5rem" }}>•</span>
									<span>
										Product integration with external hosted marketing domains
										and SEO optimization
									</span>
								</li>
								<li
									style={{
										display: "flex",
										alignItems: "flex-start",
										marginBottom: "0.5rem",
									}}
								>
									<span style={{ marginRight: "0.5rem" }}>•</span>
									<span>
										Authentication system and Stripe payment integration for
										secure transactions
									</span>
								</li>
								<li
									style={{
										display: "flex",
										alignItems: "flex-start",
										marginBottom: "0.5rem",
									}}
								>
									<span style={{ marginRight: "0.5rem" }}>•</span>
									<span>
										Comprehensive test suite written in Go covering all API
										functionality
									</span>
								</li>
								<li style={{ display: "flex", alignItems: "flex-start" }}>
									<span style={{ marginRight: "0.5rem" }}>•</span>
									<span>
										Private repository, currently in active development
									</span>
								</li>
							</ul>
						</div>
					</section>

					{/* Professional Experience */}
					<section>
						<h2
							style={{
								fontSize: "1.5rem",
								color: "#FF6B35",
								marginBottom: "1rem",
								paddingBottom: "0.5rem",
							}}
						>
							PROFESSIONAL EXPERIENCE
						</h2>

						{/* PartnershipRx */}
						<div style={{ marginBottom: "2rem" }}>
							<h3
								style={{
									fontSize: "1.25rem",
									fontWeight: "bold",
									marginBottom: "0.5rem",
								}}
							>
								FULL STACK DEVELOPER, PARTNERSHIPRX — APRIL 2025 - NOVEMBER 2025
							</h3>

							<div className="ml-4">
								<p className="font-bold mb-2">
									Pharmaceutical Commerce Platform Development
								</p>
								<div className="mb-2">
									<a
										href="https://www.pillexa.com/"
										target="_blank"
										rel="noopener noreferrer"
										className="text-brand-orange hover:underline"
									>
										www.pillexa.com
									</a>
								</div>
								<ul className="list-none pl-4">
									<li
										style={{
											display: "flex",
											alignItems: "flex-start",
											marginBottom: "0.5rem",
										}}
									>
										<span style={{ marginRight: "0.5rem" }}>•</span>
										<span>
											Full Stack Developer for pharmaceutical commerce platform
											built with MedusaJS v1
										</span>
									</li>
									<li
										style={{
											display: "flex",
											alignItems: "flex-start",
											marginBottom: "0.5rem",
										}}
									>
										<span style={{ marginRight: "0.5rem" }}>•</span>
										<span>
											Developed multi-physician network integration with dynamic
											electronic physician signatures on orders coming through
											the commerce platform
										</span>
									</li>
									<li
										style={{
											display: "flex",
											alignItems: "flex-start",
											marginBottom: "0.5rem",
										}}
									>
										<span style={{ marginRight: "0.5rem" }}>•</span>
										<span>
											Built physician network management system on admin UI
											side, with customer-facing interface for order placement
											and tracking
										</span>
									</li>
									<li
										style={{
											display: "flex",
											alignItems: "flex-start",
											marginBottom: "0.5rem",
										}}
									>
										<span style={{ marginRight: "0.5rem" }}>•</span>
										<span>
											Implemented complete in-house order workflow: physician
											approval → pharmacy review → fulfillment and shipping
										</span>
									</li>
									<li
										style={{
											display: "flex",
											alignItems: "flex-start",
											marginBottom: "0.5rem",
										}}
									>
										<span style={{ marginRight: "0.5rem" }}>•</span>
										<span>
											Worked on 'Prepare' brand - travel medical emergency kit
											with gender-specific medications and insurance integration
										</span>
									</li>
									<li
										style={{
											display: "flex",
											alignItems: "flex-start",
											marginBottom: "0.5rem",
										}}
									>
										<span style={{ marginRight: "0.5rem" }}>•</span>
										<span>
											Independently developed and released RxSkin brand -
											extended and forked from main commerce platform
										</span>
									</li>
									<li
										style={{
											display: "flex",
											alignItems: "flex-start",
											marginBottom: "0.5rem",
										}}
									>
										<span style={{ marginRight: "0.5rem" }}>•</span>
										<span>
											Implemented subscription-based system with recurring
											Stripe payment intents, refund capabilities, and detailed
											compliance logging
										</span>
									</li>
									<li
										style={{
											display: "flex",
											alignItems: "flex-start",
											marginBottom: "0.5rem",
										}}
									>
										<span style={{ marginRight: "0.5rem" }}>•</span>
										<span>
											Developed both admin UI and customer UI using NextJS
											framework with Chakra UI, React, and TypeScript
										</span>
									</li>
									<li
										style={{
											display: "flex",
											alignItems: "flex-start",
											marginBottom: "0.5rem",
										}}
									>
										<span style={{ marginRight: "0.5rem" }}>•</span>
										<span>
											Extended Node.js backend with custom route definitions and
											managed database migrations for entity updates
										</span>
									</li>
									<li style={{ display: "flex", alignItems: "flex-start" }}>
										<span style={{ marginRight: "0.5rem" }}>•</span>
										<span>
											Infrastructure: Backend hosted on Aptible, Admin and
											Customer UI deployed on Vercel. Tech Stack: MedusaJS v1,
											TypeORM, PostgreSQL database for service definitions
										</span>
									</li>
								</ul>
							</div>
						</div>

						{/* LNG Studios */}
						<div style={{ marginBottom: "2rem" }}>
							<h3
								style={{
									fontSize: "1.25rem",
									fontWeight: "bold",
									marginBottom: "0.5rem",
								}}
							>
								FULL STACK DEVELOPER, LNG STUDIOS — JULY 2024 - APRIL 2025
							</h3>

							<div className="ml-4">
								<p className="font-bold mb-2">
									AI Automatic Portal Creator for Real Estate Marketing websites
								</p>
								<ul className="list-none pl-4">
									<li className="flex flex-col mb-2">
										<div className="flex items-start">
											<a
												href="https://m6.proxima-portals.com"
												target="_blank"
												rel="noopener noreferrer"
												className="text-brand-orange hover:underline"
											>
												m6.proxima-portals.com
											</a>
										</div>
										<div className="ml-6 text-sm text-gray-600">
											Password: m6
										</div>
									</li>
									<li
										style={{
											display: "flex",
											alignItems: "flex-start",
											marginBottom: "0.5rem",
										}}
									>
										<span style={{ marginRight: "0.5rem" }}>•</span>
										<span>
											Full Stack Developer in 2 person team, using: NextJS,
											OpenAI API (document and image parsing and categorization,
											plus context creation), Replicate (image generation based
											off context creation) API, Tailwind CSS, S3 asset storage
										</span>
									</li>
									<li
										style={{
											display: "flex",
											alignItems: "flex-start",
											marginBottom: "0.5rem",
										}}
									>
										<span style={{ marginRight: "0.5rem" }}>•</span>
										<span>
											Deploys a marketing portal for a real estate agent's
											pre-sale property
										</span>
									</li>
									<li
										style={{
											display: "flex",
											alignItems: "flex-start",
											marginBottom: "0.5rem",
										}}
									>
										<span
											style={{ marginRight: "0.5rem", marginTop: "0.25rem" }}
										>
											•
										</span>
										<ul style={{ listStyleType: "none", paddingLeft: "0" }}>
											<li style={{ marginBottom: "0.5rem" }}>
												Agent can optionally provide fact sheets, marketing
												pdfs, floor plans, and the portal creator parses and
												classifies the PDF documents.
											</li>
											<li style={{ marginBottom: "0.5rem" }}>
												Next follows customizable theming and layouts inferred
												from the context provided above
											</li>
											<li style={{ marginBottom: "0.5rem" }}>
												If no images or for information will call Replicate API
												for image generation for placeholder gallery images of
												interior, exterior, and amenities (with the ability to
												regenerate) using the context parsed from the documents
											</li>
											<li>
												Final product is agent portal template completely
												generated from context files (provided or not), and
												populates customizable sections for: Overview, Pricing,
												Floor plan, Gallery, FAQ, and Contact sections
											</li>
										</ul>
									</li>
								</ul>
							</div>

							<div style={{ marginLeft: "1rem", marginTop: "1.5rem" }}>
								<p style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
									Proxima, Real Estate pre-sale and marketing platform
								</p>
								<ul style={{ listStyleType: "none", paddingLeft: "1rem" }}>
									<li
										style={{
											display: "flex",
											alignItems: "flex-start",
											marginBottom: "0.5rem",
										}}
									>
										<span style={{ marginRight: "0.5rem" }}>•</span>
										<a
											href="https://nikola.proximahq.io"
											target="_blank"
											rel="noopener noreferrer"
											style={{ color: "#FF6B35", textDecoration: "none" }}
											onMouseOver={(e) =>
												(e.currentTarget.style.textDecoration = "underline")
											}
											onMouseOut={(e) =>
												(e.currentTarget.style.textDecoration = "none")
											}
										>
											www.nikola.proximahq.io
										</a>
									</li>
									<li
										style={{
											display: "flex",
											alignItems: "flex-start",
											marginBottom: "0.5rem",
										}}
									>
										<span style={{ marginRight: "0.5rem" }}>•</span>
										<span>
											Full stack developer and maintainer in 3 person team
										</span>
									</li>
									<li
										style={{
											display: "flex",
											alignItems: "flex-start",
											marginBottom: "0.5rem",
										}}
									>
										<span style={{ marginRight: "0.5rem" }}>•</span>
										<span>
											Stack: React with Typescript, fully custom CMS written in
											NodeJS, Ant Design + custom CSS
										</span>
									</li>
									<li
										style={{
											display: "flex",
											alignItems: "flex-start",
											marginBottom: "0.5rem",
										}}
									>
										<span style={{ marginRight: "0.5rem" }}>•</span>
										<span>
											Key developer in version 2 migration from old javascript
											codebase to new Typescript codebase.
										</span>
									</li>
									<li
										style={{
											display: "flex",
											alignItems: "flex-start",
											marginBottom: "0.5rem",
										}}
									>
										<span style={{ marginRight: "0.5rem" }}>•</span>
										<span>
											Major developer in migration of old dated styled
											components to new Ant Design based components
										</span>
									</li>
									<li style={{ display: "flex", alignItems: "flex-start" }}>
										<span style={{ marginRight: "0.5rem" }}>•</span>
										<span>
											Made application responsive for many devices: mobile,
											tablet (landscape and portrait), desktop, and large
											touchscreens (landscape and portrait) - front end heavy
										</span>
									</li>
								</ul>
							</div>
						</div>

						{/* Indicator for more experience */}
						<div
							style={{
								textAlign: "center",
								margin: "2rem 0",
								padding: "1rem",
								backgroundColor: "#f8f8f8",
								borderRadius: "0.5rem",
								border: "1px dashed #FF6B35",
							}}
						>
							<p
								style={{
									fontSize: "1.1rem",
									color: "#555",
									fontStyle: "italic",
								}}
							>
								<span style={{ fontWeight: "bold", color: "#FF6B35" }}>
									Additional Experience:
								</span>{" "}
								My full resume includes positions at Tantalus Systems, Avigilon,
								and more professional experience.
							</p>
						</div>

						<div style={{ textAlign: "center", marginTop: "2rem" }}>
							<a
								href="/peter-kvac-resume.pdf"
								target="_blank"
								style={{
									backgroundColor: "#FF6B35",
									color: "white",
									padding: "0.75rem 1.5rem",
									borderRadius: "9999px",
									textDecoration: "none",
									display: "inline-block",
									fontWeight: "bold",
									transition: "background-color 0.3s ease",
								}}
								onMouseOver={(e) =>
									(e.currentTarget.style.backgroundColor = "#e05a2b")
								}
								onMouseOut={(e) =>
									(e.currentTarget.style.backgroundColor = "#FF6B35")
								}
							>
								Download Full Resume
							</a>
						</div>
					</section>

					{/* Education */}
					<section style={{ marginTop: "2rem" }}>
						<h2
							style={{
								fontSize: "1.5rem",
								color: "#FF6B35",
								marginBottom: "1rem",
								paddingBottom: "0.5rem",
							}}
						>
							EDUCATION
						</h2>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<h3 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
								Simon Fraser University
							</h3>
							<span
								style={{
									backgroundColor: "#FF6B35",
									color: "white",
									padding: "0.25rem 0.75rem",
									borderRadius: "9999px",
									fontWeight: "bold",
								}}
							>
								B.ENG
							</span>
						</div>
						<p>Computer Engineering and Electronics, SFU, 2012-2019</p>
						<p>
							Co-op placements: Tantalus Systems (8 months), Avigilon (8 months)
						</p>
					</section>
				</div>
			</div>
		</div>
	);
};

export default ResumePage;
