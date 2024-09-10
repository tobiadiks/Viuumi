/* eslint-disable react/no-children-prop */
import Image from 'next/image';
import { useState } from 'react';
import CountdownTimer from '@/components/countdown-timer';
import Button from '@/components/button';
import IconContainer from '@/components/icon-container';
import { useI18n } from '@/locales/client';
import { Space_Grotesk, Roboto_Serif } from 'next/font/google';

// Initialize fonts
const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const robotoSerif = Roboto_Serif({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export default function Hero() {
    const t = useI18n();
    const [video, setVideo] = useState(false);
    // const [form, setForm] = useState(false);

    const toggleVideo = () => {
        setVideo((prev) => !prev);
    };

    // const join = () => {
    //     setForm(true);
    // };

    return (
        <div
            className=" bg-gray-text"
            style={{
                background:
                    'linear-gradient(180deg, #000000 -0.45%, #666666 99.55%)',
            }}
        >
            <div className="grid grid-cols-1 bg-[url('/bg-grid.svg')] bg-center bg-repeat lg:grid-cols-3 lg:bg-cover lg:pr-4">
                <div
                    className={`bg-[url('/mobile-ellipse.svg')] bg-cover bg-bottom bg-no-repeat text-white lg:col-span-2 lg:bg-[url('/desktop-ellipse.svg')] lg:bg-center lg:py-0 `}
                >
                    <div className="relative z-20 w-full px-4 pt-16 lg:px-8 lg:pt-16">
                        <div className="flex flex-col space-y-0 text-center text-2xl font-bold leading-10 lg:flex-row lg:space-x-4 lg:text-left lg:text-5xl">
                            <div>{t('landing.hero.title')} </div>
                            <div
                                className={`inline-flex flex-col items-center gap-1  text-5xl text-brand-blue lg:text-5xl ${spaceGrotesk.className}`}
                            >
                                <span>{t('landing.hero.title_highlight')}</span>
                                <Image
                                    alt="line"
                                    src="/line.svg"
                                    height={100}
                                    width={100}
                                />
                            </div>
                        </div>
                        <p
                            className={`leading-16  mt-8 text-center text-sm  font-light lg:w-3/4 lg:text-left lg:text-sm ${robotoSerif.className}`}
                        >
                            {t('landing.hero.description')}
                        </p>
                        <div className="grid grid-cols-2  gap-4 pt-8 lg:w-1/2 ">
                            <Button
                                color="primary"
                                children={t('landing.hero.join_waitlist')}
                            />
                            <Button
                                playButton
                                onClick={() => toggleVideo()}
                                children={t('landing.hero.watch_video')}
                            />
                        </div>
                        <div className="flex justify-center pt-10 lg:justify-start">
                            <CountdownTimer />
                        </div>
                        <div className="mb-32 flex items-center justify-center gap-4 pt-8 lg:justify-start">
                            <IconContainer icon="/facebook.svg" />
                            <IconContainer icon="/instagram.svg" />
                            <IconContainer icon="/youtube.svg" />
                            <IconContainer icon="/whatsapp.svg" />
                        </div>
                    </div>
                </div>

                {/* Changed className from flex to grid adjustment */}
                <div className="image-container relative flex h-full items-end justify-center pt-20 lg:justify-end">
                    {video ? (
                        <Image
                            className=""
                            alt="video"
                            src="/video.svg"
                            width={700}
                            height={700}
                        />
                    ) : (
                        <Image
                            className=""
                            alt="phone"
                            src="/hero-phone.svg"
                            width={600}
                            height={600}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
