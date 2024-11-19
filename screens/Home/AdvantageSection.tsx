'use client';

import Wrapper from '@/components/Wrapper'
import { AdvantageSec_Data } from '@/configs/data'
import { manrope_500, montserrat_700, montserrat_800 } from '@/configs/fonts'
import Image from 'next/image'
import React from 'react'
import { motion as m } from 'framer-motion'
import { fadeIn } from '@/utils/variants'

function AdvantageSection() {
    return (
        <section className='bg-white py-10 md:py-20 lg:pt-32 lg:pb-24'>
            <Wrapper>
                <m.h2
                    variants={fadeIn("up", 0.2)}
                    viewport={{ once: true, amount: 0.1 }}
                    initial="hidden"
                    whileInView={"show"}
                    className={`${montserrat_800.className} text-black lg:mb-5 font-extrabold text-2xl md:text-4xl lg:text-[42px] leading-[32px] md:leading-[44px] lg:leading-[56px] text-center`}>The Reeplay Advantage</m.h2>
                <div className='mt-3 space-y-10 mb-6 lg:gap-x-10 flex flex-wrap items-center justify-evenly'>
                    {AdvantageSec_Data.map((x, i) => {
                        return (
                            <m.div
                                variants={fadeIn("up", 0.5 * i)}
                                viewport={{ once: true, amount: 0.1 }}
                                initial="hidden"
                                whileInView={"show"}
                                key={i}
                                className='mt-8 w-[276px] flex flex-col items-center'>
                                <Image
                                    src={x.icon}
                                    width={64}
                                    height={64}
                                    alt='Icons'
                                    className='w-[54px] h-[54px]'
                                />
                                <h6 className={`${montserrat_700.className} text-black_1 text-base sm:text-lg md:text-xl text-center font-bold mt-2.5`}>{x.title}</h6>
                                <p className={`${manrope_500.className} mt-1 leading-5 font-medium text-center text-xs sm:text-sm md:text-base text-black_2`}>{x.description}</p>
                            </m.div>
                        )
                    })}
                </div>
            </Wrapper>

        </section>
    )
}

export default AdvantageSection