"use client";
import Image from "next/image";
import React, { useState } from "react";

const Faqs = () => {
  const [activeTab, setActiveTab] = useState("General")
  return(
    <div className="max-w-[1440px] bg-white w-full flex py-[80px] px-[25px] min-[400px]:px-[35px] min-[678px]:px-[70px] min-[980px]:px-8 min-[1064px]:px-10 min-[1200px]:px-[80px] items-center justify-center">
      <div className='w-full max-w-[1165px] flex flex-col gap-[100px] items-center justify-center'>
        <div className='w-[85%] sm:w-[362px] md:w-auto flex flex-col items-center gap-5'>
          <div className='flex rounded-[20px] border-[1.5px] border-dashed items-center py-[9px] px-3 gap-[6px] bg-[#0B2B26]/60 border-[#FFFFFF]/80'>
            <Image src="/star.svg" alt='icn' width={16} height={16}/>
            <p className='text-white font-inter font-medium text-sm'>FAQs</p>
          </div>
          <div className='flex flex-col items-center gap-3'>
            <h2 className='text-[30px] min-[380px]:text-[40px] text-black font-sf font-semibold text-center'>Frequently Asked Questions</h2>
            <p className='w-full min-[380px]:w-auto text-center text-black/50 font-sarabun font-medium text-base'>Quick answers to help you tap with confidence.</p>
          </div>
        </div>
        <div className="">
          <div className="">
            {["General","Pricing","Technical", "Legal"].map((faqbtn, index)=>(
              <button key={index} className="" onClick={()=>setActiveTab(faqbtn)}>{faqbtn}</button>
            ))}
          </div>
          <Faq activeTab={activeTab}/>
        </div>
      </div>
    </div>
  )
}

export default Faqs;


const Faq = ({activeTab} : {activeTab:string}) => {
  return(
    <div>
        {activeTab === "General" ? (
            <div>{activeTab}</div>
        ) : activeTab === "Pricing" ? (
           <div>{activeTab}</div> 
        ) : activeTab === "Technical" ? (
           <div>{activeTab}</div> 
        ) : activeTab === "Legal" && (
           <div>{activeTab}</div> 
        )}
    </div>
  )
}