'use client'

import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll'
import Autoplay from 'embla-carousel-autoplay'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';


interface Props {
    delay: number;
    isPlay?: boolean;
    replaceComponent: React.JSX.Element;
    option?: EmblaOptionsType;
    stop?: boolean;
    handleFunc?: () => void;
}

function ImageCarousel({ delay, handleFunc, stop, option, isPlay, replaceComponent }: Props) {
    const [emblaRef, emblaApi] = useEmblaCarousel(option, [delay > 0 ? Autoplay({ delay }) : AutoScroll({ playOnInit: isPlay })])

    const logSlidesInViewOnce = useCallback((emblaApi: EmblaCarouselType) => {
        if (handleFunc) handleFunc();
        emblaApi.off('pointerDown', logSlidesInViewOnce)
    }, [])

    useEffect(() => {
        if (!emblaApi || stop === undefined) return
        if (!stop) {
            emblaApi?.plugins().autoplay.stop()
        } else {
            emblaApi?.plugins().autoplay.play()
        }

    }, [stop, emblaApi])

    useEffect(() => {
        if (emblaApi) emblaApi.on('pointerDown', logSlidesInViewOnce)
    }, [emblaApi])

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