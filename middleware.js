// middleware.ts
import { createI18nMiddleware } from 'next-international/middleware';

const I18nMiddleware = createI18nMiddleware({
    locales: ['en', 'de', 'uk'],
    defaultLocale: 'en',
    urlMappingStrategy: 'rewrite',
});

export function middleware(request) {
    // eslint-disable-next-line no-console
    console.log(request.nextUrl.pathname);
    // Exclude image routes
    if (
        request.nextUrl.pathname.startsWith('/_next/image') ||
        request.nextUrl.pathname.startsWith('/images')
    ) {
        return;
    }

    return I18nMiddleware(request);
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!.+\\.[\\w]+$|_next).*)',
        '/',
        '/(api|trpc)(.*)',
        '/favicon.ico',
    ],
};
