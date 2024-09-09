import { Inter } from 'next/font/google';
import '@splidejs/react-splide/css/skyblue';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: '',
    description: '',
    keywords: [],
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            style={{ scrollBehavior: 'smooth' }}
        >
            <body className={inter.className}>{children}</body>
        </html>
    );
}
