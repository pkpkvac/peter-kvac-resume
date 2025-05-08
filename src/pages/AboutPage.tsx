import SocialLinks from "../components/SocialLinks";

const AboutPage = () => {
	return (
		<div className="bg-gray-100 min-h-screen py-16">
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
					<h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

					<div className="space-y-4 text-gray-700">
						<p className="text-lg">
							I'm a Full Stack & DevOps Software Engineer based in Vancouver
							with experience in building modern web applications and cloud
							infrastructure. I specialize in AWS, Docker, CI/CD, and full-stack
							development with Java (Spring), TypeScript, React, and Node.js.
						</p>

						<p className="text-lg">
							With a background in Electronics and Computer Engineering, I bring
							a unique perspective to software development that combines
							technical expertise with practical problem-solving skills.
						</p>

						<p className="text-lg">
							I'm passionate about creating efficient, scalable solutions and
							continuously expanding my knowledge in the ever-evolving tech
							landscape.
						</p>

						<div className="mt-8 pt-6 border-t border-gray-200">
							<h3 className="text-xl font-semibold mb-4">
								Contact Information
							</h3>
							<p className="mb-2">
								<span className="font-medium">Email:</span>{" "}
								<a
									href="mailto:pkvac89@outlook.com"
									className="text-blue-600 hover:underline"
								>
									pkvac89@outlook.com
								</a>
							</p>
							<p className="mb-4">
								<span className="font-medium">Phone:</span>{" "}
								<a
									href="tel:+16044463529"
									className="text-blue-600 hover:underline"
								>
									(604) 446-3529
								</a>
							</p>

							<h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
							<SocialLinks />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
