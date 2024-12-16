'use client'

import Wrapper from '@/components/Wrapper'
import React from 'react'
import Size from '@/utils/useResponsiveSize';

// <div className='pointer-events-none hidden lg:flex mx-auto h-[280px] lg:h-[460px] flex-cols justify-center relative overflow-hidden mt-8 lg:mt-0'>
//   <div style={{ alignSelf: 'center' }} className='bg-black absolute w-[130%]  h-[60px] lg:h-[220px] rounded-[310%] lg:-top-[140px] -top-[50px] z-50 pr-2 ' />

//   {/* CAROUSEL HERE */}
//   <div className='w-full z-0 embla'>
//     <Carousel
//       option={{ loop: false, align: 'start', dragFree: true }}
//       delay={4000}
//       replaceComponent={<>
//         {ImagesData.map((x, i) => {
//           const isLastItem = i === ImagesData.length - 1;
//           return (
//             <div key={i}
//               style={isLastItem ? { paddingRight: 0 } : {}}
//               className='embla__slide sm:pr-5 lg:pr-10'
//             >
//               <Image
//                 src={x}
//                 alt='image carousel'
//                 width={540}
//                 height={432}
//                 className='w-[540px] xl:w-[100%] h-[452px] object-cover'
//               />

//             </div>
//           )
//         })}
//       </>}
//     />
//   </div>

//   <div style={{ alignSelf: 'center' }} className='bg-black absolute w-[130%] h-[60px] lg:h-[220px] rounded-[270%] -bottom-[25px] lg:-bottom-[155px] -ml-[2px] z-[99px]' />
// </div>
function page() {
  return (
    <main className='bg-black mt-2 pb-2 overflow-hidden'>


      <Wrapper className=''>
        {/* <div className='items-center flex flex-col my-5'>
          <m.h5 initial={{ y: 100, opacity: 0, }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className={`${montserrat_800.className} font-extrabold md:max-w-[85%] text-[28px] md:text-4xl lg:text-[58px] leading-[37px] lg:leading-[67px] mb-7 text-center text-gray_white`}>
            Join Reeplay Waitlist
          </m.h5>

          <m.p
            initial={{ y: 100, opacity: 0, }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className={`${manrope_500.className} -mt-5 md:max-w-[68%] text-sm md:text-base text-white_2 font-medium text-center leading-[25px] md:leading-[29px]`}>
            Always return to this page on same device to see your dashboard.</m.p>

          <m.p
            initial={{ y: 100, opacity: 0, }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className={`${manrope_500.className} -mt-5 md:max-w-[68%] text-sm md:text-base text-white_2 font-medium text-center leading-[25px] md:leading-[29px]`}>
            We value your privacy. No spam, promised.</m.p>
        </div> */}

        <div style={{
          height: Size.getHeight() * 0.8
        }} className='mt-7 pt-3 overflow-hidden flex flex-cols items-center justify-center'>
          <iframe
            src="/form.html"
            style={{ width: '100%', height: '100%', border: 'none', display: 'flex', alignItems: 'center', justifyItems: 'center' }}
            title="Embedded HTML"
          ></iframe>
        </div>
      </Wrapper>


    </main>
  )
}

export default page