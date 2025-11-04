import React from 'react';
import Image from 'next/image';

export default function WhatToDo(){
  return(
    <div className="max-w-[1440px] bg-white w-full py-[80px] flex gap-[30px] items-center justify-center">
      <div className='max-w-[1204px] h-[500px] relative bg-[#0B2B26] bg-[url("/noise-texture.png")] bg-cover bg-no-repeat bg-blend-overlay rounded-[40px] flex flex-col gap-[100px] items-center justify-center'>
        <Image src='/to-do.png' alt='todo-image' fill/>
        <div className='absolute'></div>
      </div>
    </div>
  )
}