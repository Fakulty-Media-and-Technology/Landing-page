'use client'

import Wrapper from '@/components/Wrapper'
import React from 'react'
import Size from '@/utils/useResponsiveSize';


function page() {
  return (
    <main className='bg-black mt-2 pb-2 overflow-hidden'>


      <Wrapper className=''>

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