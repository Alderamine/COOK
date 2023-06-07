import React from 'react'
import NavIcon from "../assets/Support/NavIcon.svg"
import NavEnglish from "../assets/Support/NavEnglish.svg"

export default function SupportNav() {
  return (
    <nav className='w-full h-[166px] pl-[168px] pr-[175px] bg-[#D27722] flex items-center'>
      <div className='flex-1 flex items-center justify-between'>
        <div>
          <h1 className='text-[48px] font-rubik font-bold tracking-[-0.02em] leading-[56.88px] text-[#FFDBB8]'>COOK</h1>
          <div className='flex gap-[11px] mt-[0.5px]'>
            <img src={NavIcon} />
            <p className='font-medium font-rubik text-[24px] leading-[28.44px] tracking-[-0.02em] text-[white]'>Support and Q&A</p>
          </div>
        </div>

        <div className='flex flex-col items-end'>
          <div className='flex gap-[29px]'>
            <p className='font-outfit font-normal text-[20px] leading-[25.2px] text-[white] '>Go to COOK</p>
            <div className='flex gap-[8px]'>
              <p className='font-outfit font-normal text-[20px] leading-[25.2px] text-[white] '>English</p>
              <img src={NavEnglish} alt="" />
            </div>
          </div>
          <div className='w-[37.153vw] h-[49px] border-2  border-[#FFDBB8] rounded-[4px] flex items-center px-[16px] relative mt-[16px]'>
            <svg className='absolute' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z" stroke="#FFDBB8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20.9999 21.5L16.6499 17.15" stroke="#FFDBB8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <input type="text" className='flex-1 h-full outline-none indent-[37px] bg-[#00000000] text-[#FFDBB8] placeholder:text-[#FFDBB8]' placeholder='Search' />
          </div>
        </div>
      </div>
    </nav>
  )
}