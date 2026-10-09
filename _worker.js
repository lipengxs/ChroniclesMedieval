// Permanently retire withdrawn assets before any static-asset lookup.
export default {
    async fetch(request, env) {
        let path;
        try {
            path = decodeURIComponent(new URL(request.url).pathname);
        } catch (_) {
            return new Response('Invalid path', { status: 400 });
        }
        const retired = path.startsWith('/static/images/chronicles/') ||
            ['/static/logo.png', '/static/favicon.ico', '/favicon.ico', '/ads.txt'].includes(path);
        if (retired) {
            return new Response(request.method === 'HEAD' ? null : 'This resource has been permanently removed.\n', {
                status: 410,
                headers: {
                    'Content-Type': 'text/plain; charset=utf-8',
                    'Cache-Control': 'no-store, max-age=0',
                    'X-Content-Type-Options': 'nosniff',
                    'X-Robots-Tag': 'noindex'
                }
            });
        }
        return env.ASSETS.fetch(request);
    }
};
