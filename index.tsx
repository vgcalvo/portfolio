import render from "preact-render-to-string";

const App = () => {
	return (
		<html>
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link href="index.css" rel="stylesheet"></link>
			</head>
			<body>
				<div id="hero-welcome">Hello, World.</div>
			</body>
		</html>
	);
};

export function loadPage() {
	return `
		<!DOCTYPE html>
		${render(<App />)}
	`;
}
