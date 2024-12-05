"useclient"

import Image from "next/image"
import ScrollImage from "@/app/scroll"
import React, {useState} from 'react'
import { note } from "@/config/data"



function Among() {

    const [showPopup, setshowPopup] = useState(false);
  const [popupPosition, setpopupPosition] = useState({ x:0, y:0});


    const handleClick = (e: { clientX: any; clientY: any; }) => {
        setshowPopup(true);
        setpopupPosition({ x: e.clientX,  y: e.clientY})
      }
    
      const handleHidePopup = () => {
        setshowPopup(false)
      }  

      const images = [
        '/brand-1.svg',
        '/Logo.svg (3).svg',
        '/brand-3.svg',
        '/brand-4.svg',
        '/brand-5.svg',
        '/brand-6.svg',
        '/brand-7.svg',
        '/brand-8.svg'
      ]


    return (
        <>
        <div className="container">
            <div className="check bg-black h-[120px] w-[1388px] right-18 overflow-x-hidden relative ml-[-80px] top-14 z-10 rounded-[98%]"></div>
        <div className="scroll h-[432px] bg-blue">
            <ScrollImage />
        </div>
            <div className="heck bg-black h-[120px] w-[1388px] right-18 overflow-x-hidden relative ml-[-80px] bottom-14 z-10 rounded-[98%]"></div>
        </div>


        <div className="brands h-[600px] text-white my-28">
                <div className="ml-8">
                    <p className="font-semibold text-[16px]">Brands that have joined joined the waitlist</p>
                    
                    <div className=" branded h-[89px] flex w-[] justify-around overflow-hidden">
                        {images.map((image, index) => (
                            <Image 
                            src={image}
                            key={index}
                            alt={`image ${index + 1}`}
                            width={86}
                            height={40}
                            className="brand"
                            />
                        ))}
                    </div>
                </div>



                {/* be among part */}
                <div className="beamong my-14 mx-10 flex gap-10 max-sm:mx-4">
                    <h3 className="font-extrabold text-[42px] w-[1200px] h-[168px] leading-[56px] animate-fade">Be Among the First brand to Showcase Your Content
                        on Reeplay!</h3>
                        
                    <div className="animate-clone">
                        <p className="font-medium text-[16px] leading-[29px] w-[580px] mb-7">{note}</p>

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
            </div></>
    )
}

export default Among;
