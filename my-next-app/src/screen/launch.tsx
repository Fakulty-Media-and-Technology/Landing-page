"useclient"

import { Channel, Share } from "@/config/data";
import Image from "next/image"
import React, {useState} from "react"


function Launch() {

  const [showPopup, setshowPopup] = useState(false);
  const [popupPosition, setpopupPosition] = useState({ x:0, y:0});


  const handleClick = (e: { clientX: any; clientY: any; }) => {
    setshowPopup(true);
    setpopupPosition({ x: e.clientX,  y: e.clientY})
  }

  const handleHidePopup = () => {
    setshowPopup(false)
  }  

    return(
      <>
      <div  className="launch text-white h-[655px] pt-[160px] pb-[80px] px-[96] gap-[80px] max-sm:h-[760px] max-sm:px-0 max-sm:pt-[100px]">
            <div className="h-[319px] flex gap-[48px] max-sm:block max-sm:h-[692px] max-sm:px-10 ">
              <div className="w-[600px] h-[319px] gap-32px max-sm:w-[327px] side">
                <h2 className="font-extrabold text-[40px] leading-[56px] h-[112px] max-sm:text-[24px] max-sm:w-[327px] max-sm:leading-[32px] max-sm:h-[64px] ">Launch Your Own Live TV Channel on Reeplay</h2>
                <p className="font-medium text-[16px] py-10 h-[87px] leading-[29px] max-sm:mr-4">{Channel}</p>
                <button className="bg-red py-5 px-[48px] rounded-[100px] my-20 max-sm:mt-40">Apply for Early Access
                  <Image 
                  src={"/arrow.png"}
                  width={24}
                  height={24}
                  alt="logo"
                  className="inline ml-3"
                  />
                </button>
              </div>

              <div className="plain max-sm:my-20">
                  <Image 
                  src={"/man-glasses.png"}
                  width={600}
                  height={440}
                  alt="logo"
                  className="rounded-[24px]  max-sm:h-[216] max-sm:w-[327px]"
                  />
              </div>     
            </div>
      </div>

      
      <div className="beamong my-14 mx-10 flex gap-10 text-white h-[374px] max-sm:h-[500px] max-sm:mx-6">
      <h3 className="font-extrabold text-[42px] w-[1200px] h-[168px] leading-[56px] max-sm:h-[100px] animate-fade">Get Ready to Share Your Films on Our Platform!</h3>
          
      <div className="animate-clone">
          <p className="font-medium text-[16px] leading-[29px] w-[580px] mb-7">{Share}</p>

          <button className="border-b" onClick={handleClick}>Join the waitlist</button>
          {showPopup && (
              <div className="popup w-[296px] h-[145] bg-black relative bottom-6 text-right"
              >
                  <button onClick={handleHidePopup}>
                      <Image
                          src={"/cancel.png"}
                          width={20}
                          height={20}
                          alt="cancel" />
                  </button>
                  <h1 className="text-red text-[20px] font-bold leading-[27px] items-center text-center">To Join the waitlist</h1>
                  <p className="text-center py-4 text-[14px] leading-[25px] font-medium">Contact the Reeplay Licensed agency in your region.</p>
              </div>
          )}
      </div>
  </div>
</>
    )
}

export default Launch;