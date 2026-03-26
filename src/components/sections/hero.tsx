import Image from 'next/image';
import { MapPin } from 'lucide-react';

import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import { HERO_CONTENT, FILE_URLS } from '@/lib/data';
const HeroSection = () => {

    return (
        <Container id="hero">
            <div className="flex flex-col gap-12 md:flex-row">
                {/* Image */}
                <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
                    <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">

                        <Image
                            unoptimized={true}
                            src={FILE_URLS.headShot}
                            alt="Headshot"
                            className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
                            style={{ objectFit: 'cover' }}
                        ></Image>
                        <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
                    </div>
                </div>

                {/* Content */}
                <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
                    <div className="flex flex-col gap-2">
                        <Typography variant="h1">
                            {HERO_CONTENT.heading}{' '}
                            <span className="inline-block animate-waving-hand">👋</span>
                        </Typography>
                        {HERO_CONTENT.bio.map((item, index) => (
                            <Typography key={index}>
                                {item.link ? (
                                    <>
                                        {item.text[0]}{' '}
                                        <a
                                            href={item.link.url}
                                            target="_blank"
                                            className="text-indigo-500 hover:underline"
                                        >
                                            {item.link.label}
                                        </a>
                                        {' '}{item.text[1]}
                                    </>
                                ) : (
                                    <>
                                        {item.text.map((textSegment, textIndex) => (
                                            textIndex % 2 === 0 ? (
                                                <span key={textIndex}>{textSegment}</span>
                                            ) : (
                                                <span key={textIndex} className="font-semibold">{textSegment}</span>
                                            )
                                        ))}
                                    </>
                                )}
                            </Typography>
                        ))}
                    </div>

                    {HERO_CONTENT.button && (
                        <a
                            href={HERO_CONTENT.button.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-full bg-gray-900 px-4 py-1.5 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300"
                        >
                            {HERO_CONTENT.button.label}
                        </a>
                    )}

                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2">
                            <MapPin className="stroke-gray-600" />
                            <Typography>{HERO_CONTENT.location}</Typography>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex h-6 w-6 items-center justify-center">
                                <span className="relative flex h-3 w-3">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                                </span>
                            </div>
                            <Typography>{HERO_CONTENT.availabilityStatus}</Typography>
                        </div>
                    </div>

                    <SocialIcons />
                </div>
            </div>
        </Container>
    );
};

export default HeroSection;
