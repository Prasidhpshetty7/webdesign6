import type { Project } from "../types/projects";

const languageColors = {
	React: { backgroundColour: "rgba(105, 96, 231, 0.5)" },
	Remix: { backgroundColour: "rgba(52, 52, 52, 0.5)" },
	HTML5: { backgroundColour: "rgba(227, 79, 38, 0.5)" },
	CSS3: { backgroundColour: "rgba(38, 77, 228, 0.5)" },
	JavaScript: { backgroundColour: "rgba(247, 223, 30, 0.5)" },
	TypeScript: { backgroundColour: "rgba(134, 122, 240, 0.5)" },
	Animation: { backgroundColour: "rgba(255, 179, 167, 0.5)" },
	WebDesign: { backgroundColour: "rgba(200, 191, 231, 0.5)" },
	UIUX: { backgroundColour: "rgba(255, 182, 193, 0.5)" },
	Responsive: { backgroundColour: "rgba(167, 230, 195, 0.5)" },
	DarkTheme: { backgroundColour: "rgba(80, 80, 80, 0.5)" },
	Typography: { backgroundColour: "rgba(173, 216, 255, 0.5)" },
};

export const languageBorders = (colour: string) => {
	const rgbaMatch = colour.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);

	if (rgbaMatch) {
		const [, r, g, b] = rgbaMatch;
		return {
			borderColor: `rgba(${r}, ${g}, ${b}, 0.7)`,
			color: `#000000`,
		};
	}

	return {
		borderColor: colour,
		color: colour,
	};
};

export const projects: Project[] = [
	{
		title: "macOS Web Clone",
		languages: [
			{ name: "React", ...languageColors.React },
			{ name: "TypeScript", ...languageColors.TypeScript },
			{ name: "CSS3", ...languageColors.CSS3 },
			{ name: "UI/UX", ...languageColors.UIUX },
		],
		description:
			"A web-based macOS clone featuring a realistic desktop environment with dock, windows, apps, and authentic Apple-style UI.",
		github: "https://github.com/Prasidhpshetty7",
		website: "https://os.prasidhshetty.in",
	},
	{
		title: "Animated Portfolio Experience",
		languages: [
			{ name: "React", ...languageColors.React },
			{ name: "Remix", ...languageColors.Remix },
			{ name: "Animation", ...languageColors.Animation },
			{ name: "Dark Theme", ...languageColors.DarkTheme },
		],
		description:
			"A visually stunning portfolio with smooth animations, modern dark theme, and responsive design built with React and Remix.",
		github: "https://github.com/Prasidhpshetty7",
		website: "https://4.prasidhshetty.in",
	},
	{
		title: "Web Design Project",
		languages: [
			{ name: "Web Design", ...languageColors.WebDesign },
			{ name: "UI/UX", ...languageColors.UIUX },
			{ name: "Typography", ...languageColors.Typography },
			{ name: "Responsive", ...languageColors.Responsive },
		],
		description:
			"A clean, minimal portfolio website showcasing web design skills with focus on typography, layout, and user experience.",
		github: "https://github.com/Prasidhpshetty7",
		website: "https://1.prasidhshetty.in",
	},
	{
		title: "Personal Developer Portfolio",
		languages: [
			{ name: "HTML5", ...languageColors.HTML5 },
			{ name: "CSS3", ...languageColors.CSS3 },
			{ name: "JavaScript", ...languageColors.JavaScript },
			{ name: "Responsive", ...languageColors.Responsive },
		],
		description:
			"Built with HTML5, CSS3, and vanilla JavaScript featuring smooth scroll animations, responsive design, and modern UI/UX.",
		github: "https://github.com/Prasidhpshetty7",
		website: "https://2.prasidhshetty.in",
	},
];
