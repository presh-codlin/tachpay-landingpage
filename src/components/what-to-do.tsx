import React from 'react';
import Image from 'next/image';

export default function WhatToDo(){
  return(
    <div className="max-w-[1440px] bg-red w-full py-[80px] flex gap-[10px] items-center justify-center px-4 min-[380px]:px-[35px] min-[678px]:px-[70px] min-[960px]:px-8 min-[1064px]:px-10 min-[1200px]:px-[80px]">
      <div className="w-full max-w-[1204px] h-[500px] min-[800px]:h-[482px] min-[800px]:px-12 flex items-center overflow-hidden rounded-[40px] bg-[#0B2B26] bg-[url('/noise-texture.png')] backdrop-blur-2xl bg-cover bg-no-repeat bg-blend-overlay">
        <div className="relative h-full hidden min-[800px]:block">
          <Image src="/phone1.png" alt='image' width={1100} height={635.50} className='mt-[350px] min-[980px]:ml-[-280px] min-[1251px]:ml-[-266px] min-[980px]:mt-[45px]'/>
          <Image src="/phone2.png" alt='image' width={1100} height={635.59} className='absolute top-[200px] min-[980px]:left-[-122px] min-[1251px]:left-[-120px] min-[980px]:top-[128.51px]'/>
        </div>
        <div className=' flex flex-col gap-[52px] items-start absolute px-4 min-[400px]:px-8 min-[600px]:px-4 min-[650px]:px-5 min-[980px]:px-0 top-12 min-[980px]:top-auto min-[980px]:right-12'>
          <div className='flex flex-col gap-4'>
            <h1 className='font-sf font-semibold text-[35px] min-[500px]:text-[40px] text-[#FFFFFF]'>Ready to Tap and Pay?</h1>
            <p className='font-medium font-sarabun text-base text-[#FFFFFFB2]'>Join thousands already sending and receiving money the easy way.</p>
          </div>
          <div className='min-[600px]:w-[500px] min-[800px]:w-[580px] flex gap-5 min-[600px]:gap-3 min-[800px]:gap-5 items-center flex-col min-[600px]:flex-row'>
            <button className='w-full py-[16px] min-[800px]:px-[44px] flex gap-[10px] items-center justify-center rounded-[40px] bg-[#0B2B26] shadow-[inset_2px_4px_12px_0px_#00000066,inset_-1px_-3px_6px_0px_#FFFFFF33] backdrop-[2px_26px_40px_-4px_#33313140]'>
              <Image src="/apple-inc.svg" alt='app' width={30} height={30}/>
              <span className='max-w-[122px] flex flex-col items-start gap-2px'>
                <span className='font-inter font-medium text-sm text-[#FFFFFF]'>Download on the</span>
                <span className='font-inter font-semibold text-base text-[#FFFFFF]'>App Store</span>
              </span>
            </button>
            <button className='w-full py-[16px] px-[45px] min-[600px]:px-0 min-[800px]:px-[44px] flex gap-[10px] rounded-[40px] bg-[#0B2B26] items-center justify-center shadow-[inset_2px_4px_12px_0px_#00000066,inset_-1px_-3px_6px_0px_#FFFFFF33] backdrop-[2px_26px_40px_-4px_#33313140]'>
              <Image src="/play-store.svg" alt='app' width={30} height={30}/>
              <span className='flex flex-col items-start gap-2px'>
                <span className='font-inter font-medium text-sm text-[#FFFFFF]'>Get it on</span>
                <span className='font-inter font-semibold  text-left text-base text-[#FFFFFF]'>Google Play Store</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}