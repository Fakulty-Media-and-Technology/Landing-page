'use client'

import Wrapper from '@/components/Wrapper'
import React, { useState } from 'react'
import { motion as m } from 'framer-motion'
import { manrope_500, manrope_600, montserrat_700, montserrat_800 } from '@/configs/fonts'
import Image from 'next/image'
import { AppButton } from '@/components'
import { fadeIn } from '@/utils/variants'

function LaunchSection() {
    const [showModal, setShowModal] = useState<boolean>(false)

    return (
        <section className='bg-black py-10 md:py-20 lg:pt-32 xl:pt-36'>
            <Wrapper>
                <h2 className={`${montserrat_800.className} leading-[32px] md:leading-[48px] lg:leading-[56px] mt-5 w-full max-[768px]:max-w-[400px] md:max-w-[400px] lg:max-w-[600px] text-2xl md:text-3xl lg:text-[42px] text-gray_white`}>
                    Launch Your Own Live TV Channel on Reeplay
                </h2>
                <div className='mt-7 md:mt-5 lg:-mt-6 xl:-mt-16 min-[800px]:mt-1 flex flex-col md:flex-row-reverse items-center'>
                    <div
                        className='flex-1 flex flex-col items-end min-[800px]:-mt-16 '>
                        <Image
                            src='/man-glasses.png'
                            width={327}
                            height={216}
                            alt='man with glasses'
                            className='rounded-[24px] object-cover min-[800px]:w-[410px] min-[800px]:h-[290px] lg:w-full lg:h-[320px] xl:w-[600px] xl:h-[415px] overflow-hidden'
                        />
                    </div>
                    <div className='mt-6 md:mt-0 flex-1 flex flex-col items-start'>
                        <p
                            className={`${manrope_500.className} md:max-w-[90%] text-sm md:text-base text-white_2 font-medium leading-[25px] md:leading-[29px]`}>
                            Churches, media pros, and investors—launch your channel on Africa’s next-gen streaming platform! Join our 2025 rollout with 6 months free for early adopters. Reserve your spot today.</p>

                        <div
                            className='mt-8'>
                            <AppButton className='px-12 md:px-10 py-[16px] md:py-[15px] rounded-[30px] text-base text-gray_white font-semibold' title='Apply for Early Access' bgColor='bg-bgRed' arrowLeft />
                        </div>
                    </div>
                </div>


                <div className='mt-20 mb-6 md:mb-0 md:mt-24 lg:mt-32 flex flex-cols md:flex-row flex-wrap md:flex-nowrap md:justify-between md:gap-x-10'>
                    <h2
                        className={`${montserrat_800.className} leading-[32px] md:leading-[48px] lg:leading-[56px] mt-5 w-full mx-auto md:max-w-[600px] text-2xl md:text-3xl lg:text-[42px] text-gray_white`}>
                        Get Ready to Share Your Films on Our Platform!
                    </h2>

                    <div
                        className='mt-7 w-full mx-auto md:max-w-[600px]'>
                        <p className={`${manrope_500.className} leading-[29px] text-sm md:text-base font-medium text-white_2`}>
                            Exciting news for film producers! Join the waitlist to be first in line for submissions when we open up for films, documentaries, and series. Enjoy early access and exclusive monetization benefits.
                        </p>

                        {!showModal ?
                            <button onClick={() => setShowModal(!showModal)} className={`${manrope_600.className} font-semibold mt-5 text-base border-b border-[#F3F3F3] pb-1 text-[#F69392]`}>Join the Waitlist</button>
                            : <m.div
                                initial={{ y: 40, opacity: 0, }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className='w-[296px] mt-5 border border-[#434343] rounded-[24px] bg-black px-5 py-3 pb-5'>

                                <div onClick={() => setShowModal(!showModal)} className='ml-auto w-fit cursor-pointer'>
                                    <Image src='/close.svg' width={20} height={20} alt='close icon' />
                                </div>

                                <h6 className={`${montserrat_700.className} text-xl text-bgRed text-center my-1.5`}>To Join the waitlist</h6>
                                <p className={`${manrope_500.className} text-sm text-white_2 text-center`}>Contact a Reeplay licensed agency <br /> in your region.</p>
                            </m.div>}
                    </div>
                </div>
            </Wrapper>

        </section>
    )
}

export default LaunchSection