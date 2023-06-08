import React from 'react'

export default function SupportArticlesRow({articleTitle}) {
  return (
    <div className='flex justify-between items-center pl-[10px] pt-[24px]'>
      <p className='font-outfit font-medium text-[18px] leading-[22.68px] py-[10.5px]'>{articleTitle.articleTitle}</p>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 5L19 12L12 19" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  )
}
