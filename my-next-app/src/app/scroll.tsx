"use client"

import React from 'react';
import Image from 'next/image'

function ScrollImage(){
    
    const images = [
        '/night-bar.png',
        '/content-creator.png',
        '/advanced-mobile.png',
        '/field.png',
        '/hands-up.png',
    ]
    return (
        <>
        <div className='image-scroller'>
            {images.map((image, index) => (
                <Image
                key={index}
                src={image}
                width={540}
                height={432}
                alt={`image ${index + 1}`}
                className="image"
                />
            ))}
        </div>
        </>
    )
}

export default ScrollImage;