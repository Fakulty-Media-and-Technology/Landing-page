'use client'

import React, { useRef } from 'react'
import Wrapper from './Wrapper'
import { manrope_500 } from '@/configs/fonts'
import Link from 'next/link'
import Image from 'next/image'
import { motion as m, useInView } from 'framer-motion'


const Routes = [
    'Blog',
    'About Us',
    'Business Inquires',
    'Invest',
    'Help',
]

function Footer() {
    const ref = useRef(null);
    const isInView2 = useInView(ref, { once: true });

    return (
        <footer ref={ref} className='bg-black pt-16 lg:pt-28'>
            <Wrapper>
                {isInView2 && <div className='flex items-center mb-16'>

                    <div className='flex-1 justify-evenly flex flex-col md:flex-row relative mb-14 sm:mb-0'>
                        <div>
                            <div className="overflow-hidden">
                                <m.div
                                    initial={{
                                        x: -500,
                                        opacity: 0,
                                        scale: 0.5,
                                    }}
                                    animate={{
                                        x: 0,
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    transition={{
                                        duration: 1.5,
                                    }}
                                    className="overflow-hidden"
                                >
                                    <Link href='/'>
                                        <Image
                                            src='/logo.svg'
                                            alt="Reeplay logo"
                                            width={96}
                                            height={32}
                                            priority={true}
                                            className="object-contain cursor-pointer w-[120px] lg:w-[132px] xl:w-[147px]"
                                        />
                                    </Link>
                                </m.div>
                            </div>
                            <p className={`${manrope_500.className} mt-1.5 text-xs font-medium text-grey_800`}>Your Gateway to Africa's Best Entertainment</p>
                        </div>


                        <ul className='flex items-center justify-between w-[290px] absolute -bottom-20 sm:static md:w-[490px] lg:w-[552px] lg:mr-4'>
                            {Routes.map((route, i) => {
                                return (
                                    <li key={i} className=''>
                                        {/* <Link href={`/${route.toLowerCase()}`}> */}
                                        <span className={`${manrope_500.className} transition-all duration-200 cursor-pointer text-xs lg:text-sm font-medium text-white_2 hover:text-bgRed hover:scale-50`}>{route}</span>
                                        {/* </Link> */}
                                    </li>
                                )
                            })}
                        </ul>

                    </div>

                    <div className='flex gap-x-5 items-center'>
                        <m.button
                            initial={{ x: 500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.8, delay: 0.4 }}
                            className="">
                            <Image
                                src={'/insta.svg'}
                                alt='instagram icon'
                                width={24}
                                height={24}
                            />

                        </m.button>
                        <m.button
                            initial={{ x: 500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.8, delay: 0.5 }}
                            className="">
                            <Image
                                src={'/fb.svg'}
                                alt='instagram icon'
                                width={24}
                                height={24}
                            />
                        </m.button>
                        <m.button
                            initial={{ x: 500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.8, delay: 0.7 }}
                            className="inline-block">
                            <Image
                                src={'/x.svg'}
                                alt='instagram icon'
                                width={24}
                                height={24}
                            />
                        </m.button>

                    </div>

                </div>}


                {isInView2 && <div className='flex justify-between items-center border-t-[0.5px] border-black_2 pt-3'>
                    <button className={`${manrope_500} text-xs font-medium text-grey_800`}>Terms and policy</button>
                    <button className={`${manrope_500} text-xs font-medium text-grey_800`}>Privacy policy</button>
                </div>}
            </Wrapper>
        </footer>
    )
}

export default Footer