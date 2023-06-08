import React from 'react'
import StarIcon from "../assets/TutorList/StarIcon.svg"
import UpsideDownIcon from "../assets/TutorList/UpsideDownIcon.svg"
import TutorCard from '../components/TutorList/TutorCard'

export default function TutorList() {
  return (
    <main className='px-[64px] w-full pt-[43px]'>
      <div className='w-full bg-primary rounded-[16px] flex justify-between items-center py-[43px] px-[52px]'>
        <div>
          <h1 className='font-rubik font-bold text-[42px] leading-[50px] trakcing-[-0.02em] text-[white]'>Find Your Perfect Chef</h1>
          <p className="font-outfit font-normal text-[24px] leading-[30.24px] text-[rgba(255,219,184,1)]">Discover, Learn, Cook with Masters</p>
        </div>
        <div className='flex flex-col items-end'>
          <div className='flex items-center gap-[8px]'>
            <img src={StarIcon} alt="" className="w-[16px]" />
            <h3 className='font-rubik font-semibold text-[22px] leading-[26.07px] tracking-[-0.02em] text-[white]'>Popular categories</h3>
          </div>
          <p className="font-outfit font-normal text-[18px] leading-[22.68px] mt-[8px] text-[rgba(255,219,184,1)]">Italian Cuisine • Vegan Cooking • Pastry & Baking </p>
        </div>
      </div>


      <div className='mt-[99px] flex justify-between items-center'>
        <div className='flex gap-[21px]'>
          <div className='h-[67px] w-[285px] rounded-[12px] flex relative border-2 border-[rgba(255,219,184,1)]'>
            <p className='absolute font-outfit font-medium text-[18px] leading-[23px] left-[-2px] bg-[white] text-primary top-[-14px] '>I want to Learn</p>
            <select name="" className='font-outfit font-normal text-[22px] leading-[27.72px] text-TextColor flex-1 rounded-[12px] pl-[20px] mr-[27px]' id="">
              <option selected value="Baking">Baking</option>
            </select>
          </div>
          <div className='h-[67px] w-[285px] rounded-[12px] flex relative border-2 border-[rgba(255,219,184,1)]'>
            <p className='absolute font-outfit  font-medium text-[18px] leading-[23px] left-[-2px] bg-[white] text-primary top-[-14px] '>I want to Learn</p>
            <select name="" className='font-outfit font-normal text-[22px] leading-[27.72px] text-TextColor flex-1 rounded-[12px] pl-[20px] mr-[27px]' id="">
              <option selected value="Baking">$50  -  $200</option>
            </select>
          </div>
          <div className='h-[67px] w-[285px] rounded-[12px] flex relative border-2 border-[rgba(255,219,184,1)]'>
            <p className='absolute font-outfit font-medium text-[18px] leading-[23px] left-[-2px] bg-[white] text-primary top-[-14px] '>I want to Learn</p>
            <select name="" className='font-outfit font-normal text-[22px] leading-[27.72px] text-TextColor flex-1 rounded-[12px] pl-[20px] mr-[27px]' id="">
              <option selected value="Baking">9:00pm - 10:00pm</option>
            </select>
          </div>
        </div>

        <div className='flex gap-[20px] items-center'>
          <div className='h-[61px] w-[131px] rounded-[12px] flex justify-center items-center gap-[12px] relative border-2 border-[rgba(255,219,184,1)] bg-primary'>
            <img className='w-[20px]' src={UpsideDownIcon} alt="" />
            <p className='font-outfit font-normal text-[22px] leading-[33px] text-[white] '>Popular</p>
          </div>
          <div className='w-[64px] h-[61px] rounded-full bg-primary flex justify-center items-center'>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9167 20.5833C16.7031 20.5833 20.5833 16.7031 20.5833 11.9167C20.5833 7.1302 16.7031 3.25 11.9167 3.25C7.1302 3.25 3.25 7.1302 3.25 11.9167C3.25 16.7031 7.1302 20.5833 11.9167 20.5833Z" stroke="#FFDBB8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22.75 22.75L18.0375 18.0375" stroke="#FFDBB8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <div className=' mt-[42px]'>
        <h3 className='font-outfit font-medium text-[22px] leading-[27.72px] text-TextColor mb-[92px]'>100 tutors found</h3>
        <div className="w-fit m-auto">
          <TutorCard />
        </div>
      </div>

    </main>
  )
}
