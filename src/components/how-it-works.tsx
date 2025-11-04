import Image from 'next/image';
import React from 'react';
import { WorkCard } from './features';

const HowItWorks = ()=>{
  return(
    <div className="max-w-[1440px] bg-white w-full py-[80px] flex gap-[30px] items-center justify-center">
      <div className='max-w-[1165px] px-[35px] min-[678px]:px-[70px] min-[960px]:px-0 flex flex-col gap-[50px] min-[420px]:gap-[100px] items-center justify-center'>
        <div className='w-full max-w-[362px] flex flex-col items-center gap-5'>
          <div className='flex rounded-[20px] border-[1.5px] border-dashed items-center py-[9px] px-3 gap-[6px] bg-[#0B2B26]/60 border-[#FFFFFF]/80'>
            <Image src="/menu-circle.svg" alt='icn' width={16} height={16}/>
            <p className='text-white font-inter font-medium text-sm'>Process</p>
          </div>
          <div className='flex flex-col items-center gap-3'>
            <h2 className='text-[30px] min-[380px]:text-[40px] text-black font-sf font-semibold text-center'>How It Works</h2>
            <p className='w-full min-[380px]:w-auto text-center text-black/50 font-sarabun font-medium text-base'>Tap to connect. Tap to pay. Three steps. Zero stress.</p>
          </div>
        </div>
        <div className='w-full flex flex-col items-center gap-[52px]'>
          <div className='w-full flex items-center flex-wrap  justify-center gap-[28px] min-[605px]:gap-8 min-[760px]:gap-[36px] min-[980px]:gap-8'>
            <WorkCard
              no={'01'}
              action='Tap “Send” or “Receive” 😉'
              info='Open the app and choose if you want to send or receive money.'
              insetBg='bg-gradient-to-r from-[#FFFFFF]/50 to-[#FFFFFF]/30'
              offsetBg='bg-[#FFD6F1]'
            />
            <WorkCard
              no={'02'}
              action='Tap Phones Together 📱'
              info='Hold your phone close to the other person’s device to connect.'
              insetBg='bg-gradient-to-r from-[#FFFFFF]/50 to-[#FFFFFF]/30'
              offsetBg='bg-[#8EB69B]'
            />
            <WorkCard
              no={'03'}
              action='Payment Is Complete  ✅'
              info='You’ll both get a confirmation and a digital receipt in seconds.'
              insetBg='bg-gradient-to-r from-[#FFFFFF]/50 to-[#FFFFFF]/30'
              offsetBg='bg-[#B2E0F2]'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks;