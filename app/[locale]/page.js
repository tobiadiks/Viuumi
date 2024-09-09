'use client';
// import { useI18n } from '@/locales/client';
import Hero from '@/pages/home/hero';
import SecondSection from '@/pages/home/second-section';
import Navbar from '@/components/navbar';

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <SecondSection />
        </>
    );
}
