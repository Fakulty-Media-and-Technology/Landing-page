'use client'

import React, { useState } from 'react';
import { motion as m, useMotionValueEvent, useScroll } from 'framer-motion';
import Wrapper from './Wrapper';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';


function HeaderComp() {
    // Variables
    const [lastScroll, setLastScroll] = useState(0);
    const [scrollClass, setScrollClass] = useState('');


    //This function adds a class to the header
    //which hides the header when scrolling down and reveals it when scrolling up
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        // console.log("Page scroll: ", latest);
        const currentScroll = latest;

        if (currentScroll <= 0) {
            setScrollClass('');
        }

        if (currentScroll > lastScroll && scrollClass !== 'scroll-down') {
            setScrollClass('scroll-down');
        }

        if (currentScroll < lastScroll && scrollClass === 'scroll-down') {
            setScrollClass('scroll-up');
        }
        setLastScroll(currentScroll);
    })
    //fixed top-0 left-0 right-0 ${scrollClass}

    return (
        <header className={` bg-black transition-all duration-300 ease-in-out z-[25]`}>
            <Wrapper>
                <div className="flex justify-between items-center sm:mt-2 lg:pb-2 xl:pb-5">
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
                                duration: 1,
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
                                    className="object-contain cursor-pointer sm:w-[112px] md:w-[120px] lg:w-[132px] xl:w-[147px]"
                                />
                            </Link>
                        </m.div>
                    </div>


                    <Navbar />
                </div>
            </Wrapper>

        </header>
    )
}

export default HeaderComp