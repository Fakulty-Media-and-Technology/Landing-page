"use client"
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
    <div className="total-container">
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

    {/* first section*/} 
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

      {/* image carousel */}
      <div className="scroll h-[432px] bg-blue">
        <ScrollImage />
      </div>

      <div className="brands h-[400px] text-white my-28">
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

        {/* be among part */}
        <div className="beamong my-14 mx-10 flex gap-10">
          <h3 className="font-extrabold text-[42px] w-[1200px] h-[168px] leading-[56px]">Be Among the First brand to Showcase Your Content 
          on Reeplay!</h3>
          <div>
            <p className="font-medium text-[16px] leading-[29px] w-[580px] mb-7">Are you a creator, producer, or brand ready to share your TV content globally audience? Join Africa’s newest streaming platform and share your TV content with a global audience. Early waitlist access includes 100 free airtime hours for eligible creators. Don’t miss your chance in 2025!</p>

            <button className="border-b" onClick={handleClick}>Join the wait list</button>
            {
              showPopup && (
                <div className="popup w-[296px] h-[145] bg-black relative bottom-6 text-right"
                >
                  <button onClick={handleHidePopup}>
                    <Image
                    src={"/cancel.png"}
                    width={20}
                    height={20}
                    alt="cancel"
                    />
                  </button>
                  <h1 className="text-red text-[20px] font-bold leading-[27px] items-center text-center">To Join the waitlist</h1>
                  <p className="text-center py-4 text-[14px] leading-[25px] font-medium">Contact the Reeplay Licensed agency in your region.</p>
                </div>
              )
            }
          </div>
        </div>
      </div>

      {/* Reeplay Advantage */}
      <div  className="bg-white h-[600px] py-[160px]">
            <div className="h-[330px] mx-[70px]">
              <h2 className="font-extrabold text-[42px] leading-[56px] text-center h-[56px] py-17">The Reeplay Advantage</h2>
              
              <div className="text-center flex justify-around gap-10 pt-20">
                <div className="h-[202px] w-[276px]">
                  <button>
                  <Image 
                  src={"/lock.svg"}
                  width={64}
                  height={64}
                  alt="lock"
                  className="mx-8"
                  />
                  </button>
                  <h1 className="text-[20px] leading-[27px] items center font-bold">Affordable Access</h1>
                  <p className="font-medium w-[250px] h-[87px] text-[16px] leading-29px items center">Unlock premium content for just
                  $1/month, making high-quality entertainment accessible.</p>
                </div>

                <div className="h-[202px] w-[276px]">
                <button>
                  <Image 
                  src={"/money.png"}
                  width={64}
                  height={64}
                  alt="lock"
                  className="mx-8"
                  />
                  </button>
                  <h1 className="text-[20px] leading-[27px] items center font-bold">Easy Monetization</h1>
                  <p className="font-medium w-[250px] text-[16px] h-[87px] leading-29px items center">Earn from your content with 
                  easy-to-use monetization tools tailored for creators</p>
                </div>

                <div className="h-[202px] w-[276px]">
                <button>
                  <Image 
                  src={"/youtube.svg"}
                  width={64}
                  height={64}
                  alt="lock"
                  className="mx-8"
                  />
                  </button>
                  <h1 className="text-[20px] leading-[27px] items center font-bold">Diverse Content</h1>
                  <p className="font-medium h-[87px] w-[250px] text-[16px] leading-29px items center">Access variety of fresh, high-quality content, from live sports, reality TV
                  to  podcasts and more.</p>
                </div>

                <div className="h-[202px] w-[276px]">
                <button>
                  <Image 
                  src={"/play.png"}
                  width={64}
                  height={64}
                  alt="lock"
                  className="mx-8"
                  />
                  </button>
                  <h1 className="text-[20px] leading-[27px] items center font-bold">Shorter publishing time</h1>
                  <p className="font-medium text-[16px] w-[250px] h-[87px] leading-29px items center">Enjoy an easy publishing process that gets your content live faster, reaching viewers  instantly.</p>
                </div>
              </div>
            </div>
      </div>

      {/* launch part of code */}
      <div className="launch text-white h-[655px] pt-[160px] pb-[80px] px-[96] gap-[80px]">
            <div className="h-[319px] flex gap-[48px]">
              <div className="w-[600px] h-[319px] gap-32px">
                <h2 className="font-extrabold text-[40px] leading-[56px] h-[112px]">Launch Your Own Live TV Channel on Reeplay</h2>
                <p className="font-medium text-[16px] py-10 h-[87px] leading-[29px]">Churches, media pros, and investors—launch your channel on Africa’s next-gen streaming platform! Join our 2025 rollout with 6 months free for early adopters. 
                Reserve your spot today.</p>
                <button className="bg-red py-5 px-[48px] rounded-[100px] my-20">Apply for Early Access
                  <Image 
                  src={"/arrow.png"}
                  width={24}
                  height={24}
                  alt="logo"
                  className="inline ml-3"
                  />
                </button>
              </div>
                  <Image 
                  src={"/man-glasses.png"}
                  width={600}
                  height={440}
                  alt="logo"
                  className="rounded-[24px]"
                   />
            </div>
      </div>
    </div>
    </>
  );
}
