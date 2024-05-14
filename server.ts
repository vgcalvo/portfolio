import { loadPage } from "./index.tsx";

Deno.serve(async (_request: Request) => {
	try {
		const indexPattern = new URLPattern({ pathname: "/" });
		const stylePattern = new URLPattern({ pathname: "/index.css" });

		if (stylePattern.test(_request.url)) {
			const file = await Deno.open("index.css");

			return new Response(file.readable);
		} else if (indexPattern.test(_request.url)) {
			return new Response(loadPage(), {
				headers: {
					"Content-Type": "text/html; charset=utf-8",
				},
			});
		} else {
			return new Response("404 Not Found", { status: 404 });
		}
	} catch {
		return new Response("500 Internal Server Error", { status: 500 });
	}
});
