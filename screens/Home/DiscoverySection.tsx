'use client'

import Wrapper from '@/components/Wrapper'
import { fadeIn } from '@/utils/variants'
import React, { useEffect, useState } from 'react';
import { motion as m } from 'framer-motion'
import { manrope_500, montserrat_800 } from '@/configs/fonts';
import { AppButton, Carousel } from '@/components';
import { ImagesData } from './HeroSection';
import Image from 'next/image';
import ReactPlayer from "react-player";
import { usePathname } from 'next/navigation';


function DiscoverySection() {
    const [playingIndexes, setPlayingIndexes] = useState<number[]>([]);
    const [routeUrl, setRouteUrl] = useState<string>('/');
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window !== "undefined") {
            setRouteUrl(`${window.location.href}${pathname}`);
        }
    }, []);

    return (
        <section className='bg-white pt-10 md:pt-20 lg:pt-28 '>
            <Wrapper>
                <m.h2
                    variants={fadeIn("up", 0.2)}
                    viewport={{ once: true, amount: 0.1 }}
                    initial="hidden"
                    whileInView={"show"}
                    className={`${montserrat_800.className} mx-auto leading-[32px] md:leading-[48px] lg:leading-[56px] mt-4 w-full max-[768px]:max-w-[400px] md:max-w-[400px] lg:max-w-[600px] text-2xl md:text-3xl lg:text-[42px] text-black_1 text-center`}>
                    Gambia, are you ready?<br /> Join Reeplay Now.
                </m.h2>
                <m.p
                    variants={fadeIn("up", 0.3)}
                    viewport={{ once: true, amount: 0.1 }}
                    initial="hidden"
                    whileInView={"show"}
                    className={`${manrope_500.className} mt-5 mx-auto md:max-w-[90%] lg:max-w-[80%] xl:max-w-[67%] text-sm md:text-base text-black_2 font-medium text-center leading-[25px] md:leading-[29px]`}>
                    Reeplay is bringing The Combatant — a survival reality show where nothing is given, and everything is earned.<br />
                    Contestants fight to endure; Brands connect with culture; Audiences don’t just watch — they influence the outcome.<br /> We invite contestants and partners to take part in a groundbreaking African original built for the world.

                <m.div
                    variants={fadeIn("up", 0.5)}
                    viewport={{ once: true, amount: 0.1 }}
                    initial="hidden"
                    whileInView={"show"}
                    className='my-7 md:my-8'>
                    {/* <a href={`${routeUrl || '/'}waitlist`} target='_blank'> */}
                    <a href='mailto:sahelfilms@gmail.com' target='_blank'>
                        <AppButton className='mx-auto px-10 md:px-10 py-[16px] md:py-[16px] rounded-[30px] text-base text-gray_white font-semibold' title='Submit Your Interest' bgColor='bg-bgRed' arrowLeft />
                    </a>
                </m.div>
            </Wrapper>


            <div className='mx-auto h-[280px] -mb-1 lg:h-[460px] flex flex-cols justify-center relative overflow-hidden'>
                <div style={{ alignSelf: 'center' }} className='bg-white absolute w-[110%] h-[70px] md:h-[100px] lg:h-[220px] rounded-[810%] lg:-top-[140px] -top-[50px] md:-top-[70px] z-50 pr-2 ' />

                {/* CAROUSEL HERE */}
                <div className='pointer-events-none w-full z-0 bg-white embla'>
                    <Carousel
                        option={{ loop: false, align: 'start', dragFree: true }}
                        delay={4000}
                        stop={playingIndexes.length === 0}
                        handleFunc={() => setPlayingIndexes([])}
                        replaceComponent={<>
                            {ImagesData.map((x, i) => {
                                const isLastItem = i === ImagesData.length - 1
                                return (
                                    <CarouselBox isLastItem={isLastItem} key={i} x={x} i={i} playingIndexes={playingIndexes} setPlayingIndexes={setPlayingIndexes} />
                                )
                            })}
                        </>}
                    />
                </div>

                <div style={{ alignSelf: 'center' }} className='bg-black absolute w-[110%] h-[60px] lg:h-[220px] rounded-[570%] -bottom-[25px] lg:-bottom-[150px] -ml-[2px] z-[99px]' />

            </div>
        </section>
    )
}

export default DiscoverySection


