'use client';

import Error from 'next/error';
export default function NotFound() {
    return <Error suppressHydrationWarning statusCode={404} />;
}
