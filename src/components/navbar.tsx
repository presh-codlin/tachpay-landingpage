"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "../../public/assets";

const links = [
  {name: "How it works", url: "/"},
  {name: "our features", url: "/"},
  {name: "FAQs", url: "/"},
  {name: "testimonials", url: "/"},
]

export default function Navbar(){
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  return (
    <nav className="w-full h-[100px] bg-gradient-to-r from-[#FFFFFF]/50 to-white/30 fixed top-0 z-50 left-0 p-[2px]">
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-r backdrop-blur-[20px] from-white/60 to-white/30 ">
          <div className="max-w-[1440px] w-full px-4 min-[380px]:px-[35px] min-[678px]:px-[70px] min-[960px]:px-8 min-[1064px]:px-10 min-[1200px]:px-[80px] flex items-center justify-between">
            <Logo className="w-[160px] min-[980px]:w-[140px] min-[1064px]:w-[160px] h-[32px]"/>
            <ul className="hidden min-[980px]:flex items-center gap-10">
              {links.map((link, index) => (
                <Link key={index} href={link.url} className="text-black font-medium text-[15px] min-[980px]:text-[15.5px] min-[1200px]:text-[15px] capitalize font-sarabun">
                  {link.name}
                </Link>
              ))}
            </ul>
            <div className="hidden min-[980px]:flex items-center gap-[20px] min-[1200px]:gap-[30px]">
              <button className="rounded-[30px] px-[34px] py-4 flex gap-[10px] bg-[#333131] shadow-[inset_2px_4px_8px_0px_#000000CC,inset_0px_-3px_6px_0px_#D9D9D959] text-white font-medium text-[15px] font-inter capitalize">Sign up</button>
              <button className="rounded-[30px] px-[30px] shadow-[inset_-2px_4px_8px_0px_#0000001A,-6px_5px_20px_0px_#00000014] py-4 flex gap-[10px] bg-[#FFFFFF] text-black font-medium text-[15px] font-inter capitalize">log in</button>
            </div>
            <Hamburger menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
            <MobileNav menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
          </div>
        </div>
    </nav>
  );
}

const MobileNav = ({menuOpened, setMenuOpened} : {setMenuOpened:(state:boolean)=>void; menuOpened:boolean})=> {
  const handleNavLinks = () => {
    setMenuOpened(false)
  }
  return(
    <aside className={`w-full h-[100vh] ${menuOpened? "left-0" : "-left-[100%]"} transition-all duratuion-700 bg-gradient-to-r from-[#FFFFFF]/50 to-white/30 fixed top-[94px] z-50 p-[2px] min-[980px]:hidden`}>
      <div className="w-full h-full flex flex-col items-center bg-gradient-to-r backdrop-blur-[20px] from-white/60 to-white/30 ">
        <div className="w-full flex flex-col items-center justify-between gap-10">
          {/* <Logo className="w-[160px] min-[980px]:w-[140px] min-[1064px]:w-[160px] h-[32px]"/> */}
          <ul className="flex flex-col items-center mt-[100px] gap-10">
            {links.map((link, index) => (
              <Link onClick={handleNavLinks} key={index} href={link.url} className="text-black font-medium text-[15px] min-[980px]:text-[15.5px] min-[1200px]:text-[15px] capitalize font-sarabun">
                {link.name}
              </Link>
            ))}
          </ul>
          <div className="flex flex-col items-center gap-[20px]">
            <button className="rounded-[30px] px-[34px] py-4 flex gap-[10px] bg-[#333131] shadow-[inset_2px_4px_8px_0px_#000000CC,inset_0px_-3px_6px_0px_#D9D9D959] text-white font-medium text-[15px] font-inter capitalize">Sign up</button>
            <button className="rounded-[30px] px-[30px] shadow-[inset_-2px_4px_8px_0px_#0000001A,-6px_5px_20px_0px_#00000014] py-4 flex gap-[10px] bg-[#FFFFFF] text-black font-medium text-[15px] font-inter capitalize">log in</button>
          </div>
        </div>
      </div>
    </aside>
  )
}

const Hamburger = ({menuOpened, setMenuOpened} : {setMenuOpened:(state:boolean)=>void; menuOpened:boolean}) => {
  return(
    <div className="w-[36px] h-[27px] flex flex-col items-end relative justify-center gap-[6px] min-[980px]:hidden" onClick={()=>setMenuOpened(!menuOpened)}>
      {/* <span className="w-full h-[5px] absolute bg-black"/><span className="w-[5px] absolute h-full bg-black"/> */}
      <span className={`h-[5px] bg-black rounded-[3px] ${menuOpened? "w-[34px] rotate45" : "w-[36px]"}`}/>
      <span className={`${menuOpened? "hidden" : "w-[34px] h-[5px] bg-black rounded-[3px]"}`}/>
      <span className={` h-[5px] bg-black rounded-[3px] ${menuOpened? "w-[34px] rotate225" : "w-8"}`}/>
    </div>
  )
}