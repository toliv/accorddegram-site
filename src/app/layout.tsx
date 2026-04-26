import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const splineSansMono = localFont({
	src: "../../public/fonts/SplineSansMono-VariableFont_wght.ttf",
	variable: "--font-spline-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Accord de Gram",
	description: "Music direct from Brooklyn NY",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
			</head>
			<body className={`${splineSansMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
