'use client';
import { useI18n } from '@/locales/client';
import { Space_Grotesk } from 'next/font/google';
import { useCallback, useEffect, useState } from 'react';

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const CountdownTimer = ({ targetDate, large = false }) => {
    const t = useI18n();
    const calculateTimeLeft = useCallback(() => {
        const difference = new Date(targetDate) - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 20)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 20),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }, [targetDate]);

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [calculateTimeLeft]);

    return (
        <div
            className={`flex  gap-8 text-off-white ${spaceGrotesk.className} `}
        >
            <div className="flex flex-col  items-center gap-[0.813rem] ">
                <div
                    className={`${large ? `h-[190px] w-[200px] rounded-[45px] text-[64px]` : `h-[64px] w-[74px] rounded-[20px] text-[22px]`} flex items-center justify-center bg-brand-gray p-4 text-center `}
                >
                    <span className=" font-bold">{timeLeft.days || 0}</span>
                </div>
                <span
                    className={`${large ? 'text-lg' : 'text-sm'} block font-bold capitalize text-gray-text`}
                >
                    {t('landing.timer.days')}
                </span>
            </div>
            <div className="flex flex-col  items-center gap-[0.813rem] ">
                <div
                    className={`${large ? `h-[190px] w-[200px] rounded-[45px] text-[64px]` : `h-[64px] w-[74px] rounded-[20px] text-[22px]`} flex items-center justify-center bg-brand-gray p-4 text-center `}
                >
                    <span className="font-bold">{timeLeft.hours || 0}</span>
                </div>
                <span
                    className={`${large ? 'text-lg' : 'text-sm'} block font-bold capitalize text-gray-text`}
                >
                    {t('landing.timer.hours')}
                </span>
            </div>
            <div className="flex flex-col  items-center gap-[0.813rem] ">
                <div
                    className={`${large ? `h-[190px] w-[200px] rounded-[45px] text-[64px]` : `h-[64px] w-[74px] rounded-[20px] text-[22px]`} flex items-center justify-center bg-brand-gray p-4 text-center `}
                >
                    <span className="font-bold">{timeLeft.minutes || 0}</span>
                </div>
                <span
                    className={`${large ? 'text-lg' : 'text-sm'} block font-bold capitalize text-gray-text`}
                >
                    {t('landing.timer.minutes')}
                </span>
            </div>
        </div>
    );
};

export default CountdownTimer;
