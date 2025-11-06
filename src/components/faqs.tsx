"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaqCard } from './features';

const Faqs = () => {
  const [activeTab, setActiveTab] = useState("general")
  return(
    <div className="max-w-[1440px] bg-white w-full flex py-[80px] px-[25px] min-[400px]:px-[35px] min-[678px]:px-[70px] min-[980px]:px-8 min-[1064px]:px-10 min-[1200px]:px-[80px] items-center justify-center">
      <div className='w-full max-w-[816px] flex flex-col gap-[100px] items-center justify-center'>
        <div className='w-[85%] sm:w-[362px] md:w-auto flex flex-col items-center gap-5'>
          <div className='flex rounded-[20px] border-[1.5px] border-dashed items-center py-[9px] px-3 gap-[6px] bg-[#0B2B26]/60 border-[#FFFFFF]/80'>
            <Image src="/help-circle.svg" alt='icn' width={16} height={16}/>
            <p className='text-white font-inter font-medium text-sm'>FAQs</p>
          </div>
          <div className='flex flex-col items-center gap-3'>
            <h2 className='text-[30px] min-[420px]:text-[40px] text-black font-sf font-semibold text-center'>Frequently Asked Questions</h2>
            <p className='w-full min-[380px]:w-auto text-center text-black/50 font-sarabun font-medium text-base'>Quick answers to help you tap with confidence.</p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-[52px]">
          <div className="w-[95%] overflow-scroll min-[775px]:overflow-visible max-w-[542px] h-[69px] bg-[#F6F6F6] p-3 rounded-[40px]">
            <div className="flex w-fit min-[710px]:w-full h-full justify-between min-[605px]:gap-[11px] items-center">
              {["general","pricing","technical", "legal"].map((faqbtn, index)=>(
                <button 
                  key={index} 
                  className={`rounded-[30px] px-[25px] min-[470px]:px-[38px] py-[14px] gap-[10px] font-sf capitalize font-medium text-sm 
                    ${activeTab === faqbtn ? "bg-[#FFFFFF] shadow-[0px_4px_20px_0px_#0000000D] text-[#000000]" : "text-[#00000080]"}
                  `} 
                  onClick={()=>setActiveTab(faqbtn)}
                >
                  {faqbtn}
                </button>
              ))}
            </div>
          </div>
          <Faq activeTab={activeTab}/>
        </div>
      </div>
    </div>
  )
}

export default Faqs;


const Faq = ({activeTab} : {activeTab:string}) => {
  const [activeFaq, setActiveFaq] = useState(0);
  const faqsData = [
    {
      question: "How does the product work?",
      answer: "Figma ipsum component variant main layer. Variant pixel device strikethrough export mask team. Editor frame figma selection layout component hand rectangle.",
      category: ["general", "pricing"],
    },
    {
      question: "How does the product work?",
      answer: "Figma ipsum component variant main layer. Variant pixel device strikethrough export mask team. Editor frame figma selection layout component hand rectangle.",
      category: ["general", "technical"],
    },
    {
      question: "How does the product work?",
      answer: "Figma ipsum component variant main layer. Variant pixel device strikethrough export mask team. Editor frame figma selection layout component hand rectangle.",
      category: ["general", "legal"],
    },
    {
      question: "How does the product work?",
      answer: "Figma ipsum component variant main layer. Variant pixel device strikethrough export mask team. Editor frame figma selection layout component hand rectangle.",
      category: ["general", "technical"],
    },
    {
      question: "How does the product work?",
      answer: "Figma ipsum component variant main layer. Variant pixel device strikethrough export mask team. Editor frame figma selection layout component hand rectangle.",
      category: ["general", "pricing"],
    },
    {
      question: "How does the product work?",
      answer: "Figma ipsum component variant main layer. Variant pixel device strikethrough export mask team. Editor frame figma selection layout component hand rectangle.",
      category: ["general", "legal"],
    },
    {
      question: "How does the product work?",
      answer: "Figma ipsum component variant main layer. Variant pixel device strikethrough export mask team. Editor frame figma selection layout component hand rectangle.",
      category: ["general", "technical"],
    },
  ]

  return(
    <div className="flex flex-col w-full gap-5">
        {activeTab === "general" ? (
          faqsData.filter((faqdata) => faqdata.category.includes("general")).map((faqdata, index) => (
            <FaqCard
              index={index}
              question={faqdata.question}
              answer={faqdata.answer}
              activeFaq={activeFaq}
              onclick={()=>setActiveFaq(index)}
            />
          ))
        ) : activeTab === "pricing" ? (
          faqsData.filter((faqdata) => faqdata.category.includes("pricing")).map((faqdata, index) => (
            <FaqCard
              index={index}
              question={faqdata.question}
              answer={faqdata.answer}
              activeFaq={activeFaq}
              onclick={()=>setActiveFaq(index)}
            />
          ))
        ) : activeTab === "technical" ? (
          faqsData.filter((faqdata) => faqdata.category.includes("technical")).map((faqdata, index) => (
            <FaqCard
              index={index}
              question={faqdata.question}
              answer={faqdata.answer}
              activeFaq={activeFaq}
              onclick={()=>setActiveFaq(index)}
            />
          ))
        ) : activeTab === "legal" && (
          faqsData.filter((faqdata) => faqdata.category.includes("legal")).map((faqdata, index) => (
            <FaqCard
              index={index}
              question={faqdata.question}
              answer={faqdata.answer}
              activeFaq={activeFaq}
              onclick={()=>setActiveFaq(index)}
            />
          )) 
        )}
    </div>
  )
}