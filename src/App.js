import Blog from "./components/sections/Blog/Blog";
import DoesIt from "./components/sections/DoesIt/DoesIt";
import Footer from "./components/sections/Footer/Footer";
import Hero from "./components/sections/Hero/Hero";
import Partners from "./components/sections/Partners/Partners";
import Solutions from "./components/sections/Solutions/Solutions";
import StartBuild from "./components/sections/StartBuild/StartBuild";

function App() {
	return (
		<div>
			<Hero />
			<Solutions />
			<StartBuild />
			<DoesIt />
			<Partners />
			<Blog />
			<Footer />
		</div>
	);
}

export default App;
