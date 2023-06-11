import React from 'react'
import TutorProfile from "../../assets/TutorList/TutorProfile.png"
import BakerIcon from "../../assets/TutorList/BakerIcon.svg"
import UserIcon from "../../assets/TutorList/UserIcon.svg"
import StarIcon2 from "../../assets/TutorList/StarIcon2.svg"

export default function TutorCard() {
  return (
    <div className='w-[979px] border-2 border-[rgba(255,219,184,1)] px-[29.5px] py-[45px] rounded-[16px] flex gap-[46px] items-start'>
      <img className='w-[154px]' src={TutorProfile} alt="" />
      <div>
        <div>
          <h3 className='font-rubik font-semibold text-[32px] leading-[37.92px] tracking-[-0.02em]'>Sarah Doe</h3>
          <div className='flex items-center gap-[18px]'>
            <div className='flex items-center gap-[7px]'>
              <img src={BakerIcon} alt="" />
              <p className='font-outfit font-normal text-[18px] leading-[22.68px] text-primary'>Baker</p>
            </div>
            <div className='flex items-center gap-[7px]'>
              <img src={UserIcon} alt="" />
              <p className='font-outfit font-normal text-[18px] leading-[22.68px] text-primary'>15 active students</p>
            </div>
          </div>
        </div>

        <div>
          <p className='font-outfit font-normal text-[16px] leading-[24px] mt-[30px]'>Lorem ipsum dolor sit amet consectetur. Massa consequat cras tortor cras morbi amet massa amet fermentum. Et malesuada posuere sem dictumst ultricies ut varius. Sagittis arcu sit dictum adipiscing a sapien.</p>
          <p className='font-outfit font-semibold text-[16px] leading-[24px] text-primary mt-[10px]'>Learn more</p>
        </div>
      </div>

      <div >
        <div className='flex items-center justify-center gap-[20px]'>
          <div className='flex flex-col justify-center items-center'>
            <div className='flex items-center gap-[4px]'>
              <p className='font-rubik font-bold text-[24px] leading-[28.44px]'>5</p>
              <img className='w-[27px]' src={StarIcon2} alt="" />
            </div>
            <p className='font-outfit font-medium text-[12px] leading-[15.12px] text-TextColorSec'>100 reviews</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <p className='font-rubik font-bold text-[24px] leading-[28.44px]'>$100</p>
            <p className='font-outfit font-medium text-[12px] leading-[15.12px] text-TextColorSec'>per 60min </p>
          </div>
        </div>

        <button className='w-[165px] h-[39px] border-2 border-primary rounded-[4px] font-outfit font-medium text-[18px] leading-[22.68px] text-primary mt-[15px]'>Write a message</button>
        <button className='w-[165px] h-[39px] border-2 border-primary rounded-[4px] font-outfit font-medium text-[18px] leading-[22.68px] bg-primary text-[white] mt-[15px]'>Book a lesson</button>
      </div>
    </div>
  )
}
