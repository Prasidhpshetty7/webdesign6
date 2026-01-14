"use client";

import type React from "react";
import { motion } from "framer-motion";
import "../../styles/components.scss";

interface ThemeToggleProps {
	isDark: boolean;
	onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
	return (
		<motion.button
			className="theme-toggle-btn"
			onClick={onToggle}
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
			title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
			aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
		>
			<motion.svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				initial={false}
				animate={{ rotate: isDark ? 180 : 0 }}
				transition={{ duration: 0.4, ease: "easeInOut" }}
			>
				{isDark ? (
					<>
						{/* Sun icon */}
						<circle cx="12" cy="12" r="5" />
						<line x1="12" y1="1" x2="12" y2="3" />
						<line x1="12" y1="21" x2="12" y2="23" />
						<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
						<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
						<line x1="1" y1="12" x2="3" y2="12" />
						<line x1="21" y1="12" x2="23" y2="12" />
						<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
						<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
					</>
				) : (
					<>
						{/* Moon icon */}
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
					</>
				)}
			</motion.svg>
		</motion.button>
	);
};

export default ThemeToggle;
