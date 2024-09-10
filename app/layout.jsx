import { Inter } from 'next/font/google';
import '@splidejs/react-splide/css/skyblue';
import './globals.css';
import I18nProvider from './provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: '',
    description: '',
    keywords: [],
};

export default function RootLayout({ children }) {
    return (
        <I18nProvider>
            <html
                lang="en"
                suppressHydrationWarning
                style={{ scrollBehavior: 'smooth' }}
            >
                <body className={inter.className}>{children}</body>
            </html>
        </I18nProvider>
    );
}
