import { MapPin, Mail, Linkedin, NotebookText, Github } from "lucide-react"; // ✅ Fixed import

export default function App() {
	return (
		<>
			<div class="main">
				<div class="col">
					<Links />
					<div> Item 2 </div>
					<div> Item 3 </div>
				</div>
				<div class="col">
					<AboutMe />
					<div> Item B </div>
					<div> Item C </div>
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

		<p style={{ color: "var(--text)", fontSize: "0.75em" }}>
			This portfolio highlights my journey in software development, focusing on coding best practices, algorithms, and system design. My work emphasizes problem-solving, hands-on learning, and building efficient solutions from concept to implementation. I'm eager to apply my skills through internships and collaborations. Let's innovate together!
		</p>

	</div>);

}
