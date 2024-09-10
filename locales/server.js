'use client';

import { createI18nServer } from 'next-international/server';

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
    en: () => import('./en'),
    de: () => import('./de'),
    uk: () => import('./uk'),
    // Add more locales here
    // fr: () => import('./fr'),
});
