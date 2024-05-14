import render from 'preact-render-to-string';

const App = () => {
	return <html>
		<head>
			<meta charset="UTF-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			<style>{`
				:root {
					color-scheme: light dark;
					
					@media (prefers-color-scheme: dark){
						--theme-color: black;
						--theme-font-color: white;
					}

					@media (prefers-color-scheme: light){
						--theme-color: white;
						--theme-font-color: black;
					}
				}
				body {
					background-color: var(--theme-color);
					color: var(--theme-font-color);
					font-family: ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
				}
				#hero-welcome {
					font-size: 2.5rem;
					margin: auto;
					max-width: 50rem;
					margin-top: 5rem;
					width: 87.5%;
				}
			`}</style>
		</head>
		<body>
			<div id="hero-welcome">Hello, World.</div>
		</body>
	</html>
}

export function loadPage(){
	return `
		<!DOCTYPE html>
		${render( <App/> )}
	`
}