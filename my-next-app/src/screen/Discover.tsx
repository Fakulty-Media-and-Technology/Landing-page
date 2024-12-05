"useclient"

import Image from "next/image";
import { Dnote } from "@/config/data";
import ScrollImage from "@/app/scroll";

function Discover() {

  const Lists = [
    'Blog',
    'About us',
    'Business Inquries',
    'Invest',
    'Help'
    ]

    const Socials = [
      '/Vectorone.svg',
      '/Vector.svg',
      '/Vectorthree.svg'
  ]

    return(
        <>
        <div className= "w-[100%] h-[1022px] mx-auto mt-8 text-center bg-white max-sm:w-[372px]">
        <div className= "cont py-10 text-black w-[1068px] max-sm:h-[400px] mx-auto mt-8 max-sm:w-[327px] text-center">
        <div className="africa max-sm:py-10">
          <h2 className="font-extrabold text-[58px] h-[134px] max-sm:h-[54px] max-sm:leading-[32px]">Discover the Best of African Entertainment</h2>
          <p className="text-[16px] font-medium h-[58px] my-12 px-40 leading-[29px] relative max-sm:my-0 max-sm:leading-[25px] max-sm:px-8 max-sm:bottom-6">{Dnote}</p>
          <button className="bg-red py-5 text-white px-[48px] rounded-[100px] font-medium relative max-sm:top-20">Join the Waitlist Now
              <Image
                src={'/arrow.png'}
                width={24}
                height={24}
                alt="logo"
                className="inline ml-3"
              />
          </button>
          </div>
      </div>


          {/* scroll image */}
          <div className="container">
            <div className="check bg-white h-[120px] w-[1388px] relative ml-[-88px] top-14 z-10 rounded-[98%]"></div>
        <div className="scroll h-[432px] bg-blue">
            <ScrollImage />
        </div>
            <div className="heck bg-black h-[140px] w-[1390px] relative ml-[-80px] bottom-14 z-10 rounded-[90%]"></div>
        </div>


      {/* footer */}
        <div className="h-[350px] bg-black text-white max-sm:bottom-20 relative">
          <div className="h-[70px] pt-[90px] flex justify-between px-[48px] max-sm:px-0">

            <div className="w-[300px] h-[70px]">
            <Image
            src={'/Reeplay.png'}
            alt="Reeplay"
            width={144}
            height={48}
            />
            <p className="text-[12px] mr-12">Your Gateway to Africa’s Best Entertainment</p>
          </div>

          <div className="">
            <ul className="flex w-[552px] justify-between text-[14px] leading-[25px] font-medium relative max-sm:hidden">
              {Lists.map((list, index) => (
                <li key={index}>{list}</li>
              ))}
            </ul>
          </div>

          <div className="socials-container">
            {Socials.map((social, index) => (
               <Image
               src={social}
               key={index}
               alt="Reeplay"
               width={20}
               height={20}
               className={`inline ml-4 max-sm:ml-0 max-sm:mr-4${index === 1 ? 'second-item-style' : ''}`}
               />
            ))}
          </div> 
             
          </div>

        </div>

      </div>

        </>
    )
}

export default Discover;