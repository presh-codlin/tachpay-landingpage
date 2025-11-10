import React from 'react';
import Image from 'next/image';

export default function WhatToDo(){
  return(
    <div className="max-w-[1440px] bg-red w-full py-[80px] flex gap-[30px] items-center justify-center">
      <div className="w-full max-w-[1020px] h-[482px] hidden min-[960px]:flex items-center justify-center overflow-hidden rounded-[40px] bg-[#0B2B26] bg-[url('/noise-texture.png')] backdrop-blur-2xl bg-cover bg-no-repeat bg-blend-overlay">
        <div className="flex items-center justify-center relative h-[500px] w-[680px] min-[1300px]:h-[583px] min-[1300px]:w-[400px] ml-[-3px]">
          <Image src="/to-do.png" alt='image' fill={true}/>
        </div>
        <div className='flex flex-col gap-[52px]'>
          <div className='flex flex-col gap4'>
            <h1 className='font-sf font-semibold text-[40px] text-[#FFFFFF]'>Ready to Tap and Pay?</h1>
            <p className='font-medium font-sarabun text-base text-[#FFFFFFB2]'>Join thousands already sending and receiving money the easy way.</p>
          </div>
          <div className='flex gap-5'>
            <button className='py-[21px] px-[44px] flex gap-[10px] rounded-[40px] bg-[#0B2B26] shadow-[inset_2px_4px_12px_0px_#00000066,inset_-1px_-3px_6px_0px_#FFFFFF33] backdrop-[2px_26px_40px_-4px_#33313140]'>
              <Image src="/app-store.svg" alt='app' width={30} height={30}/>
              <span className='max-w-[122px] flex flex-col items-start gap-[5px]'>
                <span className='font-inter font-medium text-sm text-[#FFFFFF]'>Download on the</span>
                <span className='font-inter font-semibold text-base text-[#FFFFFF]'>App Store</span>
              </span>
            </button>
            <button className='py-[21px] px-[44px] flex gap-[10px] rounded-[40px] bg-[#0B2B26] shadow-[inset_2px_4px_12px_0px_#00000066,inset_-1px_-3px_6px_0px_#FFFFFF33] backdrop-[2px_26px_40px_-4px_#33313140]'>
              <Image src="/play-store.svg" alt='app' width={30} height={30}/>
              <span className='max-w-[122px] flex flex-col items-start gap-[5px]'>
                <span className='font-inter font-medium text-sm text-[#FFFFFF]'>Get it on</span>
                <span className='font-inter font-semibold text-base text-[#FFFFFF]'>Google Play Store</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}