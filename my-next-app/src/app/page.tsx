import Image from "next/image";
import ScrollImage from './scroll'

export default function Home() {
  return (
    <>
    <div className="total-container bg-black h-[200vh]">
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
    </div>
    </>
  );
}
