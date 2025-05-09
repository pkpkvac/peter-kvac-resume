import SocialLinks from "../components/SocialLinks";

const AboutPage = () => {
	return (
		<div className="bg-gray-100 min-h-screen py-16">
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
					<h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

					{/* Profile Image - Circular */}
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							marginBottom: "2rem",
						}}
					>
						<img
							src="/peter.jpg"
							alt="Peter Kvac"
							style={{
								width: "350px",
								height: "350px",
								borderRadius: "50%",
								objectFit: "cover",
							}}
						/>
					</div>

					<div className="space-y-8 text-gray-700">
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

						<p className="text-lg">
							My goal is to leverage my technical skills and experience to
							contribute to a team that is building products that make a
							difference in the world.
						</p>

						<p className="text-lg">
							Outside of work, I enjoy hiking, lifting weights, and spending
							time with friends.
						</p>

						<h3 className="text-2xl font-semibold mb-4 text-center">
							Connect With Me
						</h3>
						<SocialLinks />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
