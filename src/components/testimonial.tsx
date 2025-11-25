import React from "react";
import Image from 'next/image';
import { testimonialData } from './features';
import Marquee from "react-fast-marquee";

type Member = {
  id: string;
  details: string;
  image: string;
  name: string;
  role: string;
};

const Testimonial = () => {

  const n = 2
  const result: Member[][] = [[], []] 

  const cardsPerLine = Math.ceil(testimonialData.length / 2)

  for (let line = 0; line < n; line++) {
    for (let i = 0; i < cardsPerLine; i++) {
      const value = testimonialData[i + line * cardsPerLine]
      if (!value) continue
      result[line].push(value)
    }
  }

  return(
    <div id="testimonial" className="w-full max-w-[1440px] py-[80px] bg-[#F6F6F6] flex flex-col items-center overflow-x-hidden">
      <div className="w-[2207px] flex flex-col items-center gap-[52px]">
        <div className="w-full flex flex-col gap-[100px] items-center">
          <div className='w-[70%] max-w-[320px] min-[400px]:max-w-[382px] min-[400px]:w-[382px] flex flex-col items-center gap-5'>
            <div className='flex rounded-[20px] border-[1.5px] border-dashed items-center py-[9px] px-3 gap-[6px] bg-[#0B2B26]/60 border-[#FFFFFF]/80'>
              <Image src="/star.svg" alt='icn' width={16} height={16}/>
              <p className='text-white font-inter font-medium text-sm'>Testimonials</p>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <h2 className='text-[28px] min-[430px]:text-[40px] text-black font-sf font-semibold text-center'>Hear From Our Users</h2>
              <p className='w-[80%] max-w-[300px] min-[380px]:w-auto text-center text-black/50 font-sarabun font-medium text-base'>Real stories from people who tapped, paid, and smiled.</p>
            </div>
          </div>
          <div className="w-[2207px] h-fit flex flex-col gap-14 min-[436px]:gap-5">
            {result.map((data, index)=>(
              <Marquee pauseOnHover={true} direction={`${index === 0 ? "left" : "right"}`} autoFill={true} speed={70} key={index} style={{height: "286px", overflow: "visible"}}>
                <div className="flex gap-5 w-fit h-[320px] min-[436px]:h-[286px] pr-5">
                  {data.map((testimony, indx)=>(
                    <div key={testimony.id} className="w-[280px] min-[436px]:w-[336px] h-[320px] min-[436px]:h-[286px] bg-[#0B2B2680] rounded-[15px] pt-[18px] px-6">
                      <div className="w-full flex flex-col gap-5">
                        <p className="font-sarabun font-medium text-[15px] text-[#FFFFFFCC]">{testimony.details}</p>
                        <div className="w-full flex gap-[17px] my-auto">
                          <Image src={testimony.image} width={45} height={40} alt="user" className="rounded-[30px]"/>
                          <div className="flex flex-col gap-1">
                            <p className="font-sf font-semibold text-[15px] text-[#FFFFFF]">{testimony.name}</p>
                            <p className="font-sarabun font-medium -mt-1 text-sm text-[#FFFFFF80]">{testimony.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Marquee>
            ))}
          </div>
        </div>
        <button className='px-8 py-4 flex gap-[10px] rounded-[30px] font-inter font-semibold text-sm text-white bg-[#0B2B26] shadow-[inset_2px_4px_8px_0px_#00000099,inset_-1px_-3px_6px_0px_#FFFFFF4D,2px_26px_40px_-4px_#33313140]'>Download App</button>
      </div>
    </div>
  )
}

export default Testimonial;