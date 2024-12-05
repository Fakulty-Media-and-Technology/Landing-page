"useclient"

import Image from "next/image"
import { AdvantageData } from "@/config/data";

function Advantage (){

    return(
    <div  className=" covering bg-white h-[600px] py-[160px]">
    <div className="h-[330px] mx-[70px] two">
    <h2 className="Reeplay font-extrabold text-[42px] leading-[56px] text-center h-[56px] py-17">The Reeplay Advantage</h2>

    <div className="object flex text-center my-14 gap-6 items-center justify-evenly">
        {AdvantageData.map((data, index) => {
            return (
                <div key={index} className="items-center easy w-[276px]">
                <Image 
                    src={data.image}
                    alt="image"
                    width={64}
                    height={64}
                    className="mx-auto"
                />

                <h6 className=" text-black_1 text-base sm:text-lg md:text-xl text-center font-bold mt-2.5">{data.topic}</h6>
                <p className="mt-1 leading-5 font-medium text-center text-xs sm:text-sm md:text-base">{data.description}</p>
                </div>
            )
        })}
    </div>
    
    </div>
    </div>
    )
}

export default Advantage;
