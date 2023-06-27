'use client'
import React, { useState } from 'react';

export default function CopyrightTable() {
  const [showContent, setShowContent] = useState(false);
  return (
    <div>
      <div onClick={()=> setShowContent(!showContent)} className='flex items-center gap-[8px] select-none cursor-pointer'>
        <svg style={showContent?{transform:"rotate(90deg)"}:{}} className='transition-all duration-200' width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.36389 3.81795C5.72215 4.20208 5.72215 4.79792 5.36389 5.18205L2.48131 8.27282C1.86214 8.9367 0.75 8.49857 0.75 7.59077L0.75 1.40923C0.75 0.501427 1.86214 0.0632988 2.48131 0.72718L5.36389 3.81795Z" fill="#D27722" />
        </svg>
        <p className='font-outfit tracking-[-0.02em] text-[18px] leading-[21.06px] select-none'>Lorem Ipsum</p>
      </div>
      {
        <div style={showContent?{maxHeight:"100%"}:{maxHeight:'0px'}} className='transition-all duration-100 pl-[14px] overflow-hidden flex flex-col gap-[3px] mt-[3px]'>
          <p className='font-outfit text-[16px] leading-[20px] font-normal'>Lorem, ipsum dolor</p>
          <p className='font-outfit text-[16px] leading-[20px] font-normal'>Lorem, ipsum dolor</p>
          <p className='font-outfit text-[16px] leading-[20px] font-normal'>Lorem, ipsum dolor</p>
        </div>
      }
    </div>
  )
}
