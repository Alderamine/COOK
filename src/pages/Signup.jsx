import React from 'react'
import Google from "../assets/Signup/Google.svg"
import Facebook from "../assets/Signup/Facebook.svg"

export default function Signup() {
  return (
    <main className='h-screen flex'>
      <div className='bg-primary2 w-[49.306vw] h-full'></div>

      <div className='bg-[white] w-[50.694vw] h-full flex flex-col items-center pt-[105px]'>
        <div className='w-fit h-fit flex flex-col justify-center items-center'>
          <h1 className='font-rubik font-bold text-[32px] leading-[37.92px] tracking-[-0.02em]'>Sign up to <span className='text-primary2 underline'>COOK</span></h1>
          <div className='flex flex-col gap-[8px] mt-[24px]'>
            <button className='flex items-center justify-center gap-[14px] w-[322px] h-[56px] border border-[rgba(255,219,184,1)] font-outfit font-normal text-[20px] leading-[30px]'>
              <img src={Google} alt="" />
              Continue with Google
            </button>
            <button className='flex items-center justify-center gap-[14px] w-[322px] h-[56px] border border-[rgba(255,219,184,1)] font-outfit font-normal text-[20px] leading-[30px]'>
              <img src={Facebook} alt="" />
              Continue with Google
            </button>
          </div>
        </div>

        <div className='max-h-[1px] border border-[rgba(255,219,184,1)] w-full relative my-[79px]'>
          <p className='font-outfit font-normal text-[14px] leading-[17.64px] text-TextColorSec w-[34px] h-[38px] bg-[white] absolute top-[-10px] left-[50%] text-center'>or</p>
        </div>

        <div>
          <h3 className='font-redHatDisplay font-bold text-[20px] leading-[26.46px] text-center'>Sign up with email</h3>
          <form className='w-[346px] flex flex-col gap-[18px] items-center mt-[29px]'>
            <div className='w-full flex gap-[18px]'>
              <div className='w-[164px] flex flex-col gap-[2px]'>
                <label className='font-outfit font-medium text-[16px] leading-[20.16px]' htmlFor="">First Name</label>
                <input className='border border-[rgba(255,219,184,1)] h-[37px]' type="text" />
              </div>
              <div className='w-[164px] flex flex-col gap-[2px]'>
                <label className='font-outfit font-medium text-[16px] leading-[20.16px]' htmlFor="">Last Name</label>
                <input className='border border-[rgba(255,219,184,1)] h-[37px]' type="text" />
              </div>
            </div>

            <div className='w-full flex flex-col gap-[2px]'>
              <label className='font-outfit font-medium text-[16px] leading-[20.16px]' htmlFor="">Email</label>
              <input className='border border-[rgba(255,219,184,1)] h-[37px]' type="text" />
            </div>

            <div className='w-full flex flex-col gap-[2px]'>
              <label className='font-outfit font-medium text-[16px] leading-[20.16px]' htmlFor="">Password</label>
              <input className='border border-[rgba(255,219,184,1)] h-[37px]' type="text" />
            </div>

            <button className='text-[white] bg-primary2 h-[39px] w-[122px] rounded-[4px] font-outfit font-medium text-[18px] leading-[22.68px]'>Join COOK</button>
          </form>
        </div>
      </div>
    </main>
  )
}
