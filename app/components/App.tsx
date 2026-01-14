import { useCallback, useEffect, useRef, useState } from "react";
import type { FoodTile, SnakeSegment } from "../types/types";
import LeftColumn from "./sections/LeftColumn";
import RightColumn from "./sections/RightColumn";
import BackgroundGrid from "./ui/BackgroundGrid";
import RootFooter from "./ui/RootFooter";
import SnakeGame from "./ui/SnakeGame";
import ThemeToggle from "./ui/ThemeToggle";
import "../styles/app.scss";

const App = () => {
	const rootRef = useRef<HTMLDivElement | null>(null);
	const [isSnakeActive, setIsSnakeActive] = useState(false);
	const [snakeSegments, setSnakeSegments] = useState<SnakeSegment[]>([]);
	const [foodTiles, setFoodTiles] = useState<FoodTile[]>([]);
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		// Default to light theme
		const isDark = savedTheme === "dark";
		setIsDarkMode(isDark);
		document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
		// Ensure light is set if no preference
		if (!savedTheme) {
			localStorage.setItem("theme", "light");
		}
	}, []);

	const handleThemeToggle = useCallback(() => {
		setIsDarkMode((prev) => {
			const newTheme = !prev;
			localStorage.setItem("theme", newTheme ? "dark" : "light");
			document.documentElement.setAttribute("data-theme", newTheme ? "dark" : "light");
			return newTheme;
		});
	}, []);

	const handleSnakeToggle = useCallback(() => {
		setIsSnakeActive((prev) => !prev);
	}, []);

	const handleSnakeUpdate = useCallback(
		(snake: SnakeSegment[], food: FoodTile[]) => {
			setSnakeSegments(snake);
			setFoodTiles(food);
		},
		[],
	);

	return (
		<div className="App" ref={rootRef}>
			<BackgroundGrid
				snakeSegments={snakeSegments}
				foodTiles={foodTiles}
				isSnakeActive={isSnakeActive}
			/>
			<SnakeGame isActive={isSnakeActive} onSnakeUpdate={handleSnakeUpdate} />
			<ThemeToggle isDark={isDarkMode} onToggle={handleThemeToggle} />
			<div className="FixedSection flex justify-center">
				<div className="container max-w-[100%] justify-center mx-auto">
					<LeftColumn
						isSnakeActive={isSnakeActive}
						onSnakeToggle={handleSnakeToggle}
					/>
					<RightColumn />
				</div>
			</div>
			<RootFooter />
		</div>
	);
};

export default App;