interface BoxProps {
    x: string;
    i: number;
    playingIndexes: number[];
    setPlayingIndexes: React.Dispatch<React.SetStateAction<number[]>>;
    isLastItem: boolean
}

export const CarouselBox = ({ isLastItem, x, i, playingIndexes, setPlayingIndexes }: BoxProps) => {
    // const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const isPlaying = playingIndexes.includes(i);
    const [mute, setMute] = useState<boolean>(true);
    const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false);

    function handleVideo(query: number) {
        if (playingIndexes.includes(query)) {
            // Pause the video
            setPlayingIndexes([]);
        } else {
            // Play the video
            setPlayingIndexes([query]);
        }
    }


    useEffect(() => {
        // setIsPlaying(playingIndexes.includes(i));
    }, [playingIndexes, i])

    return (
        <div
            key={i}
            style={isLastItem ? { paddingRight: 0 } : {}}
            className='embla__slide relative sm:pr-5 lg:pr-10'
        >
            {!isPlaying && <Image
                src={x}
                alt='image carousel'
                width={540}
                height={432}
                className='w-[540px] xl:w-[100%] h-[452px] object-cover'
            />
            }
            {!isPlaying && <div className='absolute top-0 z-10 w-full h-[60%] lg:h-full flex items-center justify-center'>
                <button className='w-fit shadow-2xl'>
                    <Image
                        src='/playIcon.svg'
                        width={48}
                        height={48}
                        alt='Play Icon'
                    />
                </button>
            </div>}
            {isPlaying && <div className='absolute top-0 w-full h-[60%] min-h-[505px] lg:pr-10 lg:h-full z-50'>

                <div className="w-full h-[60%] lg:h-full relative mx-auto">
                    <div className='w-full h-full absolute flex items-center justify-center'>

                        <ReactPlayer
                            style={{ zIndex: 10 }}
                            playing={isPlaying}
                            muted={mute}
                            controls={false}
                            // onProgress={e => }
                            url="https://taron-media-output.s3.amazonaws.com/chat/messages/MP4+Video+-35427-407130886_small.mp4"
                            width="100%" // Set to 100%
                            height="100%"
                            volume={1}
                            onEnded={() => [handleVideo(i)]}
                            onReady={() => setIsPlayerReady(true)}
                        />
                    </div>

                    {/* {isPlayerReady && ( */}
                    {/* <Image
                src={x}
                alt=""
                width={Size.calcWidth(100)}
                height={Size.calcHeight(100)}
                className="w-full h-full absolute object-cover"
                style={{
                    display: !isPlaying && isPlayerReady ? "inline" : "none",
                }}
            />

            {!isPlayerReady && (
                <div className="mt-5 flex w-full h-full items-center justify-center gap-x-3 absolute z-40">
                    <span
                        className={`${manrope_500.className} text-sm md:text-base lg:text-lg text-white ml-20  -mr-24 mb-2.5`}
                    >
                        Waiting for connection
                    </span>
                    <div className="overflow-hidden w-50 h-50">
                        <Lottie
                            animationData={Loading}
                            loop
                            size={10}
                            style={{ width: 235, height: 235, marginRight: 5 }}
                        />
                    </div>
                </div>
            )} */}
                    {/* )} */}
                    <div className="bg-gradient-to-t from-[#000]/20 bottom-0 to-transparent absolute w-full h-full z-30" />
                    {/* <div className="bg-gradient-to-b from-[#000]/50 to-[#000]/0 absolute bottom-0 w-full h-full z-30" /> */}
                    {isPlayerReady && (
                        <div className=" pb-3 px-10 flex flex-col absolute z-20 top-0 w-full h-full items-center justify-center">


                            <div className="flex flex-1 mt-28 items-center justify-center">
                                <button
                                    style={{ display: isPlaying ? "none" : "inline" }}
                                    onClick={(e) => handleVideo(i)}
                                >
                                    <Image
                                        src="/playIcon.svg"
                                        alt=""
                                        width={30}
                                        height={30}
                                        className=" object-cover"
                                    />
                                </button>
                            </div>

                            <div
                                style={{ alignSelf: "flex-start" }}
                                className="flex mb-16 gap-x-2"
                                onClick={() => setMute(false)}
                            >
                                <Image
                                    src="/unmute.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                    className="object-contain rounded-full"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>}

        </div>
    )
}
