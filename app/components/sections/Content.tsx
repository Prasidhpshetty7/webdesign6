import type React from "react";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import "../../styles/sections.scss";

const Content: React.FC = () => {
	return (
		<div className="content-container">
			<div id="about" className="section-container">
				<About />
			</div>
			<div id="projects" className="section-container">
				<Projects />
			</div>
			<div id="skills" className="section-container">
				<Skills />
			</div>
		</div>
	);
};

export default Content;
