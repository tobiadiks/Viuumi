import { Roboto_Serif } from 'next/font/google';
import '@splidejs/react-splide/css/skyblue';
import './globals.css';

const robotoSerif = Roboto_Serif({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

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
            <body className={robotoSerif.className}>{children}</body>
        </html>
    );
}
