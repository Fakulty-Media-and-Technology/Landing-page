{/* get ready */}
<div className={`pt-[80px] pb-[160px] px-[96] gap-[80px] h-[374px] 
    ${isVisible ? 'animate-fade-in' : ''}`}>
<div className="flex gap-[48px] text-white ">
    <h3 className="font-extrabold text-[42px] w-[1200px] h-[112px] gap-[16px] leading-[56px]">Get Ready to Share Your Films on Our Platform!</h3>
    <div>
      <p className="font-medium text-[16px] leading-[29px] w-[500px] mb-7">Exciting news for film producers! Join the waitlist to be first in line for submissions when we open up for films, documentaries, and series. Enjoy early access and exclusive monetization benefits.</p>

      <button className="border-b" onClick={handleClick}>Join the waitlist</button>
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
