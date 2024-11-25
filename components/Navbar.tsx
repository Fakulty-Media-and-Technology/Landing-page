
import Image from 'next/image'
import React from 'react'
import { motion as m } from 'framer-motion'
import { manrope_600 } from '@/configs/fonts'

function Navbar() {
    return (
        <m.nav
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 1,
            }}
        >
            <a href='mailto:business@reeplay.app' target='_blank' className={`${manrope_600.className} flex-row gap-x-2 flex items-center`}>
                <span className='font-semibold text-sm md:text-base text-gray_white'>
                    Business Inquires
                </span>
                <Image src='/arrow-left.svg' width={15} height={11} alt='button' className='w-[15px] mt-1 h-[11px] object-contain' />

            </a>
        </m.nav>
    )
}

export default Navbar