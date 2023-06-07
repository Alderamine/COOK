import React, { useState } from 'react'
import AutherProfile from "../assets/Support/AutherProfile.png"

export default function CategoryCard({title, description, icon }) {
  const [arr, setArr] = useState([1, 2, 3]);

  console.log(icon);

  return (
    <div className='w-[1090px] h-[197px] rounded-[8px] border border-[rgba(255,219,184,1)] m-auto py-[20px] pl-[76px] pr-[39px] relative mt-[58px]'>
      <img src={icon} className='absolute top-[-34px] left-[-29px]'/>
      <div className='mb-[29px]'>
        <h1 className='font-rubik font-semibold text-[28px] leading-[33.18px] tracking-[-0.02em] text-TextColor mb-[7px]'>{title}</h1>
        <p className='font-outfit font-normal text-[18px] leading-[27px] text-TextColorSec'>{description}</p>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex gap-[7px] items-center'>
          <div className='flex'>
            {arr.map((n, index) => {
              const adjustedNumber = arr.length - index;
              const leftPosition = `-${index * 1.4}%`;
              return (
                <img
                  key={index}
                  style={index !== 0 ? { left: leftPosition, zIndex: adjustedNumber } : { zIndex: adjustedNumber }}
                  className='relative w-[35px]'
                  src={AutherProfile}
                  alt=""
                />
              );
            })}
          </div>
          <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec'>50+ authors</p>
        </div>
        <div className='flex gap-[9px] items-center'>
          <p className='font-outfit font-semibold text-[16px] leading-[18.13px] text-[rgba(210,119,34,1)]'>View all articles</p>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17.5L17 7.5" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7 7.5H17V17.5" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}
