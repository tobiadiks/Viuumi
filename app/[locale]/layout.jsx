// app/[locale]/layout.tsx

import React from 'react';
import { I18nProviderClient } from '../../locales/client';

export default function SubLayout({ params: { locale }, children }) {
    return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
}
