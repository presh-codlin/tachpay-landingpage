import Image from 'next/image';
import React from 'react';

export const WorkCard = ({insetBg, offsetBg, no, action, info} : {insetBg: string; offsetBg: string; no:string; action:string; info:string}) => {
  return(
    <div className={`${offsetBg} px-5 pt-5 pb-8 rounded-[30px] border-[1.5px] w-full min-[560px]:w-[47%] min-[980px]:w-auto flex flex-col gap-8 items-center border-dashed border-[#D9D9D9]/60`}>
      <div className={`${insetBg} rounded-[22px] p-[1px]`}>
        <div className={`${insetBg} rounded-[22px] backdrop-blur-[50px] p-4`}>
          <div className='flex flex-col gap-2 w-full min-[980px]:w-[276px]'>
            <div className='flex flex-col gap-[17px] items-start'>
              <div className='w-[47px] h-[47px] flex flex-col items-center justify-center rounded-[40px] p-[15px] gap-[10px] bg-[#0B2B26] shadow-[inset_0px_-3px_6px_0px_#FFFFFF66,inset_4px_4px_4px_0px_#00000080]'>
                <span className='text-[#FFFFFF] text-sm font-inter font-semibold'>{no}</span>
              </div>
              <p className='text-[16px] min-[380px]:text-lg text-black font-sf font-medium'>{action}</p>
            </div>
            <span className='text-[15px] text-black/50 font-sarabun font-medium'>{info}</span>
          </div>
        </div>
      </div>
      <button className='px-8 py-4 flex gap-[10px] rounded-[30px] font-inter font-semibold text-sm text-white bg-[#0B2B26] shadow-[inset_2px_4px_8px_0px_#00000099,inset_-1px_-3px_6px_0px_#FFFFFF4D,2px_26px_40px_-4px_#33313140]'>
        Download App
      </button>
    </div>
  )
}

export const FeatCard = ({classname, imgHeight, imgStyle, imgWidth, imgUrl, name, info}:{classname:string;imgHeight:string;imgStyle?:string;imgWidth:string;imgUrl:string;name:string;info:string}) => {
  return(
    <div className={`${classname} flex flex-col rounded-[20px] border-[1.5px] bg-[#F6F6F6] border-[#B3B3B326] items-center`}>
      <div className={`relative ${imgHeight} ${imgWidth}`}><Image src={imgUrl} alt='image' fill={true} className={imgStyle}/></div>
      <div className='bg-[#FFFFFF80] h-[124px] w-full overflow-hidden rounded-b-[20px] backdrop-blur-[20px]'>
        <div className='w-full mt-5 mb-3 min-[390px]:mb-0 px-5 flex flex-col gap-2 items-start'>
          <h4 className='text-xl text-black font-sf font-semibold'>{name}</h4>
          <p className='text-base text-wrap text-black/50 font-sarabun font-medium'>{info}</p>
        </div>
      </div>
    </div>
  )
}


export const FaqCard = ({question, answer, index, onclick, activeFaq} : {question: string; answer: string; index: number; onclick:(state:number)=>void; activeFaq:number}) => {
  return(
    <div className="w-full flex flex-col gap-6">
      <div className="w-full transition-all duration-700 flex flex-col gap-3">
        <div onClick={()=>onclick} className="w-full flex itmes-center cursor-pointer justify-between">
          <h3 className="text-[20px] text-[#000000] font-semibold font-sarabun">{question}</h3>
          <Image src={`${activeFaq === index ? "/remove-circle.svg" : "add-circle.svg"}`} alt='icn' width={24} height={24}/>
        </div>
        <span className={`transition-all duration-700 text-[#00000080] font-sarabun font-normal text-base ${activeFaq != index && "hidden"}`}>{answer}</span>
      </div>
      <hr className="w-full h-0 boder-[1px] border-[#0000001A]"/>
    </div>
  )
}