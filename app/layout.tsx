import type { Metadata, Viewport } from "next";
import "./globals.scss";

export const metadata: Metadata = {
	title: "Prasidh P Shetty",
	description: "Web Designer & Full-Stack Developer Portfolio",
	icons: {
		icon: "/favicon.ico",
	},
	manifest: "/manifest.json",
};

export const viewport: Viewport = {
	themeColor: "#FAF9F6",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />

			<body>{children}</body>
		</html>
	);
}
