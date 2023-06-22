import React from 'react'

export default function IWantToLearn() {
  return (
    <div className='absolute z-40 w-full p-[16px] flex flex-col gap-[18px] bg-[white] border-2 border-t-[0px] border-[rgba(255,219,184,1)] rounded-bl-[8px] rounded-br-[8px]'>
      <div className='flex items-center gap-[12px]'>
        <input id='myCheckbox' className='w-[23px] h-[23px]' type="checkbox" name="" />
        <label className='font-outfit font-normal text-[18px] leading-[22.68px]' htmlFor="">Baking</label>
      </div>
      <div className='flex items-center gap-[12px]'>
        <input className='w-[23px] h-[23px]' type="checkbox" name="" id="myCheckbox" />
        <label className='font-outfit font-normal text-[18px] leading-[22.68px]' htmlFor="">Italian Cuisine</label>
      </div>
      <div className='flex items-center gap-[12px]'>
        <input className='w-[23px] h-[23px]' type="checkbox" name="" id="myCheckbox" />
        <label className='font-outfit font-normal text-[18px] leading-[22.68px]' htmlFor="">Italian Cuisine</label>
      </div>
      <div className='flex items-center gap-[12px]'>
        <input className='w-[23px] h-[23px]' type="checkbox" name="" id="myCheckbox" />
        <label className='font-outfit font-normal text-[18px] leading-[22.68px]' htmlFor="">Italian Cuisine</label>
      </div>
    </div>
  )
}
