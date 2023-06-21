import React, { useState } from 'react'
import GroupCard1 from "../assets/GroupList/GroupCard1.png"
import GroupHeroPattern from "../assets/GroupList/GroupHeroPattern.png"
import AutherProfile from "../assets/Support/AutherProfile.png"
import JoinClassGroup from '../assets/allAssets/join-cook-groups.jpg'
import GroupCard from '../components/GroupList/GroupCard'
import Pagination from '../components/utils/Pagination'
import FilterIcon from "../assets/TutorList/FilterIcon.svg"

export default function GroupList() {

  return (
    <main>
      <div className='w-full min-h-[411px] flex items-center md:justify-center sm:justify-center bg-[rgba(255,253,244,1)] xsm:mt-[104px]'>
        <div className='pl-[67px] pr-[118px] xsm:pl-[8.205vw] xsm:pr-[8.205vw] flex items-center justify-between w-full'>
          <div className='flex flex-col gap-[20px] md:items-center sm:items-center xsm:items-center md:flex-1 sm:flex-1'>
            <h1 className='font-bold font-rubik text-[54px] leading-[63.99px] tracking-[-0.02em] md:text-center sm:text-center xsm:text-center md:text-[36px] md:leading-[42.66px] xsm:text-[42px] xsm:leading-[50.11px]'>Cook Together with <span className='font-pacifico font-normal leading-[94.82px] text-primary2 md:leading-[63.22px] sm:leading-[63.22px]'>Group</span></h1>
            <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec w-[37.014vw] md:w-[63.832vw] sm:w-[63.832vw] xsm:w-[83.59vw] md:text-center sm:text-center xsm:text-center'>Embrace the fun of learning with COOK's group lessons. Dive into lively discussions, collaborate on recipes, and connect with a diverse community of food lovers. Transform your kitchen into a vibrant, interactive culinary classroom!</p>
            <div className='flex items-center gap-[17px]'>
              <button className='px-[16px] h-[39px] rounded-[4px] font-outfit font-medium text-[18px] leading-[22.68px] text-[white] bg-primary'>Explore groups</button>
              <button className='px-[16px] h-[39px] rounded-[4px] font-outfit font-medium text-[18px] leading-[22.68px] text-primary2 bg-[white] border-2 border-primary'>Find A Tutor</button>
            </div>
          </div>
          <div className='md:hidden sm:hidden xsm:hidden'>
            <div className='w-fit relative'>
              <img className='w-[306px] absolute z-10 right-[-35px] bottom-[-40px]' src={GroupHeroPattern} alt="" />
              <img className='w-[470px] rounded-[9px] relative z-20' src={JoinClassGroup} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className='pl-[65px] pr-[63px] md:px-[5.749vw] sm:px-[5.749vw] xsm:px-[8.205vw] '>
        <button className='w-full rounded-[12px] justify-center py-[14px] mt-[21px] mb-[41px] xsm:flex hidden gap-[12px] items-center border-2 border-[rgba(255,219,184,1)]'>
          <img src={FilterIcon} alt="" />
          <p className='font-outfit font-medium text-[22px] leading-[33px]'>Filters</p>
        </button>
        <div className='flex gap-[21px] mt-[81px] mb-[79px] flex-wrap xsm:hidden'>
          <div className='flex flex-col gap-[4ox]'>
            <p className='font-outfit font-semibold text-[16px] leading-[24px] text-primary'>Category</p>
            <select name="" className='min-h-[49px] w-[239px] md:w-[231px] sm:w-[231px] flex border-2 border-[rgba(255,219,184,1)] font-outfit font-normal text-[20px] leading-[25.2px] text-TextColor flex-1 rounded-[12px] px-[16px]' id="">
              <option selected value="Baking">Baking</option>
            </select>
          </div>
          <div className='flex flex-col gap-[4ox]'>
            <p className='font-outfit font-semibold text-[16px] leading-[24px] text-primary'>Price</p>
            <select name="" className='min-h-[49px] w-[239px] md:w-[231px] sm:w-[231px] flex border-2 border-[rgba(255,219,184,1)] font-outfit font-normal text-[20px] leading-[25.2px] text-TextColor flex-1 rounded-[12px] px-[16px]' id="">
              <option selected value="Baking">Mon, 27 Apr </option>
            </select>
          </div>
          <div className='flex flex-col gap-[4ox]'>
            <p className='font-outfit font-semibold text-[16px] leading-[24px] text-primary'>Time</p>
            <select name="" className='min-h-[49px] w-[239px] md:w-[231px] sm:w-[231px] flex border-2 border-[rgba(255,219,184,1)] font-outfit font-normal text-[20px] leading-[25.2px] text-TextColor flex-1 rounded-[12px] px-[16px]' id="">
              <option selected value="Baking">9:00pm - 10:00pm</option>
            </select>
          </div>
          <div className='flex flex-col gap-[4ox]'>
            <p className='font-outfit font-semibold text-[16px] leading-[24px] text-primary'>Date</p>
            <select name="" className='min-h-[49px] w-[239px] md:w-[231px] sm:w-[231px] flex border-2 border-[rgba(255,219,184,1)] font-outfit font-normal text-[20px] leading-[25.2px] text-TextColor flex-1 rounded-[12px] px-[16px]' id="">
              <option selected value="Baking">Mon, 27 Apr </option>
            </select>
          </div>
        </div>

        <div className='w-full'>
          <div>
            <h3 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em]'>Popular classes</h3>
            <div className='grid grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xsm:grid-cols-1 items-center gap-x-[20px] gap-y-[42px] mt-[26px]'>
              <GroupCard background={"rgba(255,253,244,1)"} />
              <GroupCard background={"rgba(255,253,244,1)"} />
              <GroupCard background={"rgba(255,253,244,1)"} />
              <GroupCard background={"rgba(255,253,244,1)"} />
            </div>
          </div>
          <div className='w-full mt-[87px]'>
            <h3 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em]'>All group classes</h3>
            <div className='grid grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xsm:grid-cols-1 items-center gap-x-[20px] xsm:gap-y-[42px] gap-y-[55px] mt-[26px]'>
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />

              <div className='xsm:w-[96.71vw] w-full xsm:ml-[-8.205vw] col-span-4 md:col-span-2 sm:col-span-2 xsm:col-span-1'>
                <div className='w-full my-[55px] min-h-[245px] md:justify-center sm:justify-center xsm:rounded-[0px] xsm:justify-center bg-primary2 md:py-[62px] md:px-[72px] sm:py-[62px] sm:px-[72px] xsm:py-[54px] xsm:px-[8.205vw] rounded-[16px] md:min-w-full sm:min-w-full xsm:min-w-full pl-[3.194vw] pr-[4.028vw] flex items-center'>
                  <div className='flex md:flex-col sm:flex-col xsm:flex-col items-center gap-x-[5.208vw] gap-y-[24px] w-full'>
                    <h3 className='w-[42.083vw] md:w-[56vw] xsm:w-full sm:w-[56vw] md:text-center sm:text-center xsm:text-center font-rubik font-semibold text-[51px] leading-[60.08px] tracking-[-0.02em] md:tracking-[0px] sm:tracking-[0px] text-[white] md:text-[36px] md:leading-[42.41px] sm:text-[36px] sm:leading-[42.41px] '>Improve your skills with <span className='text-[rgba(255,219,184,1)] font-pacifico font-normal'>one-on-one coaching</span></h3>
                    <p className='w-[37.014vw] md:w-[63.832vw] xsm:w-full sm:w-[63.832vw] md:text-center sm:text-center xsm:text-center font-outfit font-normal text-[18px] leading-[27px] text-[white]'>Looking for personalized guidance? Explore our dedicated tutors who are ready to share their culinary wisdom. Tailor your learning journey to your pace and preferences with one-on-one coaching.</p>
                    <button className='hidden md:flex sm:flex xsm:flex text-[rgba(255,219,184,1)] border-2 border-[rgba(255,219,184,1)] rounded-[4px] px-[16px] py-[8px] font-outfit font-medium text-[18px] leading-[22.68px]'>Find A Tutor</button>
                  </div>
                </div>
              </div>


              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
            </div>

            <Pagination currentPage={1} totalPages={6} />
          </div>
        </div>



      </div>
    </main>
  )
}
