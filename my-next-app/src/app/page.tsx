import Image from "next/image";
import ScrollImage from './scroll'
import React, { useState } from 'react'

export default function Home() {

  const [showPopup, setshowPopup] = useState(false);
  const [popupPosition, setpopupPosition] = useState({ x:0, y:0});
  
  const handleClick = (e: { clientX: any; clientY: any; }) => {
    setshowPopup(true);
    setpopupPosition({ x: e.clientX,  y: e.clientY})
  }

  const handleHidePopup = () => {
    setshowPopup(false)
  }
  return (
    <>
    <div className="total-container bg-black h-[300vh]">
      <div className="navbar text-white flex items-center justify-between py-10 px-10">
        <div className="logo">
          <Image
            src={'/Reeplay.png'}
            width={144}
            height={48}
            alt="logo"
          />
        </div>
        
        <ul className="flex gap-4">
        <button className="bg-transparent">Business Inquires
      <Image
            src={'/arrow.png'}
            width={24}
            height={24}
            alt="logo"
            className="inline ml-3"
          />
      </button>
        </ul>
      </div>

      // first section
      <div className="africa text-white w-[1068px] h-[320px] mx-auto my-20 text-center">
      <h2 className="font-extrabold text-[58px] h-[134px]">Reeplay, Your Gateway to Africa’s Best Entertainment</h2>
      <p className="text-[16px] font-medium h-[58px]  my-12 px-40 leading-[29px]">With just 1$,  experience live and on-demand entertainment from Africa’s finest creators—all in one place. 
      Join us and experience a new era of entertainment.</p>
      <button className="bg-red py-5 px-[48px] rounded-[100px]">Get Started
      <Image
            src={'/arrow.png'}
            width={24}
            height={24}
            alt="logo"
            className="inline ml-3"
          />
      </button>
      </div>

      <div className="scroll h-[432px] bg-blue">
        <ScrollImage />
      </div>

      <div className="brands h-[561px] text-white my-28">
        <div className="mx-8">
          <p className="font-semibold text-[16px]">Brands that have joined joined the waitlist</p>
          <Image
          src={'/Brands.png'}
          width={1248}
          height={40}
          alt="Brands"
          className="py-6"
          />
        </div>

        <div className="beamong my-14 mx-10 flex gap-10">
          <h3 className="font-extrabold text-[42px] w-[1200px] h-[168px] leading-[56px]">Be Among the First brand to Showcase Your Content 
          on Reeplay!</h3>
          <div>
            <p className="font-medium text-[16px] leading-[29px] w-[580px] mb-7">Are you a creator, producer, or brand ready to share your TV content globally audience? Join Africa’s newest streaming platform and share your TV content with a global audience. Early waitlist access includes 100 free airtime hours for eligible creators. Don’t miss your chance in 2025!</p>

            <button>Join the wait list</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
