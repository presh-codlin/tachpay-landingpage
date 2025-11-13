import React from "react";
import Image from 'next/image';
import { testimonialData } from './features';

const Testimonial = () => {

  const n = 2
  const result = [[], [], []] 

  const cardsPerLine = Math.ceil(testimonialData.length / 2)

  for (let line = 0; line < n; line++) {
    for (let i = 0; i < cardsPerLine; i++) {
      const value = testimonialData[i + line * cardsPerLine]
      if (!value) continue
      result[line].push(value)
    }
  }

  console.log(result)

  return(
    <div className="w-full max-w-[1440px] py-[80px] bg-[#F6F6F6] flex flex-col items-center overflow-x-hidden">
      <div className="w-[2207px] flex flex-col items-center gap-[52px]">
        <div className="w-full flex flex-col gap-[100px] items-center">
          <div className='w-[70%] max-w-[320px] min-[400px]:max-w-[382px] min-[400px]:w-[382px] flex flex-col items-center gap-5'>
            <div className='flex rounded-[20px] border-[1.5px] border-dashed items-center py-[9px] px-3 gap-[6px] bg-[#0B2B26]/60 border-[#FFFFFF]/80'>
              <Image src="/star.svg" alt='icn' width={16} height={16}/>
              <p className='text-white font-inter font-medium text-sm'>Testimonials</p>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <h2 className='text-[25px] min-[430px]:text-[40px] text-black font-sf font-semibold text-center'>Hear From Our Users</h2>
              <p className='w-[80%] min-[380px]:w-auto text-center text-black/50 font-sarabun font-medium text-base'>Real stories from people who tapped, paid, and smiled.</p>
            </div>
          </div>
          <div className="w-[2207px] h-[592px] flex flex-col gap-5">
            {result.map((data, index)=>(
              <div key={index} className="flex gap-5 h-[286px]">
                {data.map((testimony)=>(
                  <div key={testimony.id} className="w-[336px] h-[286px] bg-[#0B2B2680] rounded-[15px] pt-[18px] px-6">
                    <div className="w-full flex flex-col gap-5">
                      <p className="font-sarabun font-medium text-[15px] text-[#FFFFFFCC]">{testimony.details}</p>
                      <div className="w-full flex gap-[17px] my-auto">
                        <Image src={testimony.image} width={45} height={40} alt="user" className="rounded-[30px]"/>
                        <div className="flex flex-col gap-1">
                          <p className="font-sf font-semibold text-[15px] text-[#FFFFFF]">{testimony.name}</p>
                          <p className="font-sarabun font-medium -mt-2 text-sm text-[#FFFFFF80]">{testimony.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <button>Download App</button>
      </div>
    </div>
  )
}

export default Testimonial;