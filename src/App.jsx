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
                    <div> Item A </div>
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
            <ul style={{ listStyle: "none", padding: 0 }}>
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
