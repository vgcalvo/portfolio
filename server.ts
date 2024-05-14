import { loadPage } from "./index.tsx";

Deno.serve(( _request: Request ) => {
	return new Response( loadPage(), {
		headers: {
			"Content-Type": "text/html; charset=utf-8"
		}
	} );
});