import Image from 'next/image';
import React from 'react';
import { FeatCard } from './features';

const OurFeatures = () =>{
  return(
    <div id="features" className="max-w-[1440px] bg-white w-full flex py-[80px] px-[25px] min-[400px]:px-[35px] min-[678px]:px-[70px] min-[980px]:px-8 min-[1064px]:px-10 min-[1200px]:px-[80px] items-center justify-center">
      <div className='w-full max-w-[1165px] flex flex-col gap-[100px] items-center justify-center'>
        <div className='w-[85%] sm:w-[362px] flex flex-col items-center gap-5'>
          <div className='flex rounded-[20px] border-[1.5px] border-dashed items-center py-[9px] px-3 gap-[6px] bg-[#0B2B26]/60 border-[#FFFFFF]/80'>
            <Image src="/star.svg" alt='icn' width={16} height={16}/>
            <p className='text-white font-inter font-medium text-sm'>Benefits</p>
          </div>
          <div className='flex flex-col items-center gap-3'>
            <h2 className='text-[30px] min-[380px]:text-[40px] text-black font-sf font-semibold text-center'>Our Features</h2>
            <p className='w-full min-[380px]:w-auto text-center text-black/50 font-sarabun font-medium text-base'>Everything you need to pay, get paid, and stay in control — all in one app.</p>
          </div>
        </div>
        <Features/>
      </div>
    </div>
  )
}

export default OurFeatures;


const Features = () =>{
  return(
    <div className='w-full flex flex-col items-center gap-4'>
      <div className='w-full flex flex-wrap justify-center min-[880px]:justify-between min-[980px]:justify-center items-center gap-4'>
        <FeatCard
          classname='w-full min-[880px]:w-[48.5%] max-w-[576px] min-[980px]:w-[55%] min-[980px]:max-w-[576px] overflow-hidden'
          name='Built-in Wallet'
          info='Store funds, top up, or withdraw to your bank or card anytime.'
          imgHeight="h-[196px]"
          imgWidth="w-full min-[369px]:w-[280px] min-[500px]:w-[337px] min-[880px]:w-full min-[980px]:w-[337px]"
          imgUrl="/feature-1.png"
          imgStyle='min-[369px]:my-[35px] min-[880px]:my-[0px] min-[845px]:my-[35px] min-[980px]:my-[35px]'
        />
        <FeatCard
          classname='w-full min-[880px]:w-[48.5%] max-w-[576px] min-[980px]:w-[40%] min-[980px]:max-w-[430px]'
          name='Refunds and Disputes'
          info='Request refunds or dispute payments in a few taps.'
          imgHeight="h-[156px] min-[880px]:h-[196px]"
          imgWidth="w-[150px] min-[500px]:w-[150px]"
          imgUrl="/feature-2.svg"
          imgStyle='mt-[11px] mb-[38px]'
        />
      </div>

      <div className='w-full flex flex-wrap justify-center min-[880px]:justify-between min-[980px]:justify-center items-center gap-4'>
        <FeatCard
          classname='w-full min-[880px]:w-[48.5%] max-w-[576px] min-[980px]:max-w-[503px] min-[980px]:w-[47.5%]'
          name='NFC Payments'
          info='Send or receive money instantly by tapping phones — no hardware or QR codes.'
          imgHeight="h-[140px] min-[369px]:h-[194px] min-[880px]:h-[160px]"
          imgWidth="w-[250px] min-[395px]:w-[300px] min-[500px]:w-[400px] min-[880px]:w-[90%] min-[880px]:max-w-[400px]"
          imgUrl="/feature-3.png"
          imgStyle='mt-[15px] mb-[35px]'
        />
        <FeatCard
          classname='w-full min-[880px]:w-[48.5%] max-w-[576px] min-[980px]:max-w-[503px] min-[980px]:w-[47.3%]'
          name='Secure Login'
          info='Protect your account with biometrics, OTP, and two-factor authentication.'
          imgHeight="h-[174px] min-[880px]:h-[160px]"
          imgWidth="w-[280px] min-[500px]:w-[337px]"
          imgUrl="/feature-4.png"
          imgStyle='mt-[19px] mb-[35px]'
        />
      </div>

      <div className='w-full flex flex-wrap justify-center min-[880px]:justify-between min-[980px]:justify-center items-center gap-4'>
        <FeatCard
          classname='w-full min-[880px]:w-[48.5%] max-w-[576px] min-[980px]:w-[40%] min-[980px]:max-w-[430px]'
          name='Refunds and Disputes'
          info='Request refunds or dispute payments in a few taps.'
          imgHeight="h-[230px]"
          imgWidth="w-[320px] min-[500px]:w-[412px]"
          imgUrl="/feature-5.png"
          imgStyle='mt-[-23px] mb-[35px]'
        />
        <FeatCard
          classname='w-full min-[880px]:w-[48.5%] max-w-[576px] min-[980px]:w-[55%] min-[980px]:max-w-[576px]'
          name='Monthly Reports'
          info='Download summaries of your transactions anytime.'
          imgHeight="h-[236px]"
          imgWidth="w-[300px] min-[500px]:w-[400px]"
          imgUrl="/feature-6.png"
          imgStyle='mt-[15px] min-[880px]:mt-[5px] mb-[35px]'
        />
      </div>
    </div>
  )
}