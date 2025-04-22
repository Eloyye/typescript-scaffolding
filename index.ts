import pino from "pino";

const logger = pino();

Bun.serve({
	port: 3000,
	routes: {
		"/": (req) => {
			logger.info("Request received");
			return new Response("Hello World", {
				headers: {
					"Content-Type": "text/plain"
				}
			});
		}
	}
});
