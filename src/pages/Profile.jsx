import React from 'react'
import ProfilePicture from "../assets/Profile/ProfilePicture.png"
import PlayIcon from "../assets/Profile/PlayIcon.svg"
import BakerIcon from "../assets/Profile/BakerIcon.svg"
import UserIcon from "../assets/Profile/UserIcon.svg"
import CookIcon from "../assets/Profile/CookIcon.svg"

import StarIcon2 from "../assets/TutorList/StarIcon2.svg"

export default function Profile() {
  return (
    <main className='px-[175px]'>
      <div className='pt-[79px] flex gap-[20px]'>
        <div className='flex gap-[66px] min-w-[754px]'>
          <div className='relative w-fit'>
            <img className='w-[267px] relative' src={ProfilePicture} alt="" />
            <img className='absolute bottom-[13px] right-[15px]' src={PlayIcon} alt="" />
          </div>

          <div>
            <div>
              <h1 className='font-rubik font-semibold text-[42px] leading-[49.77px] tracking-[-0.02em]'>Sarah Doe</h1>
              <p className='font-outfit font-normal text-[18px] leading-[27px]'>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div className='flex flex-col gap-[6px] mt-[30px]'>
              <div className='flex items-center gap-[7px]'>
                <img src={BakerIcon} alt="" />
                <p className='font-outfit font-normal text-[18px] leading-[27px]'>Baker</p>
              </div>
              <div className='flex items-center gap-[7px]'>
                <img src={UserIcon} alt="" />
                <p className='font-outfit font-normal text-[18px] leading-[27px]'>15 active students</p>
              </div>
              <div className='flex items-center gap-[7px]'>
                <img src={CookIcon} alt="" />
                <p className='font-outfit font-normal text-[18px] leading-[27px]'>100 lessons on COOK</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[313px] self-end h-[243px] rounded-[12px] py-[30px] px-[37px] bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)]'>
          <div>
            <div className='flex items-center justify-between gap-[20px]'>
              <div className='flex flex-col justify-center items-center'>
                <p className='font-rubik font-bold text-[32px] leading-[37.92px]'>$1000</p>
                <p className='font-outfit font-[300] text-[18px] leading-[22.68px] text-TextColorSec'>50-minutes</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <div className='flex items-center gap-[4px]'>
                  <p className='font-rubik font-bold text-[32px] leading-[37.92px]'>5</p>
                  <img className='w-[27px]' src={StarIcon2} alt="" />
                </div>
                <p className='font-outfit font-[300] text-[18px] leading-[22.68px] text-TextColorSec'>100 reviews</p>
              </div>
            </div>

            <button className='w-full h-[39px] border-2 border-primary rounded-[4px] font-outfit font-normal text-[18px] leading-[22.68px] text-primary mt-[27px]'>Send A Message</button>
            <button className='w-full h-[39px] border-2 border-primary rounded-[4px] font-kanit font-normal text-[18px] leading-[26.91px] bg-primary text-[white] mt-[12px]'>Book A Trial Lesson</button>
          </div>
        </div>
      </div>

      <div className='w-[753.998px] border border-[rgba(255,219,184,1)] mt-[50px] min-h-[110px] rounded-[12px] px-[16px] py-[12px]'>
        <div className='flex items-center gap-[16px] '>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <h4 className='font-outfit font-semibold text-[22px] leading-[27.72px]'>Verified tutor</h4>
        </div>
        <p className='font-outfit font-normal text-[18px] leading-[27px]'>Lorem ipsum dolor sit amet consectetur. Vel mattis gravida elementum tellus sollicitudin vitae auctor lacus luctus. Neque sed ullamcorper lectus.</p>
      </div>

      <div className='flex items-center gap-[18px] mt-[60px]'>
        <button className='px-[21px] min-h-[43px] bg-primary text-[white] rounded-[8px] font-outfit font-normal text-[18px] leading-[27px]'>About</button>
        <button className='px-[21px] min-h-[43px] border border-[rgba(255,219,184,1)] rounded-[8px] font-outfit font-normal text-[18px] leading-[27px]'>Availability</button>
        <button className='px-[21px] min-h-[43px] border border-[rgba(255,219,184,1)] rounded-[8px] font-outfit font-normal text-[18px] leading-[27px]'>Reviews (100)</button>
        <button className='px-[21px] min-h-[43px] border border-[rgba(255,219,184,1)] rounded-[8px] font-outfit font-normal text-[18px] leading-[27px]'>Resume</button>
        <button className='px-[21px] min-h-[43px] border border-[rgba(255,219,184,1)] rounded-[8px] font-outfit font-normal text-[18px] leading-[27px]'>Subjects</button>
      </div>


      <div className='w-[753.998px] border border-[rgba(255,219,184,1)] mt-[50px] min-h-[110px] rounded-[12px] px-[32px] bg-[rgba(255,253,244,1)] py-[24px]'>
        <h4 className='font-outfit font-semibold text-[22px] leading-[27.72px]'>About</h4>
        <p className='font-outfit font-normal text-[16px] leading-[24.8px] mt-[12px] min-w-[48.125vw]'>Lorem ipsum dolor sit amet consectetur. Nisi urna arcu tempor in dui. At rhoncus senectus vel ullamcorper eget at id est. Imperdiet penatibus purus augue ut vitae interdum. Sit netus tincidunt massa fames id iaculis molestie at. Egestas duis et id tincidunt eros elit urna. Sed nunc nec fringilla gravida faucibus consequat feugiat fermentum tempus. Eleifend tempus mauris ac metus quis tellus feugiat. At libero pellentesque enim senectus odio suscipit augue eu pulvinar. Nisl integer quis tellus id hendrerit.</p>
      </div>
    </main>
  )
}
