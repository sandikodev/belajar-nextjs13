// Middleware API Changes
// Next.js 13 improves the Middleware feature.
// Vercel's Middleware is code that executes before
// a request is processed on a site.

// There, you can modify an incoming request
// and add some logic before the request is processed.

// Now it is easier to set headers in the middleware.
// Plus, you can directly return a response from the middleware,
// without needing to rewrite or redirect.

// But for this, you need to enable the experimental.allowMiddlewareResponseBody
// configuration option inside next.config.js.

// To get started, you need to have middleware.js or middleware.ts
// at the root of your Next.js project.
// We'll use the TypeScript version
// and show how you can set a header to an incoming request:

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
    // Clone the request headers and set a new header
    // that will be sent to the server `header-for-the-server`
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("header-for-the-server", "hello server");

    // You can also set request headers in NextResponse.rewrite
    const response = NextResponse.next({
        request: {
            // New request headers
            headers: requestHeaders,
        },
    })

    // Set a new response header that you can inspect in the browser
    // `header-for-the-client`
    response.headers.set("header-for-the-client", "hello client")
    return response
}