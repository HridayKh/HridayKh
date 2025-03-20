export default function App() {
	return <>
		<HeroSection />
		
	</>;
}

function HeroSection() {
	return (
		<section className="flex flex-col-reverse md:flex-row items-center justify-between p-8 bg-gray-100">
			{/* Text Content */}
			<div className="md:w-1/2 text-center md:text-left">
				<h1 className="text-4xl font-bold mb-4">Your Catchy Headline</h1>
				<p className="text-lg mb-6">
					A brief description of your portfolio or services. Highlight what makes you stand out.
				</p>
				<a
					href="#projects"
					className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
				>
					View My Work
				</a>
			</div>

			{/* Image */}
			<div className="md:w-1/2 mb-8 md:mb-0">
				<img
					src="path-to-your-image.jpg"
					alt="Description of image"
					className="w-full h-auto object-cover fade-in"
				/>
			</div>
		</section>
	);
}

