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
                            Churches, other Religious body or faith, media pros, and investors —launch your channel on Reeplay, the next-gen streaming platform! Join our rollout, get 1 month free for early adopters. Open to Nigeria and USA.</p>

                        <div
                            className='mt-8'>
                            <a target='_blank' href="https://airtable.com/apprDXoDC3xnhHED3/pagtDI0fzHtomhJ1S/form">
                                <AppButton className='px-12 md:px-10 py-[16px] md:py-[15px] rounded-[30px] text-base text-gray_white font-semibold' title='Apply for Early Access' bgColor='bg-bgRed' arrowLeft />
                            </a>
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
                            Exciting news for Nigeria and USA producers! Join the waitlist to be first in line for submissions when we open up for films, documentaries, and series.<br /> Enjoy early access and exclusive monetization benefits.
                        </p>

                        {/* {!showModal ? */}
                        <a target='_blank' href='https://airtable.com/apprDXoDC3xnhHED3/pagH8Xgy4JbYAPNCl/form'>
                            <button onClick={() => setShowModal(!showModal)} className={`${manrope_600.className} font-semibold mt-5 text-base border-b border-[#F3F3F3] pb-1 text-[#F69392]`}>Submit to Waitlist</button>
                        </a>

                    </div>
                </div>
            </Wrapper>

        </section>
    )
}

export default LaunchSection
