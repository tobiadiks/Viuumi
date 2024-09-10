import OfferCard from '@/components/offer-card';
import { useI18n } from '@/locales/client';
import { Space_Grotesk, Roboto_Serif } from 'next/font/google';
import { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const robotoSerif = Roboto_Serif({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export default function SecondSection() {
    const [selectedTab, setSelectedTab] = useState('brand');
    const t = useI18n();

    return (
        <div className="flex flex-col items-center justify-center p-4 py-8 lg:p-24">
            <div className="flex max-w-lg flex-col items-center justify-center">
                <h1
                    className={`${spaceGrotesk.className}text-center text-sm  text-lighter-gray`}
                >
                    {t('landing.service.title')}
                </h1>
                <h2
                    className={`${spaceGrotesk.className} my-4 text-center text-light-gray`}
                >
                    {t('landing.service.description')}{' '}
                    <span className="text-brand-blue">
                        {t('landing.service.description_highlight')}
                    </span>
                </h2>
                <p
                    className={`${robotoSerif.className} text-center text-sm  text-lighter-gray`}
                >
                    {t('landing.service.sub_description')}
                </p>
            </div>

            <div className="relative mt-16">
                <div className="mx-auto grid max-w-sm grid-cols-2">
                    <button
                        onClick={() => setSelectedTab('brand')}
                        className={`w-full rounded-l-lg p-12 py-3 text-white transition-all duration-1000 ${selectedTab === 'brand' ? 'bg-brand-blue' : 'bg-gradient-to-r from-gradient-gray via-black to-black'}`}
                    >
                        {t('landing.service.tab.brand')}
                    </button>
                    <button
                        onClick={() => setSelectedTab('users')}
                        className={`w-full rounded-r-lg p-12 py-3 text-white transition-all duration-1000 ${selectedTab === 'users' ? 'bg-brand-blue' : 'bg-gradient-to-r from-black via-black to-gradient-gray'}`}
                    >
                        {t('landing.service.tab.users')}
                    </button>
                </div>
                {selectedTab === 'brand' && (
                    <Splide
                        options={{ arrows: false }}
                        className="absolute left-0 top-32 w-full pb-16 lg:hidden"
                    >
                        <SplideSlide>
                            <OfferCard
                                icon={'/storefront.svg'}
                                title={t('landing.service.brands.0.title')}
                                description={t('landing.service.brands.0.body')}
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <OfferCard
                                icon={'/chart-pie.svg'}
                                title={t('landing.service.brands.1.title')}
                                description={t('landing.service.brands.1.body')}
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <OfferCard
                                icon={'/wallet.svg'}
                                title={t('landing.service.brands.2.title')}
                                description={t('landing.service.brands.2.body')}
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <OfferCard
                                icon={'/share.svg'}
                                title={t('landing.service.brands.3.title')}
                                description={t('landing.service.brands.3.body')}
                            />
                        </SplideSlide>
                    </Splide>
                )}

                {selectedTab === 'brand' && (
                    <div className="mt-12 hidden  gap-4 lg:grid lg:grid-cols-4">
                        <OfferCard
                            icon={'/storefront.svg'}
                            title={t('landing.service.brands.0.title')}
                            description={t('landing.service.brands.0.body')}
                        />
                        <OfferCard
                            icon={'/chart-pie.svg'}
                            title={t('landing.service.brands.1.title')}
                            description={t('landing.service.brands.1.body')}
                        />
                        <OfferCard
                            icon={'/wallet.svg'}
                            title={t('landing.service.brands.2.title')}
                            description={t('landing.service.brands.2.body')}
                        />
                        <OfferCard
                            icon={'/share.svg'}
                            title={t('landing.service.brands.3.title')}
                            description={t('landing.service.brands.3.body')}
                        />
                    </div>
                )}
                {selectedTab === 'users' && (
                    <Splide
                        options={{ arrows: false }}
                        className="absolute left-0 top-32 w-full pb-16 lg:hidden"
                    >
                        <SplideSlide>
                            <OfferCard
                                icon={'/notification-on.svg'}
                                title={t('landing.service.users.0.title')}
                                description={t('landing.service.users.0.body')}
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <OfferCard
                                icon={'/send.svg'}
                                title={t('landing.service.users.1.title')}
                                description={t('landing.service.users.1.body')}
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <OfferCard
                                icon={'/star.svg'}
                                title={t('landing.service.users.2.title')}
                                description={t('landing.service.users.2.body')}
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <OfferCard
                                icon={'/diamond.svg'}
                                title={t('landing.service.users.3.title')}
                                description={t('landing.service.users.3.body')}
                            />
                        </SplideSlide>
                    </Splide>
                )}

                {selectedTab === 'users' && (
                    <div className="mt-12 hidden gap-4 lg:grid lg:grid-cols-4">
                        <OfferCard
                            icon={'/notification-on.svg'}
                            title={t('landing.service.users.0.title')}
                            description={t('landing.service.users.0.body')}
                        />
                        <OfferCard
                            icon={'/send.svg'}
                            title={t('landing.service.users.1.title')}
                            description={t('landing.service.users.1.body')}
                        />
                        <OfferCard
                            icon={'/star.svg'}
                            title={t('landing.service.users.2.title')}
                            description={t('landing.service.users.2.body')}
                        />
                        <OfferCard
                            icon={'/diamond.svg'}
                            title={t('landing.service.users.3.title')}
                            description={t('landing.service.users.3.body')}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
