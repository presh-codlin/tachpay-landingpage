import Image from 'next/image';
import React from 'react';

export default function Hero(){
  const images = [
    "/img-1.png",
    "/img-2.png",
    "/img-3.png",
    "/img-4.png",
  ]
  return(
    <div className="max-w-[1440px] px-[35px] min-[678px]:px-[70px] min-[960px]:px-8 min-[1064px]:px-10 min-[1200px]:px-[80px] mt-[85px] min-[1200px]:mt-[100px] w-full py-[60px] min-[1200px]:py-[80px] flex flex-col min-[800px]:flex-row gap-[30px] items-center justify-between">
      <div className='max-w-[633px] flex flex-col min-[960px]:flex-col min-[960px]:items-start gap-[35px] min-[1200px]:gap-[80px] items-start justify-center'>
        <div className='flex flex-col gap-[30px] min-[1200px]:gap-[52px] items-start'>
          <div className='flex flex-col items-start gap-[11px]'>
            <div className='p-[1px] bg-gradient-to-r rounded-[40px] flex items-center justify-center from-white/50 to-white/30'>
              <div className='rounded-[40px] py-[6px] px-[13px] flex gap-3 items-center bg-[#0B2B26]/2 backdrop-blur-[120px]'>
                <div className='flex items-center '>
                  {images.map((img, index) => (
                    <div key={index} className={`relative w-[30px] h-[30px] rounded-full border-[1px] border-white overflow-hidden flex items-start justify-center ${index !== 0 && '-ml-[10px]'}`}>
                      <Image src={img} alt="img" fill/>
                    </div>
                  ))}
                </div>
                <span className='text-xs text-black font-medium font-inter'>Over 1K+ users already registered </span>
              </div>
            </div>
            <div className='flex flex-col items-start gap-3 min-[1200px]:gap-5'>
              <h1 className='font-semibold text-[40px] min-[460px]:text-[45px] min-[1200px]:text-[50px] min-[1300px]:text-[70px] font-sf min-[1300px]:leading-[91px] text-[#000000] max-w-[609px]'>Send & Receive Payments Instantly With Just a Tap!</h1>
              <p className='font-sarabun font-normal text-xl text-[#000000]/50 max-w-[609px]'>Send and receive money with just a tap — no hardware, no setup. Simple, secure, and designed for how you move.</p>
            </div>
          </div>
          <div className='flex gap-5 min-[443px]:gap-2 min-[460px]:gap-4 min-[1200px]:gap-6 flex-col min-[443px]:flex-row min-[430px]:items-center'>
            <button className='rounded-[30px] py-[21px] px-[25px] min-[497px]:px-[44px] gap-[10px] bg-[#0B2B26] shadow-[inset_2px_4px_8px_0px_#00000099,inset_-1px_-3px_6px_0px_#FFFFFF4D] text-[15px] font-semibold font-inter text-center text-white'>Download App</button>
            <span className='hidden min-[443px]:block w-9 h-0 border-[1.5px] border-[#D9D9D9]/60 rotate-90'/>
            <div className='flex items-center gap-3'>
              <span className='font-sarabun font-medium text-[15px] text-black'>Available on</span>
              <div className='flex items-center bg-[#FFFFFF]/50 shadow-[0px_4px_6px_0px_#000000]/5 rounded-[40px] p-[6px] gap-1'>
                <div className='w-6 h-6 relative flex items-center justify-center'>
                  <Image src="/app-store.svg" alt="img" fill/>
                </div>
                <span className='text-[15px] font-inter font-normal text-black'>+</span>
                <div className='w-[22px] h-[22px] relative flex items-center justify-center'>
                  <Image src="/play-store.svg" alt="img" fill/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-[450px]:w-[max-content] flex gap-[15px] min-[443px]:gap-[25px] min-[497px]:gap-[40px] min-[1200px]:gap-[70px]">
          <div className='min-[430px]:w-[112px] h-[89px] flex flex-col gap-[46px] pr-[15px] min-[443px]:px-auto border-r-[1.5px] border-[#D9D9D999]'>
            <div className='w-[72px] flex flex-col gap-5'>
              <Image src="/Frame 251.svg" alt='icons' width={13} height={20}/>
              <div className='flex flex-col gap-1'>
                <p className='text-xl font-semibold font-sf text-[#000000]'>65k+</p>
                <p className='text-[15px] font-medium font-sarabun text-[#000000]/50'>Downloads</p>
              </div>
            </div>
          </div>
          <div className='min-[430px]:w-[127px] h-[89px] flex flex-col gap-[46px] pr-[15px] min-[443px]:px-auto border-r-[1.5px] border-[#D9D9D999]'>
            <div className='w-[max-content] flex flex-col gap-5'>
              <Image src="/Frame 249.svg" alt='icons' width={18} height={18}/>
              <div className='flex flex-col gap-1'>
                <p className='text-xl font-semibold font-sf text-[#000000]'>20k+</p>
                <p className='text-[15px] font-medium font-sarabun text-[#000000]/50'>Active Users</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col h-[85px] gap-[20px] w-[max-content]'>
            <Image src="/Frame 250.svg" alt='icons' width={18} height={16}/>
            <div className='w-[max-content] flex flex-col gap-5'>
              <div className='flex flex-col gap-1'>
                <p className='text-xl font-semibold font-sf text-[#000000]'>6k+</p>
                <p className='text-[15px] font-medium font-sarabun text-[#000000]/50'>Active Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[618px] h-[630px] min-[1200px]:h-[730px] min-[1300px]:h-[817px] hidden min-[960px]:flex items-center justify-center overflow-hidden rounded-[50px] bg-[#0B2B26] bg-[url('/noise-texture.png')] backdrop-blur-2xl bg-cover bg-no-repeat bg-blend-overlay">
        <div className="flex items-center justify-center relative h-[600px] w-[680px] min-[1300px]:h-[783px] min-[1300px]:w-[800px] ml-[-3px]">
          <Image src="/phone.png" alt='image' fill={true}/>
        </div>
      </div>
    </div>
  )
}