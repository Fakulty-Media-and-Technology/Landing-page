'use client'

import React, { useRef } from 'react'
import Wrapper from './Wrapper'
import { manrope_500 } from '@/configs/fonts'
import Link from 'next/link'
import Image from 'next/image'
import { motion as m, useInView } from 'framer-motion'


const Routes = [
    { name: 'Blog', link: 'https://reeplay.substack.com' },
    { name: 'About Us', link: 'https://open.substack.com/pub/reeplay/p/about-reeplay?r=4tn22d&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true' },
    { name: 'Business Inquires', link: 'mailto:business@reeplay.app' },
    { name: 'Invest', link: 'mailto:invest@reeplay.app' },
    { name: 'Help', link: 'https://help.reeplay.app' },
]

function Footer() {

    return (
        <footer className='bg-black pt-16 lg:pt-28'>
            <Wrapper>
                <div className='flex items-center mb-16'>

                    <div className='flex-1 justify-evenly flex flex-col md:flex-row relative mb-14 sm:mb-0'>
                        <div>
                            <div className="overflow-hidden">
                                <div
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
                                </div>
                            </div>
                            <p className={`${manrope_500.className} mt-1.5 text-xs font-medium text-grey_800`}>Best Black Entertainment</p>
                        </div>


                        <ul className='flex items-center justify-between w-[290px] absolute -bottom-16 sm:static md:w-[430px] lg:w-[552px] md:mr-4'>
                            {Routes.map((route, i) => {
                                return (
                                    <li key={i} className=''>
                                        {/* <Link href={`/${route.toLowerCase()}`}> */}
                                        <a href={route.link} target='_blank'>
                                            <span className={`${manrope_500.className} transition-all duration-200 cursor-pointer text-xs lg:text-sm font-medium text-white_2 hover:text-bgRed hover:scale-50`}>{route.name}</span>
                                        </a>
                                        {/* </Link> */}
                                    </li>
                                )
                            })}
                        </ul>

                    </div>

                    <div className='flex gap-x-5 items-center max-[767px]:-mt-20'>
                        <a href='https://instagram.com/reeplayapp' target='_blank'>
                            <Image
                                src={'/insta.svg'}
                                alt='instagram icon'
                                width={16}
                                height={16}
                            />
                        </a>
                        <a href='https://www.linkedin.com/company/reeplayinc/' target='_blank'>
                            <Image
                                src={'/linkedIn.svg'}
                                alt='linkedIn icon'
                                width={16}
                                height={16}
                            />
                        </a>
                        <a href='https://facebook.com/reeplayapp' target='_blank'>
                            <Image
                                src={'/fb.svg'}
                                alt='faceebook icon'
                                width={16}
                                height={16}
                            />
                        </a>
                        <a href='https://twitter.com/reeplayapp' target='_blank'>
                            <Image
                                src={'/x.svg'}
                                alt='twitter icon'
                                width={16}
                                height={16}
                            />
                        </a>

                    </div>

                </div>


                <div className='flex justify-between items-center border-t-[0.5px] border-black_2 pt-3'>
                    <a href='https://open.substack.com/pub/reeplay/p/terms-and-conditions?r=4tn22d&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true' target='_blank' className={`${manrope_500} text-xs font-medium text-grey_800`}>Terms and policy</a>
                    <a href='https://open.substack.com/pub/reeplay/p/privacy-policy?r=4tn22d&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true' target='_blank' className={`${manrope_500} text-xs font-medium text-grey_800`}>Privacy policy</a>
                </div>
            </Wrapper>
        </footer>
    )
}

export default Footer