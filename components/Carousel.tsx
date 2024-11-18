'use client'

import React, { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll'
import Autoplay from 'embla-carousel-autoplay'
import { EmblaOptionsType, OptionsHandlerType } from 'embla-carousel';


interface Props {
    delay: number;
    isPlay?: boolean;
    replaceComponent: React.JSX.Element;
    option?: EmblaOptionsType
}

function ImageCarousel({ delay, option, isPlay, replaceComponent }: Props) {
    const [emblaRef, emblaApi] = useEmblaCarousel(option, [delay > 0 ? Autoplay({ delay }) : AutoScroll({ playOnInit: isPlay })])


    return (
        <div className="embla__viewport flex flex-col justify-center" ref={emblaRef}>
            <div
                className="flex"
            >
                {replaceComponent}
            </div>
        </div>
    )
}

export default ImageCarousel