const ResumePage = () => {
	return (
		<div className="bg-gray-100 py-16">
			<div className="container mx-auto px-4">
				<div className="bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-5xl mx-auto">
					{/* Header */}
					<div className="border-b pb-6 mb-6">
						<h2 className="text-2xl font-bold text-gray-800">
							Peter Kvac, B.Eng Electronics and Computer
						</h2>
						<h3 className="text-xl text-gray-700 mt-1">
							Software Engineer (Full Stack & DevOps)
						</h3>
						<p className="text-gray-600 mt-2">
							Vancouver • (604) 446 3529 • pkvac89@outlook.com
						</p>
					</div>

					{/* Certifications */}
					<div className="mb-8">
						<h3 className="text-xl font-semibold text-gray-800 mb-3">
							Certifications
						</h3>
						<p className="text-gray-700">AWS Certified Cloud Practitioner</p>
					</div>

					{/* Technical Skills */}
					<div className="mb-8">
						<h3 className="text-xl font-semibold text-gray-800 mb-3">
							Technical Skills
						</h3>
						<ul className="text-gray-700 list-disc pl-5 space-y-1">
							<li>AWS Cloud & Infrastructure</li>
							<li>Docker</li>
							<li>CI/CD</li>
							<li>
								Java (Spring), Typescript, React, Node.js — Full Stack
								Development
							</li>
							<li>HTML & CSS</li>
						</ul>
					</div>

					{/* Personal Projects */}
					<div className="mb-8">
						<h3 className="text-xl font-semibold text-gray-800 mb-3">
							Personal Project Experience
						</h3>
						<p className="text-gray-700">My Big Day (wedding app)</p>
					</div>

					{/* Professional Experience */}
					<div className="mb-8">
						<h3 className="text-xl font-semibold text-gray-800 mb-3">
							Professional Experience
						</h3>

						{/* LNG Studios */}
						<div className="mb-6">
							<div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
								<h4 className="text-lg font-medium text-gray-800">
									Full Stack Developer, LNG Studios
								</h4>
								<span className="text-gray-600">July 2024 - present</span>
							</div>
							<p className="font-medium text-gray-700 mb-2">
								AI Automatic Portal Creator for Real Estate Marketing websites
							</p>
							<p className="text-gray-600 mb-2">
								m6.proxima-portals.com, password: m6
							</p>
							<ul className="text-gray-700 list-disc pl-5 space-y-1">
								<li>
									Full Stack Developer in 2 person team, using: NextJS, OpenAI
									API (document and image parsing and categorization, plus
									context creation), Replicate (image generation based off
									context creation) API, Tailwind CSS, S3 asset storage
								</li>
								<li>
									Deploys a marketing portal for a real estate agent's pre-sale
									property
								</li>
								<li>
									Agent can optionally provide fact sheets, marketing pdfs,
									floor plans, and the portal creator parses and classifies the
									PDF documents
								</li>
								<li>
									Next follows customizable theming and layouts inferred from
									the context provided above
								</li>
								<li>
									If no images or for information will call Replicate API for
									image generation for placeholder gallery images of interior,
									exterior, and amenities (with the ability to regenerate) using
									the context parsed from the documents
								</li>
								<li>
									Final product is agent portal template completely generated
									from context files (provided or not), and populates
									customizable sections for: Overview, Pricing, Floor plan,
									Gallery, FAQ, and Contact sections
								</li>
							</ul>

							<p className="font-medium text-gray-700 mt-4 mb-2">
								Proxima, Real Estate pre-sale and marketing platform
							</p>
							<p className="text-gray-600 mb-2">www.nikola.proximahq.io</p>
							<ul className="text-gray-700 list-disc pl-5 space-y-1">
								<li>Full stack developer and maintainer in 3 person team</li>
								<li>
									Stack: React with Typescript, fully custom CMS written in
									NodeJS, Ant Design + custom CSS
								</li>
								<li>
									Key developer in version 2 migration from old javascript
									codebase to new Typescript codebase
								</li>
								<li>
									Major developer in migration of old dated styled components to
									new Ant Design based components
								</li>
								<li>
									Made application responsive for many devices: mobile, tablet
									(landscape and portrait), desktop, and large touchscreens
									(landscape and portrait) - front end heavy
								</li>
							</ul>
						</div>

						{/* Intergalactic */}
						<div className="mb-6">
							<div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
								<h4 className="text-lg font-medium text-gray-800">
									Full Stack Developer, Intergalactic
								</h4>
								<span className="text-gray-600">January 2023 - July 2024</span>
							</div>

							<p className="font-medium text-gray-700 mb-2">
								South by South-West Web Scheduler and Event Management Platform,
								Sydney 2024 (SXSW)
							</p>
							<p className="text-gray-600 mb-2">www.sxsw.com</p>
							<ul className="text-gray-700 list-disc pl-5 space-y-1 mb-4">
								<li>
									Front end developer on a team of 4 for SXSW front end
									experience for Sydney 2024 event, utilizing data from API, and
									also helped with indexing and sorting using Meilisearch for
									event filtering
								</li>
								<li>
									Stack: Tailwind CSS, Drizzle ORM for data layer, Meilisearch
								</li>
							</ul>

							{/* More experience sections would continue here */}
						</div>

						{/* Previous experience summarized */}
						<div>
							<h4 className="text-lg font-medium text-gray-800 mb-2">
								Previous Experience
							</h4>
							<ul className="text-gray-700 list-disc pl-5 space-y-1">
								<li>
									Full Stack Developer, Momenta (October 2022 - December 2022)
								</li>
								<li>
									Full Stack Developer, Fintelics (December 2021 - October 2022)
								</li>
								<li>
									Full Stack Developer, EMME Innovations (July 2021 - November
									2021)
								</li>
								<li>
									Application Developer, MPM Engineering (December 2019 - April
									2021)
								</li>
								<li>
									Firmware Validation, Avigilon (co-op) (September 2018 - May
									2019)
								</li>
								<li>
									Linux Developer, Tantalus Systems (co-op) (September 2016 -
									May 2017)
								</li>
							</ul>
						</div>
					</div>

					{/* Education */}
					<div>
						<h3 className="text-xl font-semibold text-gray-800 mb-3">
							Education
						</h3>
						<div className="flex flex-col md:flex-row md:justify-between md:items-start">
							<div>
								<h4 className="text-lg font-medium text-gray-800">
									Simon Fraser University
								</h4>
								<p className="text-gray-700">
									B.Eng in Computer Engineering and Electronics
								</p>
								<p className="text-gray-600">
									Co-op placements: Tantalus Systems (8 months), Avigilon (8
									months)
								</p>
							</div>
							<span className="text-gray-600">2012-2019</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResumePage;
