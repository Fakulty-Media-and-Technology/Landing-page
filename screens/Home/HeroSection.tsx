'use client'

import { AppButton, Carousel } from '@/components'
import Wrapper from '@/components/Wrapper'
import { manrope_500, manrope_600, montserrat_700, montserrat_800 } from '@/configs/fonts'
import React, { useRef, useState } from 'react';
import { motion as m, useInView } from 'framer-motion'
import Image from 'next/image';
import { container, fadeIn } from '@/utils/variants'



export const ImagesData = [
    '/girls.png',
    '/night.png',
    '/content-creators.png',
    '/lastPic.png',
]

const brandsImg = [
    '/tabLogo.svg',
    '/chineese.svg',
    '/kyriba.svg',
    '/petco.svg',
    '/rakuten.svg',
    '/kohls.svg',
    '/quantum.svg',
    '/quora.svg',
]

function HeroSection() {
    const [showModal, setShowModal] = useState<boolean>(false);
    const ref = useRef(null);
    const isInView2 = useInView(ref, { once: true });

    return (
        <main className='bg-black mt-5 pb-2 xl:pb-7 overflow-hidden'>
            <Wrapper className=''>
                <div className='items-center flex flex-col mt-5'>
                    <m.h5 initial={{ y: 100, opacity: 0, }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className={`${montserrat_800.className} font-extrabold md:max-w-[85%] text-[28px] md:text-4xl lg:text-[58px] leading-[37px] lg:leading-[67px] mb-7 text-center text-gray_white`}>
                        Reeplay, Your Gateway to Best Black Entertainment
                    </m.h5>

                    <m.p
                        initial={{ y: 100, opacity: 0, }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className={`${manrope_500.className} md:max-w-[68%] text-sm md:text-base text-white_2 font-medium text-center leading-[25px] md:leading-[29px]`}>With just 1$,  experience live and on-demand Black entertainment from the finest creators—all in one place.
                        Join us and experience a new era of entertainment.</m.p>

                    <m.div initial={{ y: 100, opacity: 0, }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.1 }} className='mt-8 md:mt-10 lg:mt-8'>
                        <>
                            {!showModal ?
                                <AppButton
                                    className='px-12 py-[15px] lg:py-5 lg:rounded-[40px] rounded-[30px] text-base text-gray_white font-semibold'
                                    title='Get Started'
                                    bgColor='bg-bgRed'
                                    arrowLeft
                                    onClick={() => setShowModal(!showModal)}
                                />
                                : <m.div
                                    initial={{ y: 40, opacity: 0, }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className='w-[296px] mt-5 border border-[#434343] rounded-[24px] bg-black px-5 py-3 pb-5'>

                                    <div onClick={() => setShowModal(!showModal)} className='ml-auto w-fit cursor-pointer'>
                                        <Image src='/close.svg' width={20} height={20} alt='close icon' />
                                    </div>

                                    <h6 className={`${montserrat_700.className} text-xl text-bgRed text-center my-1.5`}>Join the waitlist</h6>
                                    <p className={`${manrope_500.className} text-sm text-white_2 text-center`}>Scroll down to find waitlist category <br /> that fits your interest.</p>
                                </m.div>}
                        </>
                    </m.div>
                </div>
            </Wrapper>

            <div className='pointer-events-none mx-auto h-[280px] lg:h-[460px] flex flex-cols justify-center relative overflow-hidden mt-8 lg:mt-0'>
                <div style={{ alignSelf: 'center' }} className='bg-black absolute w-[130%]  h-[60px] lg:h-[220px] rounded-[310%] lg:-top-[140px] -top-[50px] z-50 pr-2 ' />

                {/* CAROUSEL HERE */}
                <div className='w-full z-0 embla'>
                    <Carousel
                        option={{ loop: false, align: 'start', dragFree: true }}
                        delay={4000}
                        replaceComponent={<>
                            {ImagesData.map((x, i) => {
                                const isLastItem = i === ImagesData.length - 1;
                                return (
                                    <div key={i}
                                        style={isLastItem ? { paddingRight: 0 } : {}}
                                        className='embla__slide sm:pr-5 lg:pr-10'
                                    >
                                        <Image
                                            src={x}
                                            alt='image carousel'
                                            width={540}
                                            height={432}
                                            className='w-[540px] xl:w-[100%] h-[452px] object-cover'
                                        />

                                    </div>
                                )
                            })}
                        </>}
                    />
                </div>

                <div style={{ alignSelf: 'center' }} className='bg-black absolute w-[130%] h-[60px] lg:h-[220px] rounded-[270%] -bottom-[25px] lg:-bottom-[155px] -ml-[2px] z-[99px]' />

            </div>

            <div
                className='mt-7 sm:mt-14 md:mt-24 lg:mt-28'
            >
                <Wrapper className='overflow-x-hidden'>
                    <div className='h-[35px] overflow-hidden mb-2 lg:mb-3'>
                        <h4
                            className={`${manrope_600.className} text-sm md:text-base font-semibold text-white_2`}>Brands that have joined the waitlist</h4>
                    </div>

                    <div>
                        <div className='w-full z-0 embla pointer-events-none'>
                            <Carousel
                                option={{ loop: true, align: 'start' }}
                                delay={0}
                                isPlay
                                replaceComponent={<>
                                    {brandsImg.map((x, i) => {
                                        return (
                                            <m.div key={i}
                                                initial={{ x: -80, opacity: 0, }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.2 * i }}
                                                className='embla__slide__sm pl-5 lg:pl-10'
                                            >
                                                <Image
                                                    src={x}
                                                    alt='image carousel'
                                                    width={86}
                                                    height={40}
                                                    className='w-[86px] h-[40px] object-contain'
                                                />
                                            </m.div>
                                        )
                                    })}
                                </>}
                            />
                        </div>

                    </div>


                    <div className='mt-10 mb-16 md:mt-12 lg:mt-16 flex flex-cols md:flex-row flex-wrap md:justify-between md:gap-x-10'>
                        <h2
                            className={`${montserrat_800.className} leading-[32px] md:leading-[48px] lg:leading-[56px] mt-5 w-full sm:mx-auto max-w-[95%] md:max-w-[600px] text-2xl md:text-3xl lg:text-[42px] text-gray_white`}>Be Among the first Brands to Broadcast Events
                            or Tv Shows on Reeplay!</h2>

                        <div
                            className='mt-5 w-full sm:mx-auto max-w-[99%] md:max-w-[600px]'>
                            <p className={`${manrope_500.className} leading-[25px] lg:leading-[29px] text-sm md:text-base font-medium text-white_2`}>
                                Are you a brand or creator, ready to Air your Reality TV Shows, Live concerts,
                                sports, podcast, weddings or other events to global audience? Join Reeplay <br />
                                and get early access  benefits like 100 free airtime hours for eligible creators.
                                Don't miss your chance in 2025!</p>


                            <a target='_blank' href="https://airtable.com/apprDXoDC3xnhHED3/pagkXCmtQOARn03fh/form">                                <button onClick={() => setShowModal(!showModal)} className={`${manrope_600.className} font-semibold mt-5 text-base border-b border-[#F3F3F3] pb-1 text-[#F69392]`}>Submit to Waitlist</button>
                            </a>
                        </div>
                    </div>
                </Wrapper>

            </div>

        </main>
    )
}

export default HeroSection