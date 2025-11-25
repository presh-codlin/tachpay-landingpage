"use client";
import React, {useState} from 'react';
import Link from "next/link";
import { Logo } from "../../public/assets";
import Image from "next/image";

const quickLinks = [
  {name: "about.", url: "/"},
  {name: "testimonials.", url: "/"},
  {name: "pricing.", url: "/"},
  {name: "contacts.", url: "/"},
]

const socialGroups = [
  [
    {img: "/vector-1.svg", width: 11.25, height: 18},
    {img: "/vector.svg", width: 20, height: 12},
    {img: "/vector-2.svg", width: 18.46, height: 15},
  ],[
    {img: "/vector-3.svg", width: 18, height: 18},
    {img: "/vector-4.svg", width: 18, height: 18},
  ]
]

const Footer = ()=>{
  const [currentLang, setCurrentLang] = useState(0);
  return (
    <div className="w-full flex justify-center items-center bg-[#0B2B26]">
      <h1 className="text-[120px] hidden min-[980px]:block text-[270px] absolute font-sarabun bg-gradient-to-b from-white/100 to-white/0 via-40% via-white/10 to-70% text-transparent bg-clip-text">TachPay</h1>
      <div className="max-w-[1440px] w-full z-50 h-fit min-[980px]:h-[596px] gap-[100px] min-[980px]:gap-8 flex py-[64px] px-4 min-[380px]:px-[35px] min-[678px]:px-[70px] min-[960px]:px-8 min-[1064px]:px-10 min-[1200px]:px-[80px] flex-col min-[960px]:flex-row min-[960px]:items-center justify-between">
        <div className="w-full min-[960px]:w-[560px] h-full flex flex-col gap-[60px] min-[960px]:justify-between items-start">
          <div className='w-full flex flex-col gap-8'>
            <Logo src="/logo-white.png" className="w-[160px] min-[980px]:w-[140px] min-[1064px]:w-[160px] h-[32px]"/>
            <div className='w-full max-w-[420px] flex flex-col gap-4'>
              <span className='font-inter text-base font-normal text-[#FFFFFF80]'>The first free end-to-end analytics service for the site, designed to work with enterprises of various levels and business segments.</span>
              <div className='flex gap-3 items-center'>
                <span className='text-[12px] font-sf font-semibold text-[#FFFFFF]'>More about us</span>
                <span className='w-[10px] h-[10px] rounded-[10px] bg-[#FFFFFF]'/>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-between items-end'>
            <div className='flex gap-[10px] items-end'>
              {socialGroups.map((socialGroup, index)=> (
                <div key={index} className='flex flex-col gap-[10px]'>
                  {socialGroup.map((social, index) => (
                    <div key={index} className="w-10 h-10 rounded-[40px] flex items-center justify-center bg-white relative">
                      <Image src={social.img} alt='icn' width={social.width} height={social.height}/>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <span className='max-w-[150px] min-[980px]:max-w-[115px] font-sf text-sm min-[980px]:text-xs text-[#FFFFFF80] font-normal'>© 2021 — Copyright All Rights reserved</span>
          </div>
        </div>
        <div className="w-full min-[960px]:w-[560px] h-full flex flex-col gap-[30px] min-[400px]:gap-[60px] min-[960px]:justify-between items-start">
          <ul className="flex flex-wrap items-center min-[380px]:items-start gap-[20px] min-[400px]:gap-[41px]">
            {quickLinks.map((quickLink, index) => (
              <Link key={index} href={quickLink.url} className="text-[#FFFFFF] font-normal text-base capitalize font-sf">
                {quickLink.name}
              </Link>
            ))}
          </ul>
          <div className="w-full min-[980px]:w-[530px] flex flex-col gap-10 min-[480px]:gap-0 min-[480px]:flex-row justify-between items-end">
            <div className="flex flex-col min-[400px]:flex-row min-[480px]:flex-col gap-[12px] min-[400px]:gap-[48px] items-start">
              <div className="flex flex-col gap-2 min-[400px]:gap-4">
                <h3 className="min-[400px]text-xl text-[#FFFFFF] font-inter font-medium capitalize">contact us</h3>
                <div className="flex gap-2 min-[400px]:gap-0 min-[400px]:flex-col">
                  {["+1 (999) 888-77-66", "hello@logoipsum.com"].map((contact, index)=>(
                    <span key={index} className="font-inter text-sm font-normal text-[#FFFFFF80]">{contact}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:gap-4">
                <h3 className="text-[20px] text-[#FFFFFF] font-inter font-medium capitalize">location</h3>
                <div className="flex flex-col">
                  <span className="min-[400px]:max-w-[198px] font-inter text-sm font-normal text-[#FFFFFF80]">
                    483920, Moscow, Myasnitskaya 22/2/5, Office 4
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[15px]">
              <h3 className="text-sm min-[980px]:text-xs text-right text-[#FFFFFF] font-sf font-semibold capitalize">language</h3>
              <div className="flex flex-col">
                <div className="flex gap-5">
                  {["en", "es", "fr", "de", "ru"].map((lang, index)=>(
                    <span key={index} onClick={()=>setCurrentLang(index)} className={`font-sf cursor-pointer text-base min-[980px]:text-sm font-normal capitalize ${currentLang === index ? "text-[#FFFFFF]" : "text-[#FFFFFF80]"}`}>{lang}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;