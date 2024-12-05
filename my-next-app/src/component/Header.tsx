"useclient"

import Image from 'next/image'


function Header() {
    return (
        <>
          <div className='navbar'>
            
            <div className="logo">
              <Image 
              src={"/Reeplay.png"}
              alt='Reeplay'
              width={144}
              height={48}
              className='md:w-[94px]'
              />
            </div>


            <ul>
            <div>
              <button className='text-white text-[16px] sm:pb-2'>Business Inquries
              <Image 
              src={"/arrow.png"}
              alt='Reeplay'
              width={24}
              height={24}
              className='inline ml-3'
              />
              </button>
            </div>
            </ul>

            </div>
          
        </>
    )
}

export default Header;