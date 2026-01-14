"use client";

import { motion } from "framer-motion";
import type React from "react";
import "../../styles/sections.scss";

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

interface SkillCategory {
	title: string;
	skills: string[];
}

const skillCategories: SkillCategory[] = [
	{
		title: "Frontend Development",
		skills: ["HTML5", "CSS3", "JavaScript", "ReactJS", "TypeScript", "Tailwind CSS"],
	},
	{
		title: "Backend Development",
		skills: ["NodeJS", "ExpressJS", "REST APIs", "Authentication", "GraphQL"],
	},
	{
		title: "Databases",
		skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "SQLite", "Redis"],
	},
	{
		title: "Cloud & Deployment",
		skills: ["Docker", "CI/CD", "Netlify", "Vercel", "AWS"],
	},
	{
		title: "Tools & Workflow",
		skills: ["Git", "GitHub", "Linux", "Postman", "VS Code", "Figma"],
	},
	{
		title: "Development Practices",
		skills: ["Agile Methodologies", "Version Control", "Code Review", "Testing"],
	},
];

const Skills: React.FC = () => {
	return (
		<motion.div className="skills-container" {...ANIMATION_PROPS}>
			<h2 className="skills-title">Skills & Expertise</h2>
			<div className="skills-grid">
				{skillCategories.map((category, index) => (
					<motion.div
						key={category.title}
						className="skill-category"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: index * 0.1 }}
					>
						<h3 className="skill-category-title">{category.title}</h3>
						<div className="skill-tags">
							{category.skills.map((skill) => (
								<span key={skill} className="skill-tag">
									{skill}
								</span>
							))}
						</div>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};

export default Skills;
