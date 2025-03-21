import { MapPin, Mail, Linkedin, NotebookText, Github } from "lucide-react";
import React, { useState } from "react";

export default function App() {
	return (
		<>
			<div className="main">
				<div className="col left-col">
					<Links />
					<Experiences />
					<div>Other sections...</div>
				</div>
				<div className="col right-col">
					<AboutMe />
					<Projects />
					<div>Blogs...</div>
				</div>
			</div>
		</>
	);
}

function Links() {
	return (
		<div>
			<ul>
				<li>
					<a href="mailo:hridaykh@gmail.com" class="link"> <Mail size={"1em"} /> hridaykh@gmail.com </a>
				</li>
				<li>
					<a href="#" class="link"> <Linkedin size={"1em"} /> LinkedIn </a>
				</li>
				<li>
					<a href="#" class="link"> <Github size={"1em"} /> GitHub </a>
				</li>
				<li>
					<a href="#" class="link"> <NotebookText size={"1em"} /> Blogs </a>
				</li>
				<li>
					<a href="#" class="link"> <MapPin size={"1em"} /> India </a>
				</li>
			</ul>
		</div>
	);
}

function AboutMe() {
	return (<div>

		<h1 style={{ textDecoration: "none", color: "var(--prm)" }}> About Me </h1>
		<h6 style={{ textDecoration: "none", color: "var(--scd)" }}> Aspiring Software Engineer | UGEE Aspirant | Open to Internships </h6>
		<hr />

		<p style={{ color: "var(--text)", fontSize: "0.75em", fontFamily: "Trebuchet MS, sans-serif" }}>
			This portfolio highlights my journey in software development, focusing on coding best practices, algorithms, and system design. My work emphasizes problem-solving, hands-on learning, and building efficient solutions from concept to implementation. I'm eager to apply my skills through internships and collaborations. Let's innovate together!
		</p>

	</div>);

}

function Experiences() {
	const [isOpen, setIsOpen] = useState(true);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			{/* Dropdown Header */}
			<h1
				style={{ textDecoration: "none", color: "var(--prm)", cursor: "pointer" }}
				onClick={toggleDropdown}
			>
				{isOpen ? "▼ Experience" : "► Experience"}
			</h1>

			{/* Dropdown Content */}
			{isOpen && (
				<>
					<hr />
					<div>
						<div style={{ marginBottom: "1.5em" }}>
							<h4 style={{ color: "var(--prm)" }}>Software Developer Intern</h4>
							<h6 style={{ color: "var(--scd)" }}>
								Tech Company XYZ | May 2023 - Aug 2023
							</h6>
							<p
								style={{
									color: "var(--text)",
									fontSize: "0.75em",
									fontFamily: "Trebuchet MS, sans-serif",
								}}
							>
								- Developed and optimized React components for a real-time
								dashboard.
								<br />
								- Collaborated with the backend team to integrate RESTful APIs.
								<br />
								- Implemented unit tests, improving code reliability and coverage
								by 30%.
							</p>
						</div>
						<div style={{ marginBottom: "1.5em" }}>
							<h4 style={{ color: "var(--prm)" }}>Freelance Web Developer</h4>
							<h6 style={{ color: "var(--scd)" }}>
								Self-Employed | Jan 2023 - Apr 2023
							</h6>
							<p
								style={{
									color: "var(--text)",
									fontSize: "0.75em",
									fontFamily: "Trebuchet MS, sans-serif",
								}}
							>
								- Designed and deployed responsive websites for small businesses.
								<br />
								- Integrated payment gateways and third-party services.
								<br />
								- Ensured cross-browser compatibility and improved site
								performance.
							</p>
						</div>
						<div>
							<h4 style={{ color: "var(--prm)" }}>Open Source Contributor</h4>
							<h6 style={{ color: "var(--scd)" }}>
								Various Projects | 2022 - Present
							</h6>
							<p
								style={{
									color: "var(--text)",
									fontSize: "0.75em",
									fontFamily: "Trebuchet MS, sans-serif",
								}}
							>
								- Contributed to open-source projects, focusing on frontend and
								documentation.
								<br />
								- Reviewed and improved existing code for better readability.
								<br />
								- Helped onboard new contributors by creating clear,
								beginner-friendly guides.
							</p>
						</div>
					</div></>
			)}
		</div>
	);
}

function Projects() {
	const [isOpen, setIsOpen] = useState(true);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			{/* Dropdown Header */}
			<h1
				style={{ textDecoration: "none", color: "var(--prm)", cursor: "pointer" }}
				onClick={toggleDropdown}
			>
				{isOpen ? "▼ Projects" : "► Projects"}
			</h1>

			{/* Dropdown Content */}
			{isOpen && (
				<>
					<hr />
					<div>
						{/* Project 1 */}
						<div style={{ marginBottom: "1.5em", display: "flex", gap: "1em" }}>
							<img
								src="https://avatars.githubusercontent.com/u/93050582?v=4" // Replace with your project image URL
								alt="Project 1"
								style={{
									width: "4.5em",
									height: "5em",
									borderRadius: "0.25em",
									objectFit: "cover",
								}}
							/>
							<div>
								<h3 style={{ textDecoration: "none", color: "var(--prm)" }}> Project Title 1 </h3>
								<h6 style={{ textDecoration: "none", color: "var(--scd)", marginBottom: "0.5em" }}> A brief one-line description of the project. </h6>
								<br />
								<a href="#" class="link" style={{ fontSize: "1em" }}> <Github size={"0.8em"} /> GitHub Link Here </a>
							</div>
						</div>
						{/* Project 2 */}
						<div style={{ marginBottom: "1.5em", display: "flex", gap: "1em" }}>
							<img
								src="https://avatars.githubusercontent.com/u/93050582?v=4" // Replace with your project image URL
								alt="Project 1"
								style={{
									width: "4.5em",
									height: "5em",
									borderRadius: "0.25em",
									objectFit: "cover",
								}}
							/>
							<div>
								<h3 style={{ textDecoration: "none", color: "var(--prm)" }}> Project Title 2 </h3>
								<h6 style={{ textDecoration: "none", color: "var(--scd)", marginBottom: "0.5em" }}> A brief one-line description of the project. </h6>
								<br />
								<a href="#" class="link" style={{ fontSize: "1em" }}> <Github size={"0.8em"} /> GitHub Link Here </a>
							</div>
						</div>
						{/* Project 3 */}
						<div style={{ marginBottom: "1.5em", display: "flex", gap: "1em" }}>
							<img
								src="https://avatars.githubusercontent.com/u/93050582?v=4" // Replace with your project image URL
								alt="Project 1"
								style={{
									width: "4.5em",
									height: "5em",
									borderRadius: "0.25em",
									objectFit: "cover",
								}}
							/>
							<div>
								<h3 style={{ textDecoration: "none", color: "var(--prm)" }}> Project Title 3 </h3>
								<h6 style={{ textDecoration: "none", color: "var(--scd)", marginBottom: "0.5em" }}> A brief one-line description of the project. </h6>
								<br />
								<a href="#" class="link" style={{ fontSize: "1em" }}> <Github size={"0.8em"} /> GitHub Link Here </a>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

