export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Default root path requests to serve index.html
    if (url.pathname === "/") {
      return env.ASSETS.fetch(new Request(new URL("/index.html", request.url), request));
    }
    
    // Otherwise try to fetch the matching static asset (e.g. images)
    try {
      const response = await env.ASSETS.fetch(request);
      // Fallback to index.html if the asset doesn't exist (helpful for client-side routing, though here it can return 404)
      if (response.status === 404) {
        return new Response("Not Found", { status: 404 });
      }
      return response;
    } catch (err) {
      return new Response("Internal Server Error", { status: 500 });
    }
  },
};
