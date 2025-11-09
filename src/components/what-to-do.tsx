import React from 'react';
import Image from 'next/image';

export default function WhatToDo(){
  return(
    <div className="max-w-[1440px] bg-red w-full py-[80px] flex gap-[30px] items-center justify-center">
      <div className="w-full max-w-[1020px] h-[530px] min-[1200px]:h-[730px] min-[1300px]:h-[517px] hidden min-[960px]:flex items-center justify-center overflow-hidden rounded-[50px] bg-[#0B2B26] bg-[url('/noise-texture.png')] backdrop-blur-2xl bg-cover bg-no-repeat bg-blend-overlay">
        <div className="flex items-center justify-center relative h-[500px] w-[680px] min-[1300px]:h-[583px] min-[1300px]:w-[800px] ml-[-3px]">
          <Image src="/to-do.png" alt='image' fill={true}/>
        </div>
      </div>
    </div>
  )
}