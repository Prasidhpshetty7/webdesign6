"use client";

import { motion } from "framer-motion";
import type React from "react";
import "../../styles/sections.scss";
import { LinkPreview } from "../ui/link-preview";

const ANIMATION_PROPS = {
	initial: { y: 50, opacity: 0 },
	whileInView: { y: 0, opacity: 1 },
	viewport: { once: true },
	transition: {
		type: "spring" as const,
		stiffness: 100,
		damping: 10,
		mass: 1,
	},
} as const;

const About: React.FC = () => {
	return (
		<motion.div className="AboutContainer" {...ANIMATION_PROPS}>
			<div className="AboutContentContainer">
				<div className="AboutContent">
					<p className="AboutText">
						I'm a Web Designer and Full-Stack Developer passionate about building
						modern, visually engaging, and user-focused digital experiences. I
						specialize in creating responsive websites and scalable web applications
						that combine clean design with solid technical foundations. I work across
						the full development stack — from crafting intuitive frontend interfaces
						to building robust backend systems, APIs, and database architectures.
						Check out my{" "}
						<LinkPreview url="https://github.com/Prasidhpshetty7" className="hoverLink">
							<span id="github">GitHub</span>
						</LinkPreview>{" "}
						for my latest work, or connect with me on{" "}
						<LinkPreview
							url="https://www.linkedin.com/in/prasidh-shetty7/"
							className="hoverLink"
						>
							<span id="linkedin">LinkedIn</span>
						</LinkPreview>
						. I believe great digital products are built at the intersection of
						aesthetics, usability, and engineering.
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
